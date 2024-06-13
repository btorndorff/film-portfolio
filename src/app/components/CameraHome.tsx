"use client";

import useSound from "use-sound";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PhotoBackground from "../../../public/images/photo-background.png";
import useFetchCamera from "../hooks/useFetchCamera";
import Camera from "../types/camera";

const CameraDisplay = ({ camera }: { camera: Camera }) => {
  const router = useRouter();
  const [play] = useSound(camera.audio, {
    soundEnabled: !!camera?.audio,
  });

  const handleCameraClick = () => {
    play();
    router.push("/photos");
  };

  return (
    <div
      onClick={() => {
        if (camera?.audio) {
          play();
        }
        handleCameraClick();
      }}
    >
      <Image src={camera.gif} alt="camera" width={300} height={300} />
    </div>
  );
};

export default function CameraHome() {
  const camera = useFetchCamera();

  if (!camera) {
    return <p>Loading camera data...</p>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 absolute">
        <CameraDisplay camera={camera} />
      </div>

      <Image
        src={PhotoBackground}
        alt="photo-background"
        className="absolute z-0  w-auto"
      />
    </div>
  );
}
