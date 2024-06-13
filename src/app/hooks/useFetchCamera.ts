import { useState, useEffect } from "react";
import Camera from "../types/camera";

const cameraNames = ["canon-a1", "fuji-cardia-zoom"];

const useFetchCamera = (): Camera | undefined => {
  const [camera, setCamera] = useState<Camera | undefined>();

  useEffect(() => {
    const fetchCameras = () => {
      if (cameraNames.length > 0) {
        const randomCameraName =
          cameraNames[Math.floor(Math.random() * cameraNames.length)];

        setCamera({
          gif: `/cameras/${randomCameraName}.gif`,
          audio: `/cameras/${randomCameraName}.mp3`,
        });
      }
    };

    fetchCameras();
  }, []);

  return camera;
};

export default useFetchCamera;
