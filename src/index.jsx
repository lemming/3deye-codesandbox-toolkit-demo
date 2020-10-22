import React, { useCallback, useState } from "react";
import ReactDom from "react-dom";

import "./styles.css";
import "@3deye-toolkit/react-camera/dist/react-camera.css";
import "@3deye-toolkit/react-event-list/dist/react-event-list.css";

import { app } from "@3deye-toolkit/core";
import Camera from "@3deye-toolkit/react-camera";
import EventList from "@3deye-toolkit/react-event-list";

const token = {
  widgetId: "63e36014136e435ea195b3763b532eef",
  widgetToken:
    "Scjzac19CI9EaLOAMMay2byGyEQRRcNesCaOI1NrKl4uEEcOCcngkZEQidB2RJN9zzq7K9wQ8OoPEdCubbPoUGZY5pfezqAa750JSEdck5h2kUleBLzpZ7kTaXBzZSvNOnQgiYC55mdW75nIdaDOvpgASgI0cJIxgzN3EF2IJ4rM0TuDJxWyPHW6gQTbQHztELpdPqE6af049fe8aede414ab312265ed3771ad3"
};

window.app = app;

app.init({ token });

function App() {
  const [cameraId, setCameraId] = useState(23529);
  const [startTime, setStartTime] = useState(null);

  const playEvent = useCallback(({ startTime, cameraId }) => {
    setCameraId(cameraId);
    setStartTime(startTime);
  }, []);

  const closeCamera = () => {
    setCameraId(null);
    setStartTime(null);
  };

  return (
    <React.Fragment>
      <div
        style={{
          width: 300,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <EventList onEventClick={playEvent} />
      </div>
      {cameraId ? (
        <Camera
          style={{ flex: 1 }}
          cameraId={cameraId}
          startTime={startTime}
          onRequestClose={closeCamera}
        />
      ) : null}
    </React.Fragment>
  );
}

ReactDom.render(
  <App />,

  document.getElementById("app")
);
