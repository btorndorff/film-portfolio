import Image from "next/image";
import type { RenderPhotoProps, Photo } from "react-photo-album";

interface ExtendedRenderPhotoProps extends RenderPhotoProps {
  onClick?: () => void;
}

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className },
  wrapperStyle,
  onClick,
}: ExtendedRenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }} onClick={onClick}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className }}
      />
    </div>
  );
}
