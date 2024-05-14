"use client";

import NavBar from "../components/NavBar";
import PhotoGallery from "../components/PhotoGallery";

const imageFiles = [
  {
    src: "/images/000018250005_websize.jpg",
    alt: "photo",
    width: 1536,
    height: 2317,
  },
  {
    src: "/images/000018250025_websize.jpg",
    alt: "photo",
    width: 1536,
    height: 2317,
  },
];

type photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: () => void;
};

export default function Photos() {
  return (
    <main className="p-24">
      <div className="pb-10">
        <NavBar />
      </div>

      <div className="px-3">
        <PhotoGallery photos={imageFiles} />
      </div>
    </main>
  );
}
