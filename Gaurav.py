import os
folder_path = 'C:/Ecommerce/Radhakrishn_Bastra'
for count, filename in enumerate(os.listdir(folder_path), start=1):
    os.rename(f"{folder_path}/{filename}", f"{folder_path}/img-{count}.jpg")
