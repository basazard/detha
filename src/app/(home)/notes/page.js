import Image from "next/image";
import Link from "next/link";
import Card from "../../../../components/Card";

export default function Notes() {
  return (
    <div className="flex justify-between px-0 md:px-50 mt-10 relative">
      <Card title="Notes">
        <Link
          href="/home"
          className="flex flex-col items-center border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl bg-gray-100 hover:bg-gray-200"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-gray-700">Dear Detha,</p>
            <p className="mb-3 font-normal text-gray-700">
              Happy Birthday to the clingiest, sweetest, most lovable girl I know, you&apos;ve come this far, don&apos;t listen to those who want to bring you
              down. I always praying for you.
            </p>
            <p className="font-normal text-gray-700">Best Regards,</p>
            <p className="mb-3 font-normal text-gray-700">Mas</p>
          </div>
        </Link>
      </Card>
    </div>
  );
}
