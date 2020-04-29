
   
const start = document.querySelector('#start');
const source = new ol.source.Vector();
const layer = new ol.layer.Vector({
  source: source
});

start.addEventListener('click', geoTrack); 

function geoTrack() {
  

  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (pos) {
          const coords = [pos.coords.longitude, pos.coords.latitude];
          const accuracy = new ol.geom.Polygon(coords, pos.coords.accuracy);
  
       
          const div = document.createElement('div');
          div.className = 'alert alert-info';
          div.innerHTML = `<strong>Latitude:</strong> ${pos.coords.latitude} <strong>Longitude:</strong> ${pos.coords.longitude} <strong>Date/Time:</strong> ${Date()}`;
          document.querySelector('#card-footer').insertBefore(div, document.querySelector('.alert'));
  
       
      }, function (error) {
          const div = document.createElement('div');
          div.className = 'alert alert-danger mt-3';
          div.innerHTML = `ERROR ENCOUNTERED: ${error.message} Reload and start again.`;
         
      }, {
          enableHighAccuracy: true,
          maximumAge: 10000
      });
  
     
  
  }}