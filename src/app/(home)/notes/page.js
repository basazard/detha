import Image from "next/image";
import Link from "next/link";
import Card from "../../../../components/Card";

export default function Notes() {
  return (
    <div className="flex justify-between px-50 mt-10 relative">
      <Card title="Notes">
        <Link
          href="/home"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/nailong.png" alt=""></img>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Dear Detha,</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Happy Birthday to the clingiest, sweetest, most lovable girl we know, you've come this far, don't listen to those who want to bring you down.
              We're always praying for you.
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">Best Regards,</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">beloved by Detha</p>
          </div>
        </Link>
      </Card>
    </div>
  );
}
