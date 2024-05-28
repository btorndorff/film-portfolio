import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

interface ExtendedRenderPhotoProps extends RenderPhotoProps {
  onClick?: () => void;
  metadata?: {
    film?: string;
    camera?: string;
    location?: string;
  };
}

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className },
  wrapperStyle,
  onClick,
  metadata,
}: ExtendedRenderPhotoProps) {
  return (
    <div className="relative" style={wrapperStyle} onClick={onClick}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        alt={alt}
        title={title}
        sizes={sizes}
        className={`${className} transition-filter duration-300 ease-in-out`}
        style={{ filter: "brightness(100%)" }}
      />
      {metadata && (
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 bg-black bg-opacity-50 text-white p-4">
          <div className="text-center">
            {metadata.camera && <p>📷 {metadata.camera}</p>}
            {metadata.film && <p>🎞️ {metadata.film}</p>}
            {metadata.location && <p>📍 {metadata.location}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
