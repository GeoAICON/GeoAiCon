from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    bbox = img.getbbox()
    if bbox:
        left, upper, right, lower = bbox
        print(f"Bbox: left={left}, upper={upper}, right={right}, lower={lower}")
        
        # Count non-transparent pixels in the left half vs right half of the bbox
        mid_x = (left + right) // 2
        left_half_pixels = 0
        right_half_pixels = 0
        for y in range(upper, lower):
            for x in range(left, right):
                p = img.getpixel((x, y))
                if p[3] > 0: # non-transparent
                    if x < mid_x:
                        left_half_pixels += 1
                    else:
                        right_half_pixels += 1
                        
        print(f"Non-transparent pixels in Left Half (Globe area): {left_half_pixels}")
        print(f"Non-transparent pixels in Right Half (Text area): {right_half_pixels}")
    else:
        print("Image is fully transparent")
else:
    print("Logo1.png does not exist at path.")
