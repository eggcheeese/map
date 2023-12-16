function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 49.496675, lng: -102.65625 },
    });
    const georssLayer = new google.maps.KmlLayer({
      url: "https://storage.googleapis.com/marker_map_data/map%20study.kml",
      
    });

    // const food = georssLayer.getElementById('04D1F1514F2D5F8666CE').Placemark;
    // food.addListener('click', function(event) {
    //     alert('클릭');
    //   });

    georssLayer.setMap(map);
    
    
  }
  
  window.initMap = initMap;