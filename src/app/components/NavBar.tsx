import Image from "next/image";
import { ReactElement } from "react";
import InstagramIcon from "../../../public/instagram.png";

export default function NavBar() {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl text-gray-800 font-semibold">
          Logo
        </a>
        <a href="#" className="text-xl text-gray-800 font-semibold">
          Ben Orndorff
        </a>
        <a
          href="https://www.instagram.com/borf.film/"
          className="text-xl text-gray-800 font-semibold"
          target="_blank"
        >
          <Image src={InstagramIcon} alt="Instagram" width={25} />
        </a>
      </div>
    </nav>
  );
}
