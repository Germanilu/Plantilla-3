'use client'
 
import { Loader }           from "@googlemaps/js-api-loader";
import { useRef,useEffect } from "react";

import './index.scss';

/**
 * @Component
 * Render Google map with pin Location
 * 
 * @example
 * <Map/>
 * 
 */
export default function Map(){

  const mapRef = useRef(null);

  useEffect(() => {

    const initMap = async() => {

      const loader = new Loader({
        apiKey: "AIzaSyBGdWS8K4MVcHVUpnbAWyF_8tVv7WJO-w0",
        version: 'weekly'
      });

      //Init map and marker
      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');
      
      const position = {
        lat: 45.44960184205951,
        lng: 9.165075712144308
      }

      //map options
      const mapOptions = {
        center: position,
        zoom: 10,
        mapId: 'MY_NEXTJS_MAPID'
      }

      //setup the map
      const map = new Map(mapRef.current, mapOptions);

      //put up a marker
      const marker = new Marker({
        map: map,
        position: position
      })
    }

    initMap();

  },[]);

  return(
    <div className="map-design" ref={mapRef}/>

  )
}