google.maps.event.addDomListener(window, 'load', init);
 
     function init() {
 
        // opcje mapy
        var mapOptions = {
        // wielkość zoomu
        zoom: 15,
        // współrzędne punktu, na którym wyśrodkowana jest mapa
        center: new google.maps.LatLng(50.103114, 19.313955), 
    };

            // pobranie mapy do zmiennej
            var mapElement = document.getElementById('map');

            // Utworzenie mapy Google używając elementu #map i opcji zdefiniowanych w tablicy
            var map = new google.maps.Map(mapElement, mapOptions);

            // dodanie znacznika
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(50.103114, 19.313955),
                map: map,
                title: 'Oświęcimska 53'
            });
    }