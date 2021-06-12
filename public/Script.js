// mapboxgl.accessToken = 'pk.eyJ1IjoiYXJpZjExOTMiLCJhIjoiY2twcGIwazFhMGxvaDJwbW56eG1vZjc1YyJ9.lwMPvnieX-lKAxw1LRDeqw';

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{enableHighAccuracy: true})

// function successLocation(position){
// console.log(position)
// setupMap([position.coords.longitude, position.coords.latitude])
// }

// function errorLocation(){
//     setupMap([22.701002,90.353455])
// }

// function setupMap(center){
//     const map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: center,
//         zoom: 15
//       });
//       map.addControl(new mapboxgl.NavigationControl());
//       map.addControl(
//         new MapboxDirections({
//         accessToken: mapboxgl.accessToken
//         }),
//         'top-left'
//         );
// }
