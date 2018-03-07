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



var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '<h1>Stonehenge</h1>'+
            '</div>'+
            
            '<div id="popup_window">'+
            '<p>A huge circle of stones, some weighing as much as 50 tons, '+
            'sits in the English countryside outside Salisbury. Known as '+
            'Stonehenge, the Neolithic monument inspired Swiss author '+
            'Erich von Däniken to suggest it was a model of the solar '+
            'system that also functioned as an alien landing pad—after '+
            'all, how else could those massive stones have ended up hundreds '+
            ' of miles from their home quarry?<p>'+

			'<p>No one knows what, exactly, the meaning of Stonehenge is, but, '+
			'as with all the other sites in this collection, the explanation '+
			'is not aliens. Instead, scientists have demonstrated it’s actually '+
			'possible to build such a thing using technologies that would have '+
			'been around 5,000 years ago, when the earliest structures at the '+
			'site were built.</p>'+

			'<p>And now, it appears as though the stones are aligned with solstices '+
			'and eclipses, suggesting the Stonehenge builders were at least '+
			'keeping an eye on the heavens, even if they didn’t come from above.</p> '+
			'<a href="https://www.nationalgeographic.com/travel/travel-interests/arts-and-culture/ancient-sites-built-by-aliens/" target="_blank">Reference</a>'+
			'</div>'+
			'</div>';
            




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

 