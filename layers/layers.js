var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HomabayCty_1 = new ol.format.GeoJSON();
var features_HomabayCty_1 = format_HomabayCty_1.readFeatures(json_HomabayCty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HomabayCty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HomabayCty_1.addFeatures(features_HomabayCty_1);
var lyr_HomabayCty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HomabayCty_1, 
                style: style_HomabayCty_1,
                popuplayertitle: "HomabayCty",
                interactive: true,
                title: '<img src="styles/legend/HomabayCty_1.png" /> HomabayCty'
            });
var format_healthHomabay_2 = new ol.format.GeoJSON();
var features_healthHomabay_2 = format_healthHomabay_2.readFeatures(json_healthHomabay_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_healthHomabay_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_healthHomabay_2.addFeatures(features_healthHomabay_2);
var lyr_healthHomabay_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_healthHomabay_2, 
                style: style_healthHomabay_2,
                popuplayertitle: "healthHomabay",
                interactive: true,
                title: '<img src="styles/legend/healthHomabay_2.png" /> healthHomabay'
            });

lyr_OSMStandard_0.setVisible(true);lyr_HomabayCty_1.setVisible(true);lyr_healthHomabay_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HomabayCty_1,lyr_healthHomabay_2];
lyr_HomabayCty_1.set('fieldAliases', {'id': 'id', 'code': 'code', 'level': 'level', 'name': 'name', 'parent': 'parent', 'parentGrap': 'parentGrap', 'parentId': 'parentId', 'parentName': 'parentName', '_count': '_count', '_sum': '_sum', '_mean': '_mean', });
lyr_healthHomabay_2.set('fieldAliases', {'original_period': 'original_period', 'original_value': 'original_value', 'original_dataElement': 'original_dataElement', 'original_categoryOptionCombo': 'original_categoryOptionCombo', 'original_orgUnit': 'original_orgUnit', 'original_org_id': 'original_org_id', 'original_element_id': 'original_element_id', 'original_col-7': 'original_col-7', 'original_county': 'original_county', 'lat': 'lat', 'lon': 'lon', 'formatted': 'formatted', 'name': 'name', 'housenumber': 'housenumber', 'street': 'street', 'postcode': 'postcode', 'district': 'district', 'suburb': 'suburb', 'city': 'city', 'county': 'county', 'state': 'state', 'country': 'country', 'country_code': 'country_code', 'confidence': 'confidence', 'attribution': 'attribution', 'attribution_license': 'attribution_license', 'attribution_url': 'attribution_url', 'homabaymetro_Shape_Leng': 'homabaymetro_Shape_Leng', 'homabaymetro_Shape_Area': 'homabaymetro_Shape_Area', 'homabaymetro_ADM2_PCODE': 'homabaymetro_ADM2_PCODE', 'homabaymetro_ADM2_REF': 'homabaymetro_ADM2_REF', 'homabaymetro_ADM2ALT1EN': 'homabaymetro_ADM2ALT1EN', 'homabaymetro_ADM2ALT2EN': 'homabaymetro_ADM2ALT2EN', 'homabaymetro_ADM1_EN': 'homabaymetro_ADM1_EN', 'homabaymetro_ADM1_PCODE': 'homabaymetro_ADM1_PCODE', 'homabaymetro_ADM0_EN': 'homabaymetro_ADM0_EN', 'homabaymetro_ADM0_PCODE': 'homabaymetro_ADM0_PCODE', 'homabaymetro_date': 'homabaymetro_date', 'homabaymetro_validOn': 'homabaymetro_validOn', 'homabaymetro_ValidTo': 'homabaymetro_ValidTo', });
lyr_HomabayCty_1.set('fieldImages', {'id': 'TextEdit', 'code': 'TextEdit', 'level': 'Range', 'name': 'TextEdit', 'parent': 'TextEdit', 'parentGrap': 'TextEdit', 'parentId': 'TextEdit', 'parentName': 'TextEdit', '_count': 'TextEdit', '_sum': 'TextEdit', '_mean': 'TextEdit', });
lyr_healthHomabay_2.set('fieldImages', {'original_period': 'Range', 'original_value': 'Range', 'original_dataElement': 'TextEdit', 'original_categoryOptionCombo': 'TextEdit', 'original_orgUnit': 'TextEdit', 'original_org_id': 'TextEdit', 'original_element_id': 'TextEdit', 'original_col-7': 'TextEdit', 'original_county': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'formatted': 'TextEdit', 'name': 'TextEdit', 'housenumber': 'TextEdit', 'street': 'TextEdit', 'postcode': 'Range', 'district': 'TextEdit', 'suburb': 'TextEdit', 'city': 'TextEdit', 'county': 'TextEdit', 'state': 'TextEdit', 'country': 'TextEdit', 'country_code': 'TextEdit', 'confidence': 'TextEdit', 'attribution': 'TextEdit', 'attribution_license': 'TextEdit', 'attribution_url': 'TextEdit', 'homabaymetro_Shape_Leng': 'TextEdit', 'homabaymetro_Shape_Area': 'TextEdit', 'homabaymetro_ADM2_PCODE': 'TextEdit', 'homabaymetro_ADM2_REF': 'TextEdit', 'homabaymetro_ADM2ALT1EN': 'TextEdit', 'homabaymetro_ADM2ALT2EN': 'TextEdit', 'homabaymetro_ADM1_EN': 'TextEdit', 'homabaymetro_ADM1_PCODE': 'TextEdit', 'homabaymetro_ADM0_EN': 'TextEdit', 'homabaymetro_ADM0_PCODE': 'TextEdit', 'homabaymetro_date': 'TextEdit', 'homabaymetro_validOn': 'TextEdit', 'homabaymetro_ValidTo': 'TextEdit', });
lyr_HomabayCty_1.set('fieldLabels', {'id': 'header label - visible with data', 'code': 'no label', 'level': 'no label', 'name': 'no label', 'parent': 'no label', 'parentGrap': 'no label', 'parentId': 'no label', 'parentName': 'no label', '_count': 'no label', '_sum': 'no label', '_mean': 'no label', });
lyr_healthHomabay_2.set('fieldLabels', {'original_period': 'no label', 'original_value': 'no label', 'original_dataElement': 'no label', 'original_categoryOptionCombo': 'no label', 'original_orgUnit': 'no label', 'original_org_id': 'no label', 'original_element_id': 'no label', 'original_col-7': 'no label', 'original_county': 'no label', 'lat': 'no label', 'lon': 'no label', 'formatted': 'no label', 'name': 'no label', 'housenumber': 'no label', 'street': 'no label', 'postcode': 'no label', 'district': 'no label', 'suburb': 'no label', 'city': 'no label', 'county': 'no label', 'state': 'no label', 'country': 'no label', 'country_code': 'no label', 'confidence': 'no label', 'attribution': 'no label', 'attribution_license': 'no label', 'attribution_url': 'no label', 'homabaymetro_Shape_Leng': 'no label', 'homabaymetro_Shape_Area': 'no label', 'homabaymetro_ADM2_PCODE': 'no label', 'homabaymetro_ADM2_REF': 'no label', 'homabaymetro_ADM2ALT1EN': 'no label', 'homabaymetro_ADM2ALT2EN': 'no label', 'homabaymetro_ADM1_EN': 'no label', 'homabaymetro_ADM1_PCODE': 'no label', 'homabaymetro_ADM0_EN': 'no label', 'homabaymetro_ADM0_PCODE': 'no label', 'homabaymetro_date': 'no label', 'homabaymetro_validOn': 'no label', 'homabaymetro_ValidTo': 'no label', });
lyr_healthHomabay_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});