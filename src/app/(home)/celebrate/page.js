import Link from "next/link";
import Card from "../../../../components/Card";

export default function Celebrate() {
  return (
    <div className="flex justify-between px-0 md:px-50 mt-10 relative">
      <Card title="Invitation">
        <Link
          href="/home"
          className="flex flex-col items-center p-5 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl text-gray-600"
        >
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl text-center">🎉 You&apos;re Invited! 🎉</h2>
            <h2 className="font-semibold text-xl text-center">A Special Celebration</h2>
            <p className="font-normal text-gray-500">
              I throwing a little celebration, and of course—you&apos;re on the very exclusive guest list. <br></br>🌟 🗓️ Date: To be announced soon! <br></br>
              📍 Location: Will follow with the details <br></br>🎈 Just know... it&apos;s going to be worth the wait. <br></br>
            </p>
            <p className="font-semibold">With love💕</p>
          </div>
        </Link>
      </Card>
    </div>
  );
}
