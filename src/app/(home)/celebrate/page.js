import Image from "next/image";
import Link from "next/link";
import Card from "../../../../components/Card";

export default function Celebrate() {
  return (
    <div className="flex justify-between px-50 mt-5 relative">
      <Card title="Invitation">
        <Link
          href="/home"
          className="flex flex-col items-center p-5 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-red-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col">
            <h2 className="font-semibold text-2xl">🎉 You&apos;re Invited! 🎉</h2>
            <h2 className="font-semibold text-xl">A Special Celebration Hosted by Detha Disc Jockey bestie! 💖</h2>
            <p className="font-normal text-gray-100">
              Something fun, cozy, and full of good vibes is coming your way! We&apos;re throwing a little party, and of course—you&apos;re on the very
              exclusive guest list. <br></br>🌟 🗓️ Date: To be announced soon! <br></br>📍 Location: Will follow with the details <br></br>🎈 Just know...
              it&apos;s going to be worth the wait. <br></br>This is just between us close friends, so keep it hush and save a spot in your calendar. Can&apos;t
              wait to laugh, dance, and celebrate together!
            </p>
            <p className="font-semibold">With love, Detha 💕</p>
          </div>
        </Link>
      </Card>
    </div>
  );
}
