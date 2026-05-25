from PIL import Image
import os
from collections import Counter

path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\LogoLoop\c6.jpeg"
if os.path.exists(path):
    img = Image.open(path).convert("RGBA")
    width, height = img.size
    print(f"c6.jpeg | Size: {img.size} | Mode: {img.mode}")
    # Count transparent vs non-transparent
    transparent_count = 0
    non_transparent_count = 0
    colors = []
    for y in range(height):
        for x in range(width):
            p = img.getpixel((x, y))
            if p[3] == 0:
                transparent_count += 1
            else:
                non_transparent_count += 1
                colors.append(p[:3])
    print(f"Transparent pixels: {transparent_count} | Non-transparent: {non_transparent_count}")
    counter = Counter(colors)
    print("Top 10 colors in c6.jpeg:")
    for color, count in counter.most_common(10):
        print(f"Color: {color} | Count: {count}")
else:
    print("c6.jpeg does not exist at path.")
