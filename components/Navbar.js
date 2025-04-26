import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-linear-to-b from-gray-100 to-gray-400 flex gap-10 py-3 px-20 md:px-30 text-gray-700 items-center">
      <div>
        <Image src="/apple.svg" width={30} height={30} alt="icon1" />
      </div>
      <div>Finder</div>
      <div>File</div>
      <div>Edit</div>
      <div>Go</div>
    </nav>
  );
}
