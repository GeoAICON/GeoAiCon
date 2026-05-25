from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path)
    print(f"Dimensions: {img.size}")
    print(f"Mode: {img.mode}")
    # Sample some pixels along the borders
    width, height = img.size
    print("Top row:", [img.getpixel((x, 0)) for x in range(0, width, width // 10)])
    print("Bottom row:", [img.getpixel((x, height - 1)) for x in range(0, width, width // 10)])
    print("Left col:", [img.getpixel((0, y)) for y in range(0, height, height // 10)])
    print("Right col:", [img.getpixel((width - 1, y)) for y in range(0, height, height // 10)])
else:
    print("Logo1.png does not exist at path.")
