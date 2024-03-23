import requests

def geocode(address, api_key):
    # Base URL for the HERE Geocoding API
    url = "https://geocode.search.hereapi.com/v1/geocode"

    # Parameters for the API request
    params = {
        "q": address,  # Address to geocode
        "apiKey": api_key  # HERE API key
    }

    try:
        # Making the request to the HERE Geocoding API
        response = requests.get(url, params=params)
        data = response.json()

        if response.status_code == 200:
            # Extracting latitude and longitude from the response
            items = data.get('items', [])
            if items:
                position = items[0].get('position')
                if position:
                    latitude = position.get('lat')
                    longitude = position.get('lng')
                    return latitude, longitude
            return None, None
        else:
            # If request was unsuccessful, print the error message
            print("Error:", data.get('error', {}).get('message'))
            return None, None
    except Exception as e:
        print("Exception occurred:", str(e))
        return None, None

if __name__ == "__main__":
    # Get address from user input
    address = input("Enter the address to geocode: ")

    api_key = ""

    # Call the geocode function to get the latitude and longitude
    latitude, longitude = geocode(address, api_key)

    if latitude is not None and longitude is not None:
        print("Latitude:", latitude)
        print("Longitude:", longitude)
    else:
        print("Geocoding failed.")

