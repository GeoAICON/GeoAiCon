from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    bbox = img.getbbox()
    if bbox:
        left, upper, right, lower = bbox
        # Print actual pixels along the borders of the bounding box
        # Let's print the first 20 pixels along the top edge of bbox
        print("Top border pixels:", [img.getpixel((x, upper)) for x in range(left, left + 20)])
        # Let's see if there is any black or dark pixels
        print("Any non-transparent top edge pixels:", [img.getpixel((x, upper)) for x in range(left, right) if img.getpixel((x, upper))[3] > 0][:20])
    else:
        print("Transparent image")
else:
    print("Logo1.png does not exist at path.")
