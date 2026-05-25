from PIL import Image
import os

folder = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\LogoLoop"
files = [f for f in os.listdir(folder) if f.endswith(('.png', '.jpeg', '.jpg'))]

for file in files:
    path = os.path.join(folder, file)
    img = Image.open(path).convert("RGBA")
    width, height = img.size
    
    # Check if the image contains blue colors (B > R and B > G and B > 100)
    blue_pixels = 0
    for y in range(height):
        for x in range(width):
            p = img.getpixel((x, y))
            if p[3] > 100: # non-transparent
                r, g, b = p[:3]
                if b > r and b > g and b > 100:
                    blue_pixels += 1
                    
    print(f"File: {file} | Size: {img.size} | Blue pixels: {blue_pixels} / {width*height}")
