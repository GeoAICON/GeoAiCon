from PIL import Image
import os
from collections import deque

def remove_background(image_path, output_path, tolerance=15):
    if not os.path.exists(image_path):
        print(f"File not found: {image_path}")
        return False
        
    print(f"Processing {image_path}...")
    img = Image.open(image_path).convert("RGBA")
    width, height = img.size
    pixels = img.load()
    
    # Track visited pixels
    visited = set()
    
    # Queue for BFS, start with the four corners
    queue = deque([
        (0, 0),
        (width - 1, 0),
        (0, height - 1),
        (width - 1, height - 1)
    ])
    
    for x, y in queue:
        visited.add((x, y))
        
    # We want to match "white-ish" pixels.
    # A pixel is considered white-ish if R, G, B are all close to 255.
    def is_white_ish(x, y):
        r, g, b, a = pixels[x, y]
        # If it's already transparent, we don't need to process it
        if a == 0:
            return False
        # Distance to white (255, 255, 255)
        return (255 - r) <= tolerance and (255 - g) <= tolerance and (255 - b) <= tolerance

    transparent_count = 0
    
    # BFS to find all connected white-ish pixels from the edges
    while queue:
        cx, cy = queue.popleft()
        
        # Check if the pixel is white-ish
        if is_white_ish(cx, cy):
            # Make it transparent
            r, g, b, a = pixels[cx, cy]
            pixels[cx, cy] = (r, g, b, 0)
            transparent_count += 1
            
            # Add neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    img.save(output_path, "PNG")
    print(f"Finished processing! Made {transparent_count} edge-connected white-ish pixels transparent. Saved to {output_path}")
    return True

# Define paths
public_logo = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
app_icon = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\app\icon.png"

# Process both files
remove_background(public_logo, public_logo, tolerance=30)
remove_background(app_icon, app_icon, tolerance=30)
