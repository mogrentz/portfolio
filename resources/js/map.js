function initialize() {
       var towncenter = new google.maps.LatLng(59.2358,-135.4450)
       var mapOptions = {
              zoom: 14.5,
              center: towncenter,
              mapTypeId: google.maps.MapTypeId.HYBRID
       };
       var map = new google.maps.Map(
              document.getElementById("map"),
              mapOptions);
}

 