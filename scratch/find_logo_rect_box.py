from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    
    # We will search for a rectangle box by finding the first row and column
    # that contains a significant number of dark pixels, starting from the outside
    # of the bounding box.
    # The bounding box is (68, 129, 597, 487).
    # Let's inspect the bounding box borders.
    # Let's print out the pixel colors along the bounding box edges in detail.
    bbox = img.getbbox()
    if bbox:
        left, upper, right, lower = bbox
        # Let's sample some columns at x=left, x=right-1
        print("Left edge sample pixels:", [img.getpixel((left, y)) for y in range(upper, upper+20)])
        print("Right edge sample pixels:", [img.getpixel((right-1, y)) for y in range(upper, upper+20)])
        print("Top edge sample pixels:", [img.getpixel((x, upper)) for x in range(left, left+20)])
        print("Bottom edge sample pixels:", [img.getpixel((x, lower-1)) for x in range(left, left+20)])
        
        # Let's look for a solid dark rectangle by finding rows and columns where at least 15%
        # of the pixels are dark (luminosity < 100, alpha > 100)
        for y in range(upper, lower):
            row = [img.getpixel((x, y)) for x in range(left, right)]
            dark = [p for p in row if (0.299*p[0] + 0.587*p[1] + 0.114*p[2]) < 100 and p[3] > 100]
            if len(dark) > len(row) * 0.15:
                print(f"Row {y} has {len(dark)} / {len(row)} dark pixels. First 10 dark: {[p[:3] for p in dark[:10]]}")
                break
else:
    print("Logo1.png does not exist at path.")
