import Link from "next/link";
import Card from "../../../../components/Card";
import Image from "next/image";

export default function Photos() {
  return (
    <div className="flex justify-between px-50 mt-5 relative">
      <Card title="Best Photo of You">
        <Link
          href="/home"
          className="flex flex-col items-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-red-800 dark:hover:bg-gray-700"
        >
          <div className="object-cover w-full rounded-t-lg h-[100px] md:h-auto md:w-[200px] md:rounded-none md:rounded-s-lg">
            <Image src="/best-photo.jpeg" alt="detha" width={200} height={200} />
          </div>
        </Link>
      </Card>
    </div>
  );
}
