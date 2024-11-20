var wms_layers = [];


        var lyr_CouvertureSigfox_0 = new ol.layer.Tile({
            'title': 'Couverture Sigfox',
            'opacity': 0.650000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tiles.sigfox.com/6e8717be6f2cb68cbb24bf70ac6df9f7/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_CouvertureLiveObjects_2 = new ol.layer.Tile({
            'title': 'Couverture Live Objects',
            'opacity': 0.364000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://couverture-mobile.orange.fr/arcgis/rest/services/extern/geomap_LoRa/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CouvertureLTEMOrange_3 = new ol.layer.Tile({
            'title': 'Couverture LTE-M Orange',
            'opacity': 0.333000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://couverture-mobile.orange.fr/arcgis/rest/services/extern/geomap_LTE/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = new ol.format.GeoJSON();
var features_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = format_1009103435_Survey_Hte_Maurienne_Oct24V3_4.readFeatures(json_1009103435_Survey_Hte_Maurienne_Oct24V3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_4.addFeatures(features_1009103435_Survey_Hte_Maurienne_Oct24V3_4);
var lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_4, 
                style: style_1009103435_Survey_Hte_Maurienne_Oct24V3_4,
                popuplayertitle: "1009103435_Survey_Hte_Maurienne_Oct24V3",
                interactive: true,
                title: '1009103435_Survey_Hte_Maurienne_Oct24V3'
            });
var format_1009103435_Survey_Hte_Maurienne_Oct24V3_5 = new ol.format.GeoJSON();
var features_1009103435_Survey_Hte_Maurienne_Oct24V3_5 = format_1009103435_Survey_Hte_Maurienne_Oct24V3_5.readFeatures(json_1009103435_Survey_Hte_Maurienne_Oct24V3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_5.addFeatures(features_1009103435_Survey_Hte_Maurienne_Oct24V3_5);
var lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009103435_Survey_Hte_Maurienne_Oct24V3_5, 
                style: style_1009103435_Survey_Hte_Maurienne_Oct24V3_5,
                popuplayertitle: "1009103435_Survey_Hte_Maurienne_Oct24V3",
                interactive: true,
                title: '1009103435_Survey_Hte_Maurienne_Oct24V3'
            });
var lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "1009103435_Survey_Hte_Maurienne_Oct24V3",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1009103435_Survey_Hte_Maurienne_Oct24V3_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [649702.404398, 5544336.249436, 857607.583461, 5782862.307389]
                            })
                        });
var format_1009102840_Survey_Hte_Maurienne_Oct24V2_7 = new ol.format.GeoJSON();
var features_1009102840_Survey_Hte_Maurienne_Oct24V2_7 = format_1009102840_Survey_Hte_Maurienne_Oct24V2_7.readFeatures(json_1009102840_Survey_Hte_Maurienne_Oct24V2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009102840_Survey_Hte_Maurienne_Oct24V2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009102840_Survey_Hte_Maurienne_Oct24V2_7.addFeatures(features_1009102840_Survey_Hte_Maurienne_Oct24V2_7);
var lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009102840_Survey_Hte_Maurienne_Oct24V2_7, 
                style: style_1009102840_Survey_Hte_Maurienne_Oct24V2_7,
                popuplayertitle: "1009102840_Survey_Hte_Maurienne_Oct24V2",
                interactive: true,
                title: '1009102840_Survey_Hte_Maurienne_Oct24V2'
            });
var format_1009102840_Survey_Hte_Maurienne_Oct24V2_8 = new ol.format.GeoJSON();
var features_1009102840_Survey_Hte_Maurienne_Oct24V2_8 = format_1009102840_Survey_Hte_Maurienne_Oct24V2_8.readFeatures(json_1009102840_Survey_Hte_Maurienne_Oct24V2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009102840_Survey_Hte_Maurienne_Oct24V2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009102840_Survey_Hte_Maurienne_Oct24V2_8.addFeatures(features_1009102840_Survey_Hte_Maurienne_Oct24V2_8);
var lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009102840_Survey_Hte_Maurienne_Oct24V2_8, 
                style: style_1009102840_Survey_Hte_Maurienne_Oct24V2_8,
                popuplayertitle: "1009102840_Survey_Hte_Maurienne_Oct24V2",
                interactive: true,
                title: '1009102840_Survey_Hte_Maurienne_Oct24V2'
            });
var lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "1009102840_Survey_Hte_Maurienne_Oct24V2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1009102840_Survey_Hte_Maurienne_Oct24V2_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [649702.404398, 5544324.854589, 857587.768592, 5782862.307389]
                            })
                        });
var format_1009092435_Survey_Hte_Maurienne_Oct24_10 = new ol.format.GeoJSON();
var features_1009092435_Survey_Hte_Maurienne_Oct24_10 = format_1009092435_Survey_Hte_Maurienne_Oct24_10.readFeatures(json_1009092435_Survey_Hte_Maurienne_Oct24_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009092435_Survey_Hte_Maurienne_Oct24_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009092435_Survey_Hte_Maurienne_Oct24_10.addFeatures(features_1009092435_Survey_Hte_Maurienne_Oct24_10);
var lyr_1009092435_Survey_Hte_Maurienne_Oct24_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009092435_Survey_Hte_Maurienne_Oct24_10, 
                style: style_1009092435_Survey_Hte_Maurienne_Oct24_10,
                popuplayertitle: "1009092435_Survey_Hte_Maurienne_Oct24",
                interactive: true,
                title: '1009092435_Survey_Hte_Maurienne_Oct24'
            });
var format_1009092435_Survey_Hte_Maurienne_Oct24_11 = new ol.format.GeoJSON();
var features_1009092435_Survey_Hte_Maurienne_Oct24_11 = format_1009092435_Survey_Hte_Maurienne_Oct24_11.readFeatures(json_1009092435_Survey_Hte_Maurienne_Oct24_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1009092435_Survey_Hte_Maurienne_Oct24_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1009092435_Survey_Hte_Maurienne_Oct24_11.addFeatures(features_1009092435_Survey_Hte_Maurienne_Oct24_11);
var lyr_1009092435_Survey_Hte_Maurienne_Oct24_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1009092435_Survey_Hte_Maurienne_Oct24_11, 
                style: style_1009092435_Survey_Hte_Maurienne_Oct24_11,
                popuplayertitle: "1009092435_Survey_Hte_Maurienne_Oct24",
                interactive: true,
                title: '1009092435_Survey_Hte_Maurienne_Oct24'
            });
var lyr_1009092435_Survey_Hte_Maurienne_Oct24_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "1009092435_Survey_Hte_Maurienne_Oct24",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1009092435_Survey_Hte_Maurienne_Oct24_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [664675.543827, 5544364.190285, 842818.299304, 5775418.074914]
                            })
                        });
var format_PAVs_mauriennebrutALL_13 = new ol.format.GeoJSON();
var features_PAVs_mauriennebrutALL_13 = format_PAVs_mauriennebrutALL_13.readFeatures(json_PAVs_mauriennebrutALL_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAVs_mauriennebrutALL_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAVs_mauriennebrutALL_13.addFeatures(features_PAVs_mauriennebrutALL_13);cluster_PAVs_mauriennebrutALL_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PAVs_mauriennebrutALL_13
});
var lyr_PAVs_mauriennebrutALL_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PAVs_mauriennebrutALL_13, 
                style: style_PAVs_mauriennebrutALL_13,
                popuplayertitle: "PAVs_maurienne - brut ALL",
                interactive: true,
                title: '<img src="styles/legend/PAVs_mauriennebrutALL_13.png" /> PAVs_maurienne - brut ALL'
            });
var group_1009092435_Survey_Hte_Maurienne_Oct24 = new ol.layer.Group({
                                layers: [lyr_1009092435_Survey_Hte_Maurienne_Oct24_10,lyr_1009092435_Survey_Hte_Maurienne_Oct24_11,lyr_1009092435_Survey_Hte_Maurienne_Oct24_12,],
                                fold: "open",
                                title: "1009092435_Survey_Hte_Maurienne_Oct24"});
