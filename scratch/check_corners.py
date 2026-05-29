from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    print(f"Dimensions: {width}x{height}")
    print("Mode:", img.mode)
    print("Bbox:", img.getbbox())
    
    # Let's inspect the corner pixels
    print("Corner (0,0):", img.getpixel((0, 0)))
    print("Corner (width-1,0):", img.getpixel((width-1, 0)))
    print("Corner (0,height-1):", img.getpixel((0, height-1)))
    print("Corner (width-1,height-1):", img.getpixel((width-1, height-1)))
    
    # Print some pixels from top row
    print("Top row sample:", [img.getpixel((x, 0)) for x in range(0, width, width // 10)])
    # Print some pixels from left col
    print("Left col sample:", [img.getpixel((0, y)) for y in range(0, height, height // 10)])
else:
    print("Logo1.png not found")
