import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Agitated Brisk Chicken</title>
        <meta property="og:title" content="Contact - Agitated Brisk Chicken" />
      </Helmet>
      <div className="contact-container01">
        <div className="contact-container02">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="contact-image"
          />
        </div>
        <div className="contact-container03">
          <div className="contact-container04">
            <h1 className="contact-text">Contact Us</h1>
            <span className="contact-text01">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className="contact-container05">
            <h1 className="contact-text02">Address</h1>
            <span className="contact-text03">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className="contact-container06">
            <h1 className="contact-text04">
              <span>Mail</span>
              <br></br>
            </h1>
            <span className="contact-text07">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
          <div className="contact-container07">
            <h1 className="contact-text08">
              <span>Call us</span>
              <br></br>
            </h1>
            <span className="contact-text11">
              Erat netus est hendrerit, nullam et quis ad cras porttitor
              iaculis. Bibendum vulputate cras aenean.
            </span>
          </div>
        </div>
      </div>
      <div className="contact-container08">
        <div className="contact-container09">
          <div className="contact-container10">
            <Script
              html={`<html>
  <head>
    <title>Add Map</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>

    <style type="text/css">
      #map {
        height: 100%;
      }

      /* 
 * Optional: Makes the sample page fill the window. 
 */
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
   
  </head>
  <body>
    
    <!--The div element for the map -->
    <div id="map"></div>

    <!-- prettier-ignore -->
    <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=\`https://maps.\${c}apis.com/maps/api/js?\`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyAxcFcYHyNrseC_ygPMV_4ReV5bF_9KD2c", v: "weekly"});</script>
         <script>// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: -25.344, lng: 131.031 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();</script>
  </body>
</html>
`}
            ></Script>
          </div>
        </div>
        <form enctype="multipart/form-data" className="contact-form">
          <span className="contact-text12">Contact Us</span>
          <span className="contact-text13">
            Eros ligula lobortis elementum amet commodo ac nibh ornare, eu
            lobortis.
          </span>
          <span className="contact-text14">
            <span>Name</span>
            <br></br>
          </span>
          <input type="text" className="contact-textinput input" />
          <span className="contact-text17">Email</span>
          <input type="email" className="contact-textinput1 input" />
          <span className="contact-text18">Mobile</span>
          <input type="number" className="contact-textinput2 input" />
          <span className="contact-text19">Message</span>
          <textarea className="contact-textarea textarea"></textarea>
          <button type="submit" className="contact-button button">
            <span>
              <span>Submit</span>
              <br></br>
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
