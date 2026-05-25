from PIL import Image
import os
from collections import Counter

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    
    # Let's count all non-transparent pixel colors
    colors = []
    for y in range(height):
        for x in range(width):
            p = img.getpixel((x, y))
            if p[3] > 0: # Non-transparent
                colors.append(p[:3]) # RGB only
                
    counter = Counter(colors)
    print("Top 20 colors in Logo1.png:")
    for color, count in counter.most_common(20):
        print(f"Color: {color} | Count: {count}")
else:
    print("Logo1.png does not exist at path.")
