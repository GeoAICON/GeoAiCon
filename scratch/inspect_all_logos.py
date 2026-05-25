from PIL import Image
import os

folder = r"c:\Users\Piyush Rawat\Desktop\piyuweb\GeoAiCon\public\LogoLoop"
files = [f for f in os.listdir(folder) if f.endswith(('.png', '.jpeg', '.jpg'))]

for file in files:
    path = os.path.join(folder, file)
    img = Image.open(path)
    print(f"File: {file} | Size: {img.size} | Mode: {img.mode}")
