/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import AddReportButton from "../components/AddReportButton";
import TopReportsToggle from "../components/TopReportsToggle";
import MainNav from "../components/MainNav";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function HomePage() {
  const { data: session } = useSession();

  const googlemap = useRef(null);

  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);

  const [loggedIn, setLoggedIn] = useState();

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
      // const altitude = position.coords.altitude;
      // const accuracy = position.coords.accuracy;
      // const altitudeAccuracy = position.coords.altitudeAccuracy;
      // const heading = position.coords.height;
      // const speed = position.coords.speed;
      // const timestamp = position.timestamp;

      setLat(latitude);
      setLng(longitude);
    };

    const locationError = (error) => {
      const code = error.code;
      const message = error.message;
    };

    navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
  });
  if (session) {
    return (
      <>
        <div className="h-[100vh] w-screen flex flex-col justify- items-center">
          <AddReportButton />
          <div id="map" ref={googlemap} className="w-[100%] grow" />
          <TopReportsToggle />
          <MainNav />
        </div>
      </>
    );
  }

  return (
    <>
      <div id="map" ref={googlemap} className="w-[100%] hidden" />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center w-screen space-x-2 max-w-[36rem]">
          <button className="mt-20 h-2 w-1/12 rounded-xl p-1 bg-[grey]"></button>
          <button className="mt-20 h-2 w-1/12 rounded-xl p-1 bg-[lightgrey]"></button>
        </div>
        <div className="flex justify-center mt-20">
          <img src="/images/cityfi-icon.png" alt="cityfi icon" />
        </div>
        <div className="flex justify-center mt-16">
          <p className="font-mono font-bold text-5xl">Cityfi</p>
        </div>
        <div className="flex mt-14 justify-center">
          <p className="font-mono text-2xl text-center p-4">
            Helping connect the community and <br /> the local goverment
          </p>
        </div>

        <div className="flex space-x-8 w-screen justify-center">
          <div className="flex justify-center mt-16">
            <button
              onClick={() => signIn()}
              type="button"
              className="bg-[#FF9900] text-white px-[4rem] py-2 rounded-lg font-semibold text-xl mt-2"
            >
              Sign In
            </button>
          </div>
          <Link href="/create">
            <div className="flex justify-center mt-16">
              <button
                type="button"
                className="bg-[#FF9900] text-white px-[4rem] py-2 rounded-lg font-semibold text-xl mt-2"
              >
                Sign up
              </button>
            </div>
          </Link>
        </div>

        <div className="w-36 h-36 rounded-full bg-[#680E0E] absolute top-10 -left-20 opacity-80" />
        <div className="w-36 h-36 rounded-full bg-[#2AD876] absolute -left-20 bottom-20 opacity-80" />
        <div className="w-14 h-28 rounded-tl-full rounded-bl-full bg-[#187BA1] absolute top-52 right-0 opacity-80" />
      </div>
    </>
  );
}

export default HomePage;
