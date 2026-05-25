import urllib.request
import os
from PIL import Image

url = "https://www.geoaicon.com/Logo1.png"
out_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\scratch\live_logo.png"

try:
    urllib.request.urlretrieve(url, out_path)
    print("SUCCESS: Live logo downloaded.")
    img = Image.open(out_path).convert("RGBA")
    print(f"Live Logo Dimensions: {img.size}")
    print(f"Live Logo Bounding Box: {img.getbbox()}")
    
    # Check if there is a black box outline in the downloaded image
    # Let's count white and black-ish pixels
    width, height = img.size
    white_count = 0
    black_count = 0
    for y in range(height):
        for x in range(width):
            p = img.getpixel((x, y))
            if p[3] > 0:
                if p[0] > 200 and p[1] > 200 and p[2] > 200:
                    white_count += 1
                elif p[0] < 50 and p[1] < 50 and p[2] < 50:
                    black_count += 1
                    
    print(f"White pixels: {white_count} | Black pixels: {black_count}")
except Exception as e:
    print(f"ERROR: {e}")
