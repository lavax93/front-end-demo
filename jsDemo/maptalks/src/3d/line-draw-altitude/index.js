var map = new maptalks.Map('map', {
  center: [-0.113049, 51.498568],
  zoom: 14,
  pitch : 60,
  bearing : 60,
  attribution: {
    content: '$(attribution)'
  },
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var line = new maptalks.LineString([
  [-0.131049, 51.498568],
  [-0.107049, 51.498568],
  [-0.101049, 51.498568]
], {
  symbol: {
    'lineColor' : '#1bbc9b',
    'lineWidth' : 3
  },
  properties : {
    'altitude' : [100, 400, 1200]
  }
});

// same line without alitutde
var line0 = new maptalks.LineString([
  [-0.131049, 51.498568],
  [-0.107049, 51.498568]
], {
  symbol: {
    'lineColor' : '#000',
    'lineDasharray' : [10, 5, 5],
    'lineWidth' : 3
  }
});

new maptalks.VectorLayer('vector', [line], { enableAltitude : true, drawAltitude : {
  polygonFill : '#1bbc9b',
  polygonOpacity : 0.3,
  lineWidth : 0
}}).addTo(map);
