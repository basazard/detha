import Link from "next/link";
import Card from "../../../../components/Card";
import Image from "next/image";

export default function Photos() {
  return (
    <div className="flex justify-between px-0 md:px-50 mt-5 md:mt-5 relative">
      <Card title="Best Photo of You">
        <Link href="/home" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl">
          <div className="w-full rounded-t-lg  md:rounded-none md:rounded-s-lg flex justify-center">
            <Image src="/dethabest.png" alt="detha" width={200} height={200} className="w-[150px] sm:w-[150px]" />
          </div>
        </Link>
      </Card>
    </div>
  );
}
