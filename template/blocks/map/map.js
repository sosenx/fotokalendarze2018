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
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
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