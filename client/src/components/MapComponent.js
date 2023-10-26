// src/Map.js
import React, { useEffect } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

function MapComponent() {
  useEffect(() => {
    // Create a new map instance
    let map = new Map({
      target: 'map', // The ID of the HTML element to render the map
      layers: [
        new TileLayer({
          source: new OSM(), // Use OpenStreetMap as the base layer
        }),
      ],
      view: new View({
        center: [0, 0], // Center the map at [0, 0] coordinates
        zoom: 2, // Set the initial zoom level
      }),
    });

    return () => {
      map.setTarget(null); // Unbind the map from the target element
      map = null; // Clear the map instance
    };
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '600px', marginBottom: '20%', marginRight: '20%' }}>
      {/* The map will be rendered inside this div */}
    </div>
  );
}

export default MapComponent;