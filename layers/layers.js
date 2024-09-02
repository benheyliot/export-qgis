var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CouvertureLiveObjects_1 = new ol.layer.Tile({
            'title': 'Couverture Live Objects',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://couverture-mobile.orange.fr/arcgis/rest/services/extern/geomap_LoRa/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CouvertureLTEMOrange_2 = new ol.layer.Tile({
            'title': 'Couverture LTE-M Orange',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://couverture-mobile.orange.fr/arcgis/rest/services/extern/geomap_LTE/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CouvertureSigfox_3 = new ol.layer.Tile({
            'title': 'Couverture Sigfox',
            //'type': 'base',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tiles.sigfox.com/6e8717be6f2cb68cbb24bf70ac6df9f7/{z}/{x}/{y}.png'
            })
        });
var format_aaa_4 = new ol.format.GeoJSON();
var features_aaa_4 = format_aaa_4.readFeatures(json_aaa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aaa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aaa_4.addFeatures(features_aaa_4);cluster_aaa_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_aaa_4
});
var lyr_aaa_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_aaa_4, 
                style: style_aaa_4,
                popuplayertitle: "aaa",
                interactive: true,
                title: '<img src="styles/legend/aaa_4.png" /> aaa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CouvertureLiveObjects_1.setVisible(true);lyr_CouvertureLTEMOrange_2.setVisible(true);lyr_CouvertureSigfox_3.setVisible(true);lyr_aaa_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CouvertureLiveObjects_1,lyr_CouvertureLTEMOrange_2,lyr_CouvertureSigfox_3,lyr_aaa_4];
lyr_aaa_4.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_aaa_4.set('fieldImages', {'Latitude': '', 'Longitude': '', });
lyr_aaa_4.set('fieldLabels', {'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_aaa_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});