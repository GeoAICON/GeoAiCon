from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        left, upper, right, lower = bbox
        print(f"Bbox size: {right-left}x{lower-upper}")
        
        # Sample pixels inside the bbox
        print("Left-Top inside pixel:", img.getpixel((left+5, upper+5)))
        print("Right-Top inside pixel:", img.getpixel((right-5, upper+5)))
        print("Left-Bottom inside pixel:", img.getpixel((left+5, lower-5)))
        print("Right-Bottom inside pixel:", img.getpixel((right-5, lower-5)))
        
        # Check if the borders of the bbox are white-ish or what they are
        print("Bbox borders sample (Top row of bbox):", [img.getpixel((x, upper)) for x in range(left, right, (right-left)//10)])
        print("Bbox borders sample (Left col of bbox):", [img.getpixel((left, y)) for y in range(upper, lower, (lower-upper)//10)])
else:
    print("Logo1.png not found")
