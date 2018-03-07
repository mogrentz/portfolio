function initialize() {
       var stonehenge = new google.maps.LatLng(51.178884,-1.826214)
       var mapOptions = {
              zoom: 18,
              center: stonehenge,
              mapTypeId: google.maps.MapTypeId.SATELLITE
       };
       var map = new google.maps.Map(
              document.getElementById("map"),
              mapOptions);








        var infowindow = new google.maps.InfoWindow({content: '<IMG BORDER="0" ALIGN="center" WIDTH="200" SRC="resources/img/alien_building.gif">'  });


      var stonehenge = new google.maps.Marker({
        position: stonehenge,
        map: map,
        title: 'Stonehenge'
        });
      stonehenge.setMap(map, stonehenge);


 		stonehenge.addListener('click', function() {
          infowindow.open(map, stonehenge);
        });


}

 