// Initialize the platform object
var platform = new H.service.Platform({
    'apikey': 'APIKEYHERE'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) the map
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
        zoom: 10,
        center: { lng: 80.02761096406752, lat: 13.263153083954851 },
        pixelRatio: window.devicePixelRatio || 1
    });

var ui = H.ui.UI.createDefault(map, maptypes);

var mapEvents = new H.mapevents.MapEvents(map);

var behavior = new H.mapevents.Behavior(mapEvents);

window.addEventListener('resize', () => map.getViewPort().resize());