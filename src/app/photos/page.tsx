"use client";

import NavBar from "../components/NavBar";
import PhotoGallery from "../components/PhotoGallery";
import { useFetchImages } from "../hooks/useFetchImages";
import Error from "../components/Error";

export default function Photos() {
  const { images, loading, error } = useFetchImages();

  return (
    <main className="p-6 md:p-24 pt-10">
      <div className="mb-10">
        <NavBar />
      </div>

      {loading || error ? <Error /> : <PhotoGallery images={images} />}
    </main>
  );
}
