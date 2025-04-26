import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-y-20 gap-x-20 md:gap-y-1 justify-around md:justify-between px-10 md:px-50 mt-25 md:mt-10 lg:mt-45 xl:mt-45  relative">
      <a
        href="https://open.spotify.com/playlist/3aKgIKgrYZtOWO75ZlhJXn?si=582ef3afc39f4542"
        className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85"
      >
        <Image src="/button-3.png" width={150} height={150} alt="icon1" className="w-[100px] sm:w-[150px]" />
        <span className="text-xl font-semibold text-gray-200">Song.mp3</span>
      </a>
      <Link href="/notes" className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85">
        <Image src="/button-1.png" width={150} height={150} alt="icon1" className="w-[100px] sm:w-[150px]" />
        <span className="text-xl font-semibold text-gray-200">Notes.txt</span>
      </Link>
      <Link href="/celebrate" className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85">
        <Image src="/button-2.png" width={150} height={150} alt="icon1" className="w-[100px] sm:w-[150px]" />
        <span className="text-xl font-semibold text-gray-200">Celebrate??</span>
      </Link>
      <Link href="/photos" className="flex flex-col items-center text-gray-700 transform transition duration-200 hover:scale-85">
        <Image src="/button-4.png" width={150} height={150} alt="icon1" className="w-[100px] sm:w-[150px]" />
        <span className="text-xl font-semibold text-gray-200">Best-Photo.jpg</span>
      </Link>
    </div>
  );
}
