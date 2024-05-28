"use client";

import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";
import { useState } from "react";
import type { Photo } from "react-photo-album";
import Image from "../types/Image";

export default function PhotoGallery({ images }: { images: Image[] }) {
  const [open, setOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo>();

  const handleImageClick = (clickedPhoto: Photo) => {
    setLightboxPhoto(clickedPhoto);
    setOpen(true);
  };

  const handleLightboxClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <PhotoAlbum
        photos={images}
        layout="masonry"
        columns={(containerWidth) => {
          if (containerWidth < 768) return 1;
          return 2;
        }}
        renderPhoto={(props) => (
          <NextJsImage
            {...props}
            onClick={() => handleImageClick(props.photo)}
            metadata={props.photo.metadata}
          />
        )}
        defaultContainerWidth={1200}
      />

      <Lightbox
        open={open}
        close={handleLightboxClose}
        slides={lightboxPhoto ? [lightboxPhoto] : []}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  );
}
