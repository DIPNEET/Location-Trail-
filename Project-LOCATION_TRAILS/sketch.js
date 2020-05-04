   /*The HTML Geolocation API is used to locate a user's geographical position
   
        Geolocation is also very useful for location-specific information, like:

            Up-to-date local information
            Showing Points-of-interest near the user
            Turn-by-turn navigation (GPS)
    
    METHODS USED:

    watchPosition()  Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
    clearWatch()     Stops the watchPosition() method.
    
    **The getCurrentPosition() method is used to return the user's position.
    
    PROPERTIES USED:

    coords.latitude	    The latitude as a decimal number (always returned)
    coords.longitude	The longitude as a decimal number (always returned)
    coords.accuracy  	The accuracy of position (always returned)
    
   */

// Listener added, arguements: event,listener-function
addEventListener('click', tracker); 
function tracker() {
  

  if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (pos) {
          var coords = [pos.coords.longitude, pos.coords.latitude];
      
       
         var div = document.createElement('div');
          div.className = 'alert alert-info';
          div.innerHTML = `<strong>Latitude:</strong> ${pos.coords.latitude} <strong>Longitude:</strong> ${pos.coords.longitude}<br> <strong>Date/Time:</strong> ${Date()}<br><br>`;
          document.querySelector('#card-footer').insertBefore(div, document.querySelector('.alert'));
  
       //ERROR HANDLING
      }, function (error) {
          var div = document.createElement('div');
        //  div.className = 'alert alert-danger mt-3';
          div.innerHTML = `ERROR ENCOUNTERED: ${error.message} Reload and start again.`;
         
      });

     
  
  }
}
