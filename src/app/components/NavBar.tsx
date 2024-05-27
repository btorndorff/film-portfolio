import Link from "next/link";
import { usePathname } from "next/navigation";

const getClassName = (currentPage: string, targetPage: string) => {
  return currentPage === targetPage
    ? "text-orange-500"
    : "hover:text-yellow-500";
};

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <a className="text-4xl font-bold text-teal-400">CELESTE LAI</a>
        </Link>
        <div className="flex space-x-8 text-xl font-semibold text-gray-500">
          <Link href="/featured-projects" passHref>
            <a className={getClassName(pathname, "/featured-projects")}>
              featured projects
            </a>
          </Link>
          <Link href="/animation" passHref>
            <a className={getClassName(pathname, "/animation")}>animation</a>
          </Link>
          <Link href="/illustration" passHref>
            <a className={getClassName(pathname, "/illustration")}>
              illustration
            </a>
          </Link>
          <Link href="/tattoo" passHref>
            <a className={getClassName(pathname, "/tattoo")}>tattoo</a>
          </Link>
          <Link href="/about" passHref>
            <a className={getClassName(pathname, "/about")}>about</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
