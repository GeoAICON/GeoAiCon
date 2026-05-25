from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
if os.path.exists(logo_path):
    img = Image.open(logo_path).convert("RGBA")
    width, height = img.size
    
    # We will print out rows/columns that contain a high concentration of black pixels
    # specifically, let's scan for horizontal/vertical black lines.
    # A black pixel: r < 50, g < 50, b < 50, a > 200
    
    black_rows = []
    for y in range(height):
        row_pixels = [img.getpixel((x, y)) for x in range(width)]
        black_count = len([p for p in row_pixels if p[0] < 50 and p[1] < 50 and p[2] < 50 and p[3] > 200])
        if black_count > width * 0.5: # More than half the row is black
            black_rows.append((y, black_count))
            
    black_cols = []
    for x in range(width):
        col_pixels = [img.getpixel((x, y)) for y in range(height)]
        black_count = len([p for p in col_pixels if p[0] < 50 and p[1] < 50 and p[2] < 50 and p[3] > 200])
        if black_count > height * 0.5: # More than half the column is black
            black_cols.append((x, black_count))
            
    print("Black rows found:", black_rows)
    print("Black columns found:", black_cols)
    
    # Let's check if the bounding box has a black outline inside it
    bbox = img.getbbox()
    if bbox:
        left, upper, right, lower = bbox
        print(f"Inside Bbox: left={left}, upper={upper}, right={right}, lower={lower}")
        # Scan along the edges of the bbox for black pixels
        # Top line at y = upper + 1, upper + 2, upper + 3
        # In the cropped image, let's see if there's a border.
        # Let's save a new image without the outer black-ish border if detected.
else:
    print("Logo1.png does not exist at path.")
