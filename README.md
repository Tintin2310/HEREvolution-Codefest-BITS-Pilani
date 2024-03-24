# Here&There

## Discover the World at Your Fingertips

### Project Overview

Here&There is a web application designed to enhance the way users explore and interact with geographical locations. Leveraging the power of geocoding and mapping technologies, Here&There provides a platform where users can search for places, view tourist attractions, and even plan their routes for travel. The application is built with a focus on user-friendly interfaces and efficient data processing, ensuring a seamless experience for all users.

> Note: The project is in beta so we added a database for Indian tourist places only.

### Key Features

- **Geocoding and Reverse Geocoding**: Users can search for locations by name or coordinates, and the application can also provide the coordinates of a searched location.
- **Tourist Attractions**: Display a list of tourist attractions in a selected area, complete with descriptions and images.
- **Map Clustering**: Visualize data points on the map with clustering, making it easier to identify areas of interest.
- **Firebase Authentication**: Utilizes Firebase for user authentication, providing secure login and signup functionalities.

## Technologies Used

- **Languages**: HTML, JavaScript, Python
- **Frameworks/Libraries**: HERE Maps API, Firebase API
- **Tools**: Git

## Getting Started

### Prerequisites

- Git installed on your machine
- A web browser for testing

### Installation

1. **Clone the Repository**: First, clone the project repository to your local machine using Git. Open your terminal and run:

```
git clone https://github.com/Tintin2310/HEREvolution-Codefest-BITS-Pilani.git
```

2. **Install Dependencies**: Navigate to the project directory and install any necessary dependencies. For this project, the dependencies are primarily JavaScript libraries and CSS frameworks. These are included in the project and do not require additional installation.
3. **Configure API Keys**: The application uses the HERE Maps API for geocoding and mapping functionalities. You will need to obtain an API key from the HERE Developer Portal and configure it in the project. Open the `script.js` file and replace `hereApiKey` with your actual API key in the following script tags.
4. **Firebase Setup**: To use Firebase Authentication, you need to set up a Firebase project and obtain your Firebase configuration. Follow the Firebase documentation to set up your project and add your configuration to the `Authentication.html` file.
5. **Run the Application**: Open the `index.html` file in your preferred web browser to start using Here&There. The application should load, and you can begin exploring locations and features.

## Contributing

Contributions to Here&There are welcome! If you have ideas for new features or improvements, please open an issue or submit a pull request.

