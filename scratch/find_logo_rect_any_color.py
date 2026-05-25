from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    
    # We will search for any rectangle box of a dark color (luminosity < 100, opacity > 200)
    # Let's find rows and columns that have a high concentration of dark pixels
    dark_rows = []
    for y in range(height):
        row_pixels = [img.getpixel((x, y)) for x in range(width)]
        dark_count = len([p for p in row_pixels if (0.299*p[0] + 0.587*p[1] + 0.114*p[2]) < 100 and p[3] > 200])
        if dark_count > width * 0.3: # More than 30% of the row
            dark_rows.append((y, dark_count))
            
    dark_cols = []
    for x in range(width):
        col_pixels = [img.getpixel((x, y)) for y in range(height)]
        dark_count = len([p for p in col_pixels if (0.299*p[0] + 0.587*p[1] + 0.114*p[2]) < 100 and p[3] > 200])
        if dark_count > height * 0.3: # More than 30% of the col
            dark_cols.append((x, dark_count))
            
    print("Dark rows found:", dark_rows)
    print("Dark columns found:", dark_cols)
else:
    print("Logo1.png does not exist at path.")
