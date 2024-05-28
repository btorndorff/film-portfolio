import Link from "next/link";
import Image from "next/image";
import Instagram from "../../../public/icons/instagram.svg";
import Camera from "../../../public/icons/camera.svg";

export default function NavBar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/" passHref>
          <Image src={Camera} alt="camera" width={45} />
        </Link>
        <Link href="/" passHref>
          <span className="text-4xl font-bold">BEN ORNDORFF</span>
        </Link>
        <Link
          href="https://www.instagram.com/borf.film/"
          passHref
          target="_blank"
        >
          <Image src={Instagram} alt="instagram" width={45} />
        </Link>
      </div>
    </nav>
  );
}
