
	// ****** GOOGLE MAP *******
	var map;
	
				
	var MY_MAPTYPE_ID = 'custom_style';
				
	function initialize() {
				
		var featureOpts = [
			{
				stylers: [
					{ saturation: -20 },
					{ lightness: 40 },
					{ visibility: 'simplified' },
					{ gamma: 0.8 },
					{ weight: 0.4 }
				]
			},
			{
				elementType: 'labels',
				stylers: [
					{ visibility: 'on' }
				]
			},
			{
				featureType: 'water',
				stylers: [
					{ color: '#dee8ff' }
				]
			}
		];
				
		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			panControl: false,
			mapTypeControl: false,
  			streetViewControl: false,
			center: new google.maps.LatLng(16.077614, 108.222678),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
				
		map = new google.maps.Map(document.getElementById('canvas-map'),mapOptions);
		//var image = window.location.protocol+"//"+window.location.host+ window.location.pathname+'/wp-content/themes/ventcamp/images/pmarker.png';
		var myLatLng = new google.maps.LatLng(16.077614, 108.222678);
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map
			//icon: image.replace("/vi/","/")
		});
		var styledMapOptions = {
			name: 'Custom Style'
		};
				
		var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
				
		map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	}
				
	google.maps.event.addDomListener(window, 'load', initialize); 
