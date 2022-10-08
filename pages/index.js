import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function HomePage() {
  const googlemap = useRef(null);
  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      version: "weekly",
    });
    let map;
    loader.load().then(() => {
      const google = window.google;
      map = new google.maps.Map(googlemap.current, {
        center: { lat: 26.373108, lng: -80.102276 }, // cords for FAU Campus
        zoom: 16, // Initial map zoom
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
        mapId: "ef0f9cd15149a984",
      });
    });
  });
  return <div id="map" ref={googlemap} />;
}

export default HomePage;
