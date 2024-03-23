import { hereApiKey } from "./secrets.js";
import { touristPlaces } from "./touristPlaces.js";

function startClustering(map, data) {
    // First we need to create an array of DataPoint objects,
    // for the ClusterProvider
    var dataPoints = data.map(function (item) {
      return new H.clustering.DataPoint(item.latitude, item.longitude);
    });
  
    // Create a clustering provider with custom options for clustering the input
    var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
      clusteringOptions: {
        // Maximum radius of the neighborhood
        eps: 30,
        // minimum weight of points required to form a cluster
        minWeight: 2
      }
    });
  
    // Create a layer tha will consume objects from our clustering provider
    var clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);
  
    // To make objects from clustering provider visible,
    // we need to add our layer to the map
    map.addLayer(clusteringLayer);
  }

/* Below are boiler plate code */
var platform = new H.service.Platform({
    'apikey': hereApiKey
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) the map
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
        zoom: 4.7,
        center: { lng: 78.9629, lat: 22.6000  }, //20.5937° N, 78.9629° E
        pixelRatio: window.devicePixelRatio || 1
    });

var ui = H.ui.UI.createDefault(map, maptypes);

var mapEvents = new H.mapevents.MapEvents(map);

var behavior = new H.mapevents.Behavior(mapEvents);

window.addEventListener('resize', () => map.getViewPort().resize());

startClustering(map, touristPlaces);