from PIL import Image
import os

logo_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\Logo1.png"
icon_path = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\app\icon.png"

if os.path.exists(logo_path):
    # Open the transparent logo
    img = Image.open(logo_path).convert("RGBA")
    
    # Get the bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        # Crop to the non-transparent bounding box
        cropped = img.crop(bbox)
        c_width, c_height = cropped.size
        print(f"Cropped logo size: {c_width}x{c_height}")
        
        # Create a new square transparent image (e.g., 512x512)
        size = 512
        new_img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        
        # Determine the scale factor to fit the logo within the square with some padding (e.g., 10%)
        max_dim = max(c_width, c_height)
        scale = (size * 0.9) / max_dim
        
        new_width = int(c_width * scale)
        new_height = int(c_height * scale)
        
        # Resize using high-quality Resampling.LANCZOS
        resized = cropped.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Calculate offset to center the resized logo
        offset_x = (size - new_width) // 2
        offset_y = (size - new_height) // 2
        
        # Paste the logo into the transparent square
        new_img.paste(resized, (offset_x, offset_y), resized)
        
        # Save as the new app/icon.png
        new_img.save(icon_path, "PNG")
        print(f"Successfully generated transparent, square-padded icon and saved to {icon_path}")
    else:
        print("Could not find bounding box for Logo1.png")
else:
    print("Logo1.png not found")
