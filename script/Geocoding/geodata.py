import pandas as pd
import requests

# Function to geocode a single address
def geocode(address, api_key):
    url = "https://geocode.search.hereapi.com/v1/geocode"
    params = {
        "q": address,
        "apiKey": api_key
    }

    try:
        response = requests.get(url, params=params)
        data = response.json()

        if response.status_code == 200:
            items = data.get('items', [])
            if items:
                position = items[0].get('position')
                if position:
                    latitude = position.get('lat')
                    longitude = position.get('lng')
                    return latitude, longitude
            return None, None
        else:
            print("Error:", data.get('error', {}).get('message'))
            return None, None
    except Exception as e:
        print("Exception occurred:", str(e))
        return None, None

# Read the CSV file
df = pd.read_csv("Places.csv")  # Replace "your_dataset.csv" with your actual file name

# HERE API key
api_key = ""

# List to store latitude and longitude
latitudes = []
longitudes = []

# Iterate over each place name and geocode it
for place_name in df["Place Name"]:
    latitude, longitude = geocode(place_name, api_key)
    latitudes.append(latitude)
    longitudes.append(longitude)

# Add latitude and longitude to the DataFrame
df["Latitude"] = latitudes
df["Longitude"] = longitudes

# Save the DataFrame to a new CSV file
df.to_csv("places_with_coordinates.csv", index=False)
