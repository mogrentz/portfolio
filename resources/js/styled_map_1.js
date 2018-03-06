var map;


function initialize() {
       haines = new google.maps.LatLng(59.2358,-135.4450)
       
       var mapOptions = {
              zoom: 14.5,
              center: haines,
              mapTypeId: google.maps.MapTypeId.HYBRID,
              mapTypeControl: false};



       map = new google.maps.Map(
              document.getElementById("map"),
              mapOptions);
            
	}

		var styleControl = document.getElementById('style-selector-control');
		map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

		// Set the map's style to the initial value of the selector.
		var styleSelector = document.getElementById('style-selector');
		map.setOptions({styles: styles[styleSelector.value]});

		// Apply new JSON when the user selects a different style.
		styleSelector.addEventListener('change', function() {
		map.setOptions({styles: styles[styleSelector.value]});
		});
	



		var styles = {
			default: null,
			silver : [
			{
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#ebe3cd"
			      }
			    ]
			  },
			],

			standard : [
			{elementType: 'geometry', stylers: [{color: '#242f3e'}]}

			],





		};





 