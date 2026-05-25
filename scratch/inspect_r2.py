from PIL import Image
import os
from collections import Counter

path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\LogoLoop\r2-fixed.png"
if os.path.exists(path):
    img = Image.open(path).convert("RGBA")
    width, height = img.size
    print(f"r2-fixed.png | Size: {img.size} | Mode: {img.mode}")
    # Count some color details
    colors = []
    for y in range(height):
        for x in range(width):
            p = img.getpixel((x, y))
            if p[3] > 0:
                colors.append(p[:3])
    counter = Counter(colors)
    print("Top 10 colors in r2-fixed.png:")
    for color, count in counter.most_common(10):
        print(f"Color: {color} | Count: {count}")
else:
    print("r2-fixed.png does not exist at path.")
