import { hereApiKey } from "./secrets.js";
import { airports } from "./airports.js"

function startClustering(map, data) {
    // First we need to create an array of DataPoint objects,
    // for the ClusterProvider
    var dataPoints = data.map(function (item) {
      return new H.clustering.DataPoint(item.latitude, item.longitude);
    });
  
    // Create a clustering provider with custom options for clusterizing the input
    var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
      clusteringOptions: {
        // Maximum radius of the neighbourhood
        eps: 32,
        // minimum weight of points required to form a cluster
        minWeight: 2
      }
    });
  
    // Create a layer tha will consume objects from our clustering provider
    var clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);
  
    // To make objects from clustering provder visible,
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
        zoom: 10,
        center: { lng: 80.02761096406752, lat: 13.263153083954851  }, //13.263153083954851, 80.02761096406752
        pixelRatio: window.devicePixelRatio || 1
    });

var ui = H.ui.UI.createDefault(map, maptypes);

var mapEvents = new H.mapevents.MapEvents(map);

var behavior = new H.mapevents.Behavior(mapEvents);

window.addEventListener('resize', () => map.getViewPort().resize());

startClustering(map, airports);
