from PIL import Image
import os

folder = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\LogoLoop"
files = [f for f in os.listdir(folder) if f.endswith(('.png', '.jpeg', '.jpg'))]

for file in files:
    path = os.path.join(folder, file)
    img = Image.open(path).convert("RGBA")
    width, height = img.size
    
    # Check for green pixels: G > R and G > B and G > 100
    green_pixels = 0
    for y in range(height):
        for x in range(width):
            p = img.getpixel((x, y))
            if p[3] > 100: # non-transparent
                r, g, b = p[:3]
                if g > r and g > b and g > 100:
                    green_pixels += 1
                    
    print(f"File: {file} | Size: {img.size} | Green pixels: {green_pixels} / {width*height}")
