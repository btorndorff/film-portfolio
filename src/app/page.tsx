"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CanonA1 from "../../public/cameras/canona1.png";
import PhotoBackground from "../../public/images/photo-background.png";
import CanonA1Blinking from "../../public/cameras/canon-a1-blinking.gif";
// import CanonAE1Sound from "../../public/audio/canon-ae1-sound.mp3";
import photo1 from "../../public/images/000018250005_websize.jpg";
import photo2 from "../../public/images/000018250025_websize.jpg";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef();

  // const play = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   } else {
  //     // Throw error
  //   }
  // };

  const router = useRouter();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleCameraClick = () => {
    // play();
    router.push("/photos");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div
        className="z-10 absolute"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        onClick={handleCameraClick}
      >
        <Image src={CanonA1Blinking} alt="Canon A-1" height={200} />
        {/* <audio ref={CanonAE1Sound} src="/static/src.mp3" /> */}
      </div>

      <Image
        src={PhotoBackground}
        alt="photo-background"
        className="absolute z-0"
        height={500}
      />

      {/* {typeof window !== "undefined" && (
        <>
          <Image
            src={photo1}
            className={isHovered ? `absolute z-0 rotate-[25deg]` : ""}
            alt="photo 1"
            width={300}
            style={{ "--initial-deg": "25deg" } as React.CSSProperties}
          />
          <Image
            className={`absolute z-0 rotate-45`}
            src={photo2}
            alt="photo 2"
            height={300}
            style={{ "--initial-deg": "45deg" } as React.CSSProperties}
          />
        </>
      )} */}
    </main>
  );
}
