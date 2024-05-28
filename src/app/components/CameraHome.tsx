"use client";

import { useState } from "react";
import useSound from "use-sound";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PhotoBackground from "../../../public/images/photo-background.png";
import CanonA1Blinking from "../../../public/cameras/canon-a1-blinking.gif";

export default function CameraHome() {
  const [isHovered, setIsHovered] = useState(false);
  const [playAudio] = useSound("/audio/canon-ae1-sound.mp3");
  const router = useRouter();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleCameraClick = () => {
    playAudio();
    router.push("/photos");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="z-10 absolute"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleCameraClick}
      >
        <Image src={CanonA1Blinking} alt="Canon A-1" height={200} />
      </div>

      <Image
        src={PhotoBackground}
        alt="photo-background"
        className="absolute z-0"
        height={500}
      />
    </div>
  );
}
