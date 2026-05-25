from PIL import Image
import os

folder = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\LogoLoop"
for filename in ["r1.png", "r2-fixed.png", "r3.png", "r5.png"]:
    path = os.path.join(folder, filename)
    if os.path.exists(path):
        img = Image.open(path).convert("RGBA")
        width, height = img.size
        # Let's count transparent vs non-transparent pixels, and inspect borders
        bbox = img.getbbox()
        print(f"File: {filename} | Bounding box: {bbox}")
        
        # Scan for borders/outlines: let's see if there is any black rectangle border
        # We check if there are columns or rows of pure black pixels running all the way
        # across the image.
        has_black_border = False
        # Sample top-left, top-right, bottom-left, bottom-right corners of non-transparent box
        if bbox:
            left, upper, right, lower = bbox
            # sample some pixels along the top edge of bbox
            top_pixels = [img.getpixel((x, upper)) for x in range(left, right)]
            bottom_pixels = [img.getpixel((x, lower - 1)) for x in range(left, right)]
            left_pixels = [img.getpixel((left, y)) for y in range(upper, lower)]
            right_pixels = [img.getpixel((right - 1, y)) for y in range(upper, lower)]
            
            # check if a large fraction of these are solid black (r<50, g<50, b<50, a>200)
            black_top = len([p for p in top_pixels if p[0] < 50 and p[1] < 50 and p[2] < 50 and p[3] > 200])
            black_bottom = len([p for p in bottom_pixels if p[0] < 50 and p[1] < 50 and p[2] < 50 and p[3] > 200])
            print(f"  Bbox Top Edge Black pixels: {black_top} / {len(top_pixels)}")
            print(f"  Bbox Bottom Edge Black pixels: {black_bottom} / {len(bottom_pixels)}")
        else:
            print("  Entirely transparent")
