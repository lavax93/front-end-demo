var map = new maptalks.Map('map', {
  center: [-0.113049,51.498568],
  zoom: 14,
  attribution: {
    content: '$(attribution)'
  },
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var layer = new maptalks.VectorLayer('vector', {
  enableAltitude : true,
  // draw altitude
  drawAltitude : {
    lineWidth : 1,
    lineColor : '#000'
  }
})
.addTo(map);

var extent = map.getExtent(),
  min = extent.getMin(),
  w = extent.getWidth(),
  h = extent.getHeight(),
  markers = [];
for (var i = 0; i < 100; i++) {
  markers.push(new maptalks.Marker([min.x + Math.random() * w, min.y + Math.random() * h], {
    properties : {
      // random altitude
      altitude : Math.random() * 600
    }
  }));
}
layer.addGeometry(markers);

map.setPitch(60);
