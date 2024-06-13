import Image from "next/image";
import NoPhotos from "../../../public/images/err.png";

export default function Error() {
  return (
    <div className="flex align-items-center justify-center ">
      <Image src={NoPhotos} alt="error" />
    </div>
  );
}
