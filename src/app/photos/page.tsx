"use client";

import NavBar from "../components/NavBar";
import PhotoGallery from "../components/PhotoGallery";
import { useFetchImages, Image } from "../hooks/useFetchImages";

type photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onClick?: () => void;
};

export default function Photos() {
  const { images, loading, error } = useFetchImages();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const photos: photo[] = images.map((image: Image) => ({
    src: image.url,
    alt: image.public_id,
    width: image.width,
    height: image.height,
  }));

  return (
    <main className="p-24">
      <NavBar />
      <PhotoGallery photos={photos} />
    </main>
  );
}
