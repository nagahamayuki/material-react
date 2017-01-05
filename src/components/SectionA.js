import React from 'react'
import GoogleMap from 'google-map-react'
//https://github.com/istarkov/google-map-react

const size = {
  width: "100%",
  height: "100%"
};
export default class SectionA extends React.Component{
  render(){
    return(
      <div>
        <GoogleMap
          defaultCenter={{lat: 59.938043, lng: 30.337157}}
          defaultZoom={9}
          style={{width: size.width, height: size.htight}}
        >
        </GoogleMap>
      </div>
    );
  }
}