var group_1009102840_Survey_Hte_Maurienne_Oct24V2 = new ol.layer.Group({
                                layers: [lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_7,lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_8,lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_9,],
                                fold: "open",
                                title: "1009102840_Survey_Hte_Maurienne_Oct24V2"});
var group_1009103435_Survey_Hte_Maurienne_Oct24V3 = new ol.layer.Group({
                                layers: [lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4,lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5,lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_6,],
                                fold: "open",
                                title: "1009103435_Survey_Hte_Maurienne_Oct24V3"});

lyr_CouvertureSigfox_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_CouvertureLiveObjects_2.setVisible(true);lyr_CouvertureLTEMOrange_3.setVisible(true);lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.setVisible(true);lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5.setVisible(true);lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_6.setVisible(true);lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_7.setVisible(true);lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_8.setVisible(true);lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_9.setVisible(true);lyr_1009092435_Survey_Hte_Maurienne_Oct24_10.setVisible(true);lyr_1009092435_Survey_Hte_Maurienne_Oct24_11.setVisible(true);lyr_1009092435_Survey_Hte_Maurienne_Oct24_12.setVisible(true);lyr_PAVs_mauriennebrutALL_13.setVisible(true);
var layersList = [lyr_CouvertureSigfox_0,lyr_OpenStreetMap_1,lyr_CouvertureLiveObjects_2,lyr_CouvertureLTEMOrange_3,group_1009103435_Survey_Hte_Maurienne_Oct24V3,group_1009102840_Survey_Hte_Maurienne_Oct24V2,group_1009092435_Survey_Hte_Maurienne_Oct24,lyr_PAVs_mauriennebrutALL_13];
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1009092435_Survey_Hte_Maurienne_Oct24_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_1009092435_Survey_Hte_Maurienne_Oct24_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PAVs_mauriennebrutALL_13.set('fieldAliases', {'#': '#', 'Nom': 'Nom', 'Adresse': 'Adresse', 'Territoire': 'Territoire', 'Centre d\'exploitation': 'Centre d\'exploitation', 'Types Produit': 'Types Produit', 'Contact': 'Contact', 'Carte': 'Carte', 'Position': 'Position', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LoRa': 'LoRa', 'Couverture LTE-M': 'Couverture LTE-M', 'CS': 'CS', 'Volume CS': 'Volume CS', 'VERRE': 'VERRE', 'Volume Verre': 'Volume Verre', 'OM': 'OM', 'Volume Ordures ménagères': 'Volume Ordures ménagères', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_1009092435_Survey_Hte_Maurienne_Oct24_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_1009092435_Survey_Hte_Maurienne_Oct24_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_PAVs_mauriennebrutALL_13.set('fieldImages', {'#': 'TextEdit', 'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'Territoire': 'TextEdit', 'Centre d\'exploitation': 'TextEdit', 'Types Produit': 'TextEdit', 'Contact': 'TextEdit', 'Carte': 'TextEdit', 'Position': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'LoRa': 'TextEdit', 'Couverture LTE-M': 'TextEdit', 'CS': 'Range', 'Volume CS': 'TextEdit', 'VERRE': 'Range', 'Volume Verre': 'TextEdit', 'OM': 'Range', 'Volume Ordures ménagères': 'TextEdit', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1009103435_Survey_Hte_Maurienne_Oct24V3_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1009102840_Survey_Hte_Maurienne_Oct24V2_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1009092435_Survey_Hte_Maurienne_Oct24_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_1009092435_Survey_Hte_Maurienne_Oct24_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PAVs_mauriennebrutALL_13.set('fieldLabels', {'#': 'no label', 'Nom': 'hidden field', 'Adresse': 'no label', 'Territoire': 'no label', 'Centre d\'exploitation': 'inline label - always visible', 'Types Produit': 'no label', 'Contact': 'no label', 'Carte': 'no label', 'Position': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LoRa': 'no label', 'Couverture LTE-M': 'no label', 'CS': 'no label', 'Volume CS': 'no label', 'VERRE': 'no label', 'Volume Verre': 'no label', 'OM': 'no label', 'Volume Ordures ménagères': 'no label', });
lyr_PAVs_mauriennebrutALL_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});