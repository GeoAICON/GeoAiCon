from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    white_pixels = []
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            if a > 0 and r > 240 and g > 240 and b > 240:
                white_pixels.append((x, y))
                
    print(f"Total non-transparent white pixels found: {len(white_pixels)}")
    if white_pixels:
        xs = [p[0] for p in white_pixels]
        ys = [p[1] for p in white_pixels]
        print(f"Bounding area of white pixels: x in [{min(xs)}, {max(xs)}], y in [{min(ys)}, {max(ys)}]")
        # Let's inspect a few white pixels
        print("Sample white pixels coordinates:", white_pixels[:20])
else:
    print("Logo1.png not found")
