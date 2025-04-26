import Image from "next/image";

export default function Docks() {
  return (
    <div className="flex">
      <div className="absolute bottom-0 mb-15 px-20 md:px-30 w-full">
        <div className="flex border-1 py-5 justify-between w-full px-5 md:px-20 bg-gray-500/50 rounded-lg">
          <div>
            <Image src="/icon-1.png" width={50} height={50} alt="icon1" className="w-[20px] sm:w-[40px]" />
          </div>
          <div>
            <Image src="/icon-2.png" width={50} height={50} alt="icon" className="w-[20px] sm:w-[40px]" />
          </div>
          <div>
            <Image src="/icon-3.png" width={50} height={50} alt="icon" className="w-[20px] sm:w-[40px]" />
          </div>
          <div>
            <Image src="/icon-4.png" width={50} height={50} alt="icon" className="w-[20px] sm:w-[40px]" />
          </div>
          <div>
            <Image src="/icon-5.png" width={50} height={50} alt="icon" className="w-[20px] sm:w-[40px]" />
          </div>
          <div>
            <Image src="/icon-6.png" width={50} height={50} alt="icon" className="w-[20px] sm:w-[40px]" />
          </div>
          <div>
            <Image src="/icon-7.png" width={50} height={50} alt="icon" className="w-[20px] sm:w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
