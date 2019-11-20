import React, {Component} from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

class Map extends Component {
  // Create a ref object that exposes native DOM elements
  mapDiv = React.createRef();

  componentDidMount() {
    console.log('cdm');
    this.setMap();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("cdu");
    this.setMap();
  }


  setMap(){
    const {zoom, lat, lng} = this.props;

    if (lat && lng) {
      const map = new window.google.maps.Map(
        this.mapDiv.current, {
          zoom: zoom || 12,
          center: {lat, lng},
          disableDefaultUI: true,
          styles: mapStyle
        }
      );
      new window.google.maps.Marker({position: {lat, lng}, map: map});
    }
  }

  render(){
    console.log("render");
    return (
      <div ref={this.mapDiv} className={styles.Map}></div>
    );
  }
}

export default Map;