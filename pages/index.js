import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function HomePage() {
  const googlemap = useRef(null);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: "weekly",
    });

    let map;

    loader.load().then(() => {
      const google = window.google;

      map = new google.maps.Map(googlemap.current, {
        center: { lat: lat, lng: lng }, // cords for FAU Campus
        zoom: 18, // Initial map zoom
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
        mapId: "ef0f9cd15149a984", // map style ID
      });

      // marker for the user's current location
      let marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        title: "Current Location",
      });

      // To add the marker to the map, call setMap(); To remove the marker, call marker.setMap(null);
      marker.setMap(map);
    });

    const locationSuccess = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const altitude = position.coords.altitude;
      const accuracy = position.coords.accuracy;
      const altitudeAccuracy = position.coords.altitudeAccuracy;
      const heading = position.coords.height;
      const speed = position.coords.speed;
      const timestamp = position.timestamp;

      setLat(latitude);
      setLng(longitude);
    };

    const locationError = (error) => {
      const code = error.code;
      const message = error.message;
    };

    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  });
  return (
    <div className="h-[100vh] w-screen flex flex-col justify-center items-center">
      <h1>Hello</h1>
      <div id="map" ref={googlemap} className="h-[50%] w-96" />
    </div>
  );
}

export default HomePage;
