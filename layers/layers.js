var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_RW_1 = new ol.format.GeoJSON();
var features_RW_1 = format_RW_1.readFeatures(json_RW_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RW_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_1.addFeatures(features_RW_1);
var lyr_RW_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_1, 
                style: style_RW_1,
                popuplayertitle: "RW",
                interactive: true,
                title: '<img src="styles/legend/RW_1.png" /> RW'
            });
var format_sawah_2 = new ol.format.GeoJSON();
var features_sawah_2 = format_sawah_2.readFeatures(json_sawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_2.addFeatures(features_sawah_2);
var lyr_sawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_2, 
                style: style_sawah_2,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_2.png" /> sawah'
            });
var format_Kebun_3 = new ol.format.GeoJSON();
var features_Kebun_3 = format_Kebun_3.readFeatures(json_Kebun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_3.addFeatures(features_Kebun_3);
var lyr_Kebun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kebun_3, 
                style: style_Kebun_3,
                popuplayertitle: "Kebun",
                interactive: true,
                title: '<img src="styles/legend/Kebun_3.png" /> Kebun'
            });
var format_RT_4 = new ol.format.GeoJSON();
var features_RT_4 = format_RT_4.readFeatures(json_RT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT_4.addFeatures(features_RT_4);
var lyr_RT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT_4, 
                style: style_RT_4,
                popuplayertitle: "RT",
                interactive: true,
                title: '<img src="styles/legend/RT_4.png" /> RT'
            });
var format_Desa_Pangebetan_poly_5 = new ol.format.GeoJSON();
var features_Desa_Pangebetan_poly_5 = format_Desa_Pangebetan_poly_5.readFeatures(json_Desa_Pangebetan_poly_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_Pangebetan_poly_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_Pangebetan_poly_5.addFeatures(features_Desa_Pangebetan_poly_5);
var lyr_Desa_Pangebetan_poly_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_Pangebetan_poly_5, 
                style: style_Desa_Pangebetan_poly_5,
                popuplayertitle: "Desa_Pangebetan_poly",
                interactive: true,
                title: '<img src="styles/legend/Desa_Pangebetan_poly_5.png" /> Desa_Pangebetan_poly'
            });
var format_jalandesa_6 = new ol.format.GeoJSON();
var features_jalandesa_6 = format_jalandesa_6.readFeatures(json_jalandesa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalandesa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalandesa_6.addFeatures(features_jalandesa_6);
var lyr_jalandesa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalandesa_6, 
                style: style_jalandesa_6,
                popuplayertitle: "jalandesa",
                interactive: true,
                title: '<img src="styles/legend/jalandesa_6.png" /> jalandesa'
            });
var format_masjid_7 = new ol.format.GeoJSON();
var features_masjid_7 = format_masjid_7.readFeatures(json_masjid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_7.addFeatures(features_masjid_7);
var lyr_masjid_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_7, 
                style: style_masjid_7,
                popuplayertitle: "masjid",
                interactive: true,
                title: '<img src="styles/legend/masjid_7.png" /> masjid'
            });
var format_toko_8 = new ol.format.GeoJSON();
var features_toko_8 = format_toko_8.readFeatures(json_toko_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_toko_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_toko_8.addFeatures(features_toko_8);
var lyr_toko_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_toko_8, 
                style: style_toko_8,
                popuplayertitle: "toko",
                interactive: true,
                title: '<img src="styles/legend/toko_8.png" /> toko'
            });
var format_tempatmakan_9 = new ol.format.GeoJSON();
var features_tempatmakan_9 = format_tempatmakan_9.readFeatures(json_tempatmakan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatmakan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatmakan_9.addFeatures(features_tempatmakan_9);
var lyr_tempatmakan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tempatmakan_9, 
                style: style_tempatmakan_9,
                popuplayertitle: "tempat makan",
                interactive: true,
                title: '<img src="styles/legend/tempatmakan_9.png" /> tempat makan'
            });
var format_sekolahan_10 = new ol.format.GeoJSON();
var features_sekolahan_10 = format_sekolahan_10.readFeatures(json_sekolahan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolahan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolahan_10.addFeatures(features_sekolahan_10);
var lyr_sekolahan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolahan_10, 
                style: style_sekolahan_10,
                popuplayertitle: "sekolahan",
                interactive: true,
                title: '<img src="styles/legend/sekolahan_10.png" /> sekolahan'
            });
