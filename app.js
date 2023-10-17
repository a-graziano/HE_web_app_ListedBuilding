require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Search",
    "esri/widgets/FeatureTable"
  ], function(Map, MapView, FeatureLayer, Search, FeatureTable) {
  
    // Create a map with a topographic basemap
    var map = new Map({
      basemap: "topo-vector"
    });
  
    // Create a view centered at a specific location and zoom level
    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-2.6, 52.4], // Example coordinates (longitude, latitude)
      zoom: 6
    });

    // Add feature layers for heritage site inventory
    var featureLayer1 = new FeatureLayer({
      url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer",
      outFields: ["*"] // Specify which fields to include in the query
  });

  var featureLayer2 = new FeatureLayer({
    url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/Historic_England_Heritage_at_Risk_Register_2022/FeatureServer",
    outFields: ["*"] // Specify which fields to include in the query
});
    // Add a feature layer for heritage site inventory
    var featureLayer = new FeatureLayer({
        url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer",
        url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer",
        url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/Historic_England_Heritage_at_Risk_Register_2022/FeatureServer",
        apiKey: "AAPK93de0a36200b4bd5bd0d778a1e18148aY-xHnxJGj-27c3eL7c7babR3DLPMJheBtt8zhb7Ur8ZMpIJZIFx-pEFR_jypomeK",
        outFields: ["*"] // Specify which fields to include in the query
    });
  
    map.add(featureLayer);
  
    // Add a search widget
    var searchWidget = new Search({
      view: view
    });
  
    view.ui.add(searchWidget, {
      position: "top-right"
    });
  
    var popupTemplate = {
        title: "{Name}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "ListEntry",
                label: "List Entry"
              },
              {
                fieldName: "Name",
                label: "Name"
              },
              {
                fieldName: "Grade",
                label: "Grade"
              },
              {
                fieldName: "ListDate",
                label: "List Date"
              },
              {
                fieldName: "AmendDate",
                label: "Amend Date"
              },
              {
                fieldName: "CaptureScale",
                label: "Capture Scale"
              },
              {
                fieldName: "NHLE link",
                label: "NHLE Link"
              },
              {
                fieldName: "Area_ha",
                label: "Area (ha)"
              },
              {
                fieldName: "National Grid Reference",
                label: "National Grid Reference"
              },
              {
                fieldName: "Easting",
                label: "Easting"
              },
              {
                fieldName: "Northing",
                label: "Northing"
              }
            ]
          }
        ]
      };
      
  
    featureLayer.popupTemplate = popupTemplate; // Apply the popup template to the feature layer
  });

  require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/Search",
    "esri/widgets/FeatureTable"
], function(Map, MapView, FeatureLayer, Search, FeatureTable) {

    // Create a map with a topographic basemap
    var map = new Map({
        basemap: "topo-vector"
    });

    // Create a view centered at a specific location and zoom level
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-2.6, 52.4], // Example coordinates (longitude, latitude)
        zoom: 6
    });

    // Add feature layers for heritage site inventory
    var featureLayer1 = new FeatureLayer({
        url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/National_Heritage_List_for_England_NHLE_v02_VIEW/FeatureServer",
        apiKey: "AAPK93de0a36200b4bd5bd0d778a1e18148aY-xHnxJGj-27c3eL7c7babR3DLPMJheBtt8zhb7Ur8ZMpIJZIFx-pEFR_jypomeK",
        outFields: ["*"] // Specify which fields to include in the query
    });

    var featureLayer2 = new FeatureLayer({
        url: "https://services-eu1.arcgis.com/ZOdPfBS3aqqDYPUQ/arcgis/rest/services/Historic_England_Heritage_at_Risk_Register_2022/FeatureServer",
        apiKey: "AAPK93de0a36200b4bd5bd0d778a1e18148aY-xHnxJGj-27c3eL7c7babR3DLPMJheBtt8zhb7Ur8ZMpIJZIFx-pEFR_jypomeK",
        outFields: ["*"] // Specify which fields to include in the query
    });

    map.addMany([featureLayer1, featureLayer2]); // Add both feature layers

    // Add a search widget
    var searchWidget = new Search({
        view: view
    });

    view.ui.add(searchWidget, {
        position: "top-right"
    });

    var popupTemplate = {
        title: "{Name}",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "ListEntry",
                        label: "List Entry"
                    },
                    {
                        fieldName: "Name",
                        label: "Name"
                    },
                    // Add more fieldInfos as needed
                ]
            }
        ]
    };

    featureLayer1.popupTemplate = popupTemplate; // Apply the popup template to featureLayer1
    featureLayer2.popupTemplate = popupTemplate; // Apply the popup template to featureLayer2
});