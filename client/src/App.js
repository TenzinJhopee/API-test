import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';


import { listLogEntries } from "./API";

const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vw',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3
  });

  useEffect(() => {
      (async () => {
        const logEntries = await listLogEntries();
        console.log(logEntries);
      })();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/tenzinsean/ckm4b8e8qcy2u17p6xl976wm5"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}

export default App;