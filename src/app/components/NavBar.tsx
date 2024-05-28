import Link from "next/link";
import Image from "next/image";
import Instagram from "../../../public/icons/instagram.svg";

export default function NavBar() {
  return (
    <nav className="py-4">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:gap-3">
        <Link href="/" passHref>
          <span className="text-4xl font-bold mb-6 md:mb-0">BEN ORNDORFF</span>
        </Link>
        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          <Link
            href="https://www.instagram.com/borf.film/"
            passHref
            target="_blank"
          >
            <Image src={Instagram} alt="instagram" width={40} height={40} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
