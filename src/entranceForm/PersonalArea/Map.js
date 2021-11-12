// import React, {useEffect, useRef} from "react";
// import "./PersonalAreaStyle.css";
//
//
// mapboxgl.accessToken =
//     "pk.eyJ1IjoiYW5hc3Rhc2lhZXZsIiwiYSI6ImNrdjVidTg5aDBrNTcycW9rZjJrYjZyYXYifQ.cc8dzHKC47e0M31mSwAi9g";
//
// let map;
// let geocoder;
//
// function Map(props) {
//
//     const {coord, address, setAddress,setCoord} = props;
//
//
//     const mapContainer = useRef(null);
//
//     useEffect(() => {
//         map = new mapboxgl.Map({
//             container: mapContainer.current,
//             style: "mapbox://styles/mapbox/streets-v11",
//             center: [27, 53],
//             zoom: 6,
//         });
//         geocoder = new MapboxGeocoder({
//             accessToken: mapboxgl.accessToken,
//             mapboxgl: mapboxgl,
//         });
//         map.addControl(
//             geocoder,
//             'top-right'
//         );
//
//         geocoder.on('result', (results) => (
//             setAddress(results.result.place_name),
//                 setCoord(results.result.center)
//         ))
//     }, []);
//
//
//     return (
//         <div>
//             <div
//                 id="map"
//                 ref={mapContainer}
//                 className="map-container"
//                 style={{width: "100%", height: "80hv", marginLeft: "400px"}}
//             />
//             <div id="geocoder" class="geocoder"/>
//         </div>
//     );
// }
//
// export default Map;
