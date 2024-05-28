"use client";

import NavBar from "../components/NavBar";
import PhotoGallery from "../components/PhotoGallery";
import { useFetchImages } from "../hooks/useFetchImages";

export default function Photos() {
  const { images, loading, error } = useFetchImages();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="p-6 md:p-24 pt-10">
      <div className="mb-10">
        <NavBar />
      </div>

      <PhotoGallery images={images} />
    </main>
  );
}
