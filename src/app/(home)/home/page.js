import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between px-50 mt-50 relative">
      <a
        href="https://open.spotify.com/playlist/37i9dQZF1EJAFDWPFcsaUq?si=99f341a1df644732"
        className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85"
      >
        <Image src="/button-3.png" width={150} height={150} alt="icon1" />
        <span className="text-xl font-semibold text-gray-800">Song.mp3</span>
      </a>
      <Link href="/notes" className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85">
        <Image src="/button-1.png" width={150} height={150} alt="icon1" />
        <span className="text-xl font-semibold text-gray-800">Notes.txt</span>
      </Link>
      <Link href="/celebrate" className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85">
        <Image src="/button-2.png" width={150} height={150} alt="icon1" />
        <span className="text-xl font-semibold text-gray-800">Celebrate??</span>
      </Link>
      <Link href="/photos" className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85">
        <Image src="/button-4.png" width={150} height={150} alt="icon1" />
        <span className="text-xl font-semibold text-gray-800">Best-Photo.jpg</span>
      </Link>
    </div>
  );
}
