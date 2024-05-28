import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import NextJsImage from "./NextJsImage";
import { useState } from "react";
import type { Photo } from "react-photo-album";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState(false);
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo>();

  const images = photos.map((photo) => ({
    ...photo,
  }));

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
