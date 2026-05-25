from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    
    # Find bounding box of non-transparent pixels
    bbox = img.getbbox()
    print("Bounding box:", bbox) # (left, upper, right, lower)
    
    if bbox:
        left, upper, right, lower = bbox
        cropped = img.crop(bbox)
        print("Cropped dimensions:", cropped.size)
        
        # Check if there is a black border near the bounding box edges
        # We can scan the non-transparent borders
        c_width, c_height = cropped.size
        border_pixels = []
        for x in range(c_width):
            border_pixels.append(cropped.getpixel((x, 0)))
            border_pixels.append(cropped.getpixel((x, c_height - 1)))
        for y in range(c_height):
            border_pixels.append(cropped.getpixel((0, y)))
            border_pixels.append(cropped.getpixel((c_width - 1, y)))
            
        black_pixels = [p for p in border_pixels if p[3] > 0 and p[0] < 50 and p[1] < 50 and p[2] < 50]
        print(f"Total non-transparent border pixels scanned: {len(border_pixels)}")
        print(f"Number of black-ish pixels on the borders: {len(black_pixels)}")
        
        # Let's inspect some row pixels at y = upper + 5 to see what is inside
        print("Sample inside pixels at row y=50:")
        print([cropped.getpixel((x, 50)) for x in range(0, c_width, c_width // 10)])
    else:
        print("Image is entirely transparent.")
else:
    print("Logo1.png does not exist at path.")
