//= require leaflet/image-overlay-rotated

var plantsDarcy = [
'https://s14.postimg.org/4i5f9ehe9/icc_centro_ter.png',
'https://s7.postimg.org/v9zvqgh8r/icc_norte_ter.png',
'https://s2.postimg.org/r3jg952mh/icc_sul_ter.png',
'https://s2.postimg.org/71ok32gyx/pat.png',
'https://s15.postimg.org/9pw7gjwob/rt_ter.png'
];

var topleft = L.latLng(-15.764954118918263,-47.869057059288025),
    topright = L.latLng(-15.7626954548496561,-47.87069186568261),
    bottomleft = L.latLng(-15.764360415369641,-47.86812901496888);

var marker1 = L.marker(topleft, {draggable: true} ).addTo(map),
    marker2 = L.marker(topright, {draggable: true} ).addTo(map),
    marker3 = L.marker(bottomleft, {draggable: true} ).addTo(map);

var boundsImage = new L.LatLngBounds(topleft, topright).extend(bottomleft);
map.fitBounds(boundsImage);


legend = L.control({position: 'topright'});

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div');
    div.innerHTML = '<select id="options"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option></select>';
    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
    return div;
};

legend.addTo(map);

var overlay = L.imageOverlay.rotated(plantsDarcy[0], topleft, topright, bottomleft, {
    opacity: 0.9,
    interactive: true
}).addTo(map);

$(document).ready(function() {
    $("#options").change(function() {
        var imageSelected = $("#options").val();
        overlay.removeFrom(map);
        overlay = L.imageOverlay.rotated(plantsDarcy[imageSelected], topleft, topright, bottomleft, {
            opacity: 0.9,
            interactive: true
        }).addTo(map);
    });
});

function repositionImage() {
    overlay.reposition(marker1.getLatLng(), marker2.getLatLng(), marker3.getLatLng());
};

marker1.on('drag dragend', repositionImage);
marker2.on('drag dragend', repositionImage);
marker3.on('drag dragend', repositionImage);

overlay.on('dblclick',function (e) {
    console.log('Double click on image.');
    e.stop();
});
overlay.on('click',function (e) {
    console.log('Click on image.');
});
function setOverlayOpacity(opacity) {
    overlay.setOpacity(opacity);
}
