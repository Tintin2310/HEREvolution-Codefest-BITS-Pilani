import requests

def reverse_geocode(latitude, longitude, api_key):
    # Base URL for the HERE Reverse Geocoding API
    url = "https://revgeocode.search.hereapi.com/v1/revgeocode"

    # Parameters for the API request
    params = {
        "at": f"{latitude},{longitude}",  # Latitude and Longitude to reverse geocode
        "apiKey": api_key  # HERE API key
    }

    try:
        # Making the request to the HERE Reverse Geocoding API
        response = requests.get(url, params=params)
        data = response.json()

        if response.status_code == 200:
            # Extracting address information from the response
            address = data.get('items', [{}])[0].get('address', {}).get('label')
            return address
        else:
            # If request was unsuccessful, print the error message
            print("Error:", data.get('error', {}).get('message'))
            return None
    except Exception as e:
        print("Exception occurred:", str(e))
        return None

if __name__ == "__main__":
    # Get latitude and longitude from user input
    latitude = input("Enter latitude: ")
    longitude = input("Enter longitude: ")
    
    api_key = ""

    # Call the reverse_geocode function to get the address
    address = reverse_geocode(latitude, longitude, api_key)

    if address is not None:
        print("Address:", address)
    else:
        print("Reverse geocoding failed.")
