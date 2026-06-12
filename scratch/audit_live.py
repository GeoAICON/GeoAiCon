import urllib.request
import urllib.parse
import ssl
import json

def audit_url(url):
    print(f"Auditing: {url}")
    ctx = ssl.create_default_context()
    ctx.check_hostname = True
    ctx.verify_mode = ssl.CERT_REQUIRED
    
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    
    try:
        with urllib.request.urlopen(req, context=ctx) as response:
            status = response.status
            headers = response.info()
            body = response.read().decode('utf-8')
            return status, headers, body, None
    except Exception as e:
        return None, None, None, str(e)

# 1. Audit homepage
status, headers, body, err = audit_url("https://geoaicon.com")
print(f"Status: {status}")
if err:
    print(f"Error: {err}")
else:
    print("Headers:")
    for k, v in headers.items():
        print(f"  {k}: {v}")
    
    # Check for noindex in html
    noindex_in_html = "noindex" in body.lower()
    print(f"noindex in body: {noindex_in_html}")
    if noindex_in_html:
        # Let's see some context
        idx = body.lower().find("noindex")
        print("noindex snippet:", body[max(0, idx-100):min(len(body), idx+100)])
    
    # Check for canonical tag in html
    canonical_idx = body.lower().find('rel="canonical"')
    if canonical_idx == -1:
        canonical_idx = body.lower().find("rel='canonical'")
    print(f"canonical tag exists: {canonical_idx != -1}")
    if canonical_idx != -1:
        print("Canonical tag snippet:", body[max(0, canonical_idx-50):min(len(body), canonical_idx+150)])

# 2. Audit robots.txt
status_r, headers_r, body_r, err_r = audit_url("https://geoaicon.com/robots.txt")
print(f"\nrobots.txt Status: {status_r}")
if err_r:
    print(f"robots.txt Error: {err_r}")
else:
    print("robots.txt Content:")
    print(body_r)

# 3. Audit sitemap.xml
status_s, headers_s, body_s, err_s = audit_url("https://geoaicon.com/sitemap.xml")
print(f"\nsitemap.xml Status: {status_s}")
if err_s:
    print(f"sitemap.xml Error: {err_s}")
else:
    print("sitemap.xml size:", len(body_s))
    print("sitemap.xml snippet:")
    print(body_s[:500])

# 4. Check www vs non-www redirect and HTTP vs HTTPS redirect
print("\nChecking Redirects:")
for test_url in ["http://geoaicon.com", "http://www.geoaicon.com", "https://www.geoaicon.com"]:
    try:
        req = urllib.request.Request(test_url, headers={'User-Agent': 'Mozilla/5.0'})
        # We handle redirects manually by using a custom opener or just inspect what happens
        class RedirectHandler(urllib.request.HTTPRedirectHandler):
            def redirect_request(self, req, fp, code, msg, headers, newurl):
                print(f"  Redirect {code} from {req.full_url} to {newurl}")
                return super().redirect_request(req, fp, code, msg, headers, newurl)
        
        opener = urllib.request.build_opener(RedirectHandler)
        with opener.open(req) as resp:
            print(f"  Resolved {test_url} -> {resp.geturl()} with status {resp.status}")
    except Exception as e:
        print(f"  Failed for {test_url}: {e}")