var format_rumahku_11 = new ol.format.GeoJSON();
var features_rumahku_11 = format_rumahku_11.readFeatures(json_rumahku_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahku_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahku_11.addFeatures(features_rumahku_11);
var lyr_rumahku_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahku_11, 
                style: style_rumahku_11,
                popuplayertitle: "rumahku",
                interactive: true,
                title: '<img src="styles/legend/rumahku_11.png" /> rumahku'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_RW_1.setVisible(true);lyr_sawah_2.setVisible(true);lyr_Kebun_3.setVisible(true);lyr_RT_4.setVisible(true);lyr_Desa_Pangebetan_poly_5.setVisible(true);lyr_jalandesa_6.setVisible(true);lyr_masjid_7.setVisible(true);lyr_toko_8.setVisible(true);lyr_tempatmakan_9.setVisible(true);lyr_sekolahan_10.setVisible(true);lyr_rumahku_11.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_RW_1,lyr_sawah_2,lyr_Kebun_3,lyr_RT_4,lyr_Desa_Pangebetan_poly_5,lyr_jalandesa_6,lyr_masjid_7,lyr_toko_8,lyr_tempatmakan_9,lyr_sekolahan_10,lyr_rumahku_11];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RW_1.set('fieldAliases', {'id': 'id', 'RW': 'RW', });
lyr_sawah_2.set('fieldAliases', {'id': 'id', 'sawah': 'sawah', });
lyr_Kebun_3.set('fieldAliases', {'id': 'id', 'Kebun': 'Kebun', });
lyr_RT_4.set('fieldAliases', {'id': 'id', 'RT': 'RT', });
lyr_Desa_Pangebetan_poly_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr_house': 'addr_house', 'building': 'building', 'building_m': 'building_m', 'access_roo': 'access_roo', 'addr_stree': 'addr_stree', 'roof_mater': 'roof_mater', 'name': 'name', });
lyr_jalandesa_6.set('fieldAliases', {'id': 'id', 'namajalan': 'namajalan', 'lebarjalan': 'lebarjalan', });
lyr_masjid_7.set('fieldAliases', {'id': 'id', 'namamasjid': 'namamasjid', });
lyr_toko_8.set('fieldAliases', {'id': 'id', 'namatoko': 'namatoko', });
lyr_tempatmakan_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sekolahan_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_rumahku_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_RW_1.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', });
lyr_sawah_2.set('fieldImages', {'id': 'TextEdit', 'sawah': 'TextEdit', });
lyr_Kebun_3.set('fieldImages', {'id': 'TextEdit', 'Kebun': 'TextEdit', });
lyr_RT_4.set('fieldImages', {'id': 'TextEdit', 'RT': 'TextEdit', });
lyr_Desa_Pangebetan_poly_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr_house': 'TextEdit', 'building': 'TextEdit', 'building_m': 'TextEdit', 'access_roo': 'TextEdit', 'addr_stree': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', });
lyr_jalandesa_6.set('fieldImages', {'id': 'TextEdit', 'namajalan': 'TextEdit', 'lebarjalan': 'TextEdit', });
lyr_masjid_7.set('fieldImages', {'id': 'TextEdit', 'namamasjid': 'TextEdit', });
lyr_toko_8.set('fieldImages', {'id': 'TextEdit', 'namatoko': 'TextEdit', });
lyr_tempatmakan_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sekolahan_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_rumahku_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RW_1.set('fieldLabels', {'id': 'no label', 'RW': 'no label', });
lyr_sawah_2.set('fieldLabels', {'id': 'no label', 'sawah': 'no label', });
lyr_Kebun_3.set('fieldLabels', {'id': 'no label', 'Kebun': 'no label', });
lyr_RT_4.set('fieldLabels', {'id': 'no label', 'RT': 'no label', });
lyr_Desa_Pangebetan_poly_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'addr_house': 'no label', 'building': 'no label', 'building_m': 'no label', 'access_roo': 'no label', 'addr_stree': 'no label', 'roof_mater': 'no label', 'name': 'no label', });
lyr_jalandesa_6.set('fieldLabels', {'id': 'no label', 'namajalan': 'no label', 'lebarjalan': 'no label', });
lyr_masjid_7.set('fieldLabels', {'id': 'no label', 'namamasjid': 'no label', });
lyr_toko_8.set('fieldLabels', {'id': 'no label', 'namatoko': 'no label', });
lyr_tempatmakan_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_sekolahan_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_rumahku_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_rumahku_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});