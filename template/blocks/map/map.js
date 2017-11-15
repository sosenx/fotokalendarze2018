// Block name: Map
// Dependencies: Google Maps API
// Docs: https://developers.google.com/maps/
(function(){
	var initialize = function() {
		if($('#map').length){
			var	mapBlock = document.getElementById('map');
			var myLatlng = new google.maps.LatLng($(mapBlock).data('lon'), $(mapBlock).data('lat'));
			var mapStyle = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#424b5b"
            },
            {
                "weight": 2
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#545b6b"
            },
            {
                "gamma": "0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#545b6b"
            },
            {
                "gamma": "1"
            },
            {
                "weight": "10"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#666c7b"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#545b6b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#424a5b"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#666c7b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2e3546"
            }
        ]
    }
];
			
			var	mapOptions = {
		      	zoom: 15,
				center: myLatlng,
		      	mapTypeId: google.maps.MapTypeId.ROADMAP,
		      	styles: mapStyle,
		      	scrollwheel: false,
		      	mapTypeControl: true,
	      	    mapTypeControlOptions: {
	      	        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
	      	        position: google.maps.ControlPosition.TOP_LEFT
	      	    },
	      	    zoomControl: true,
	      	    zoomControlOptions: {
	      	        position: google.maps.ControlPosition.RIGHT_CENTER
	      	    },
	      	    scaleControl: true,
	      	    streetViewControl: true,
	      	    streetViewControlOptions: {
	      	        position: google.maps.ControlPosition.RIGHT_TOP
	      	    }
			};

			var	map = new google.maps.Map(mapBlock, mapOptions);

			var image = {
				url: 'assets/img/common/map/pin.png'
			};

			var marker = new google.maps.Marker({
				position: myLatlng,
				icon: image
			});

			marker.setMap(map);
		}
	};

	google.maps.event.addDomListener(window, "load", initialize);
})();