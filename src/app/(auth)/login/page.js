"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MacOSLogin() {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      setCurrentDate(now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePasscodeSubmit = (e) => {
    e.preventDefault();

    if (passcode === "20042025") {
      router.push("/home");
    } else {
      setError("Incorrect passcode. Please try again.");
      setPasscode("");
    }
  };

  return (
    <div
      className="h-screen w-full bg-gray-900 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/api/placeholder/1920/1080')" }}
    >
      <div className="text-white text-center mb-8">
        <h1 className="text-6xl font-light">{currentTime}</h1>
        <h2 className="text-xl mt-2 font-light">{currentDate}</h2>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden flex items-center justify-center">
          <div className="text-gray-500 text-4xl">
            <Image src="/detha.jpg" alt="detha" width={100} height={100} />
          </div>
        </div>
        <h2 className="text-white text-xl font-medium">Detha</h2>
      </div>

      <form onSubmit={handlePasscodeSubmit} className="w-64">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter passcode"
            className="w-full px-4 py-2 rounded-lg bg-gray-800 bg-opacity-50 backdrop-blur-md text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            maxLength={8}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400 hover:text-white">
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button type="submit" className="w-full mt-4 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
          Log In
        </button>
      </form>

      <div className="absolute bottom-8 flex space-x-4 text-white text-sm">
        <button className="px-3 py-1 rounded-md bg-gray-800 bg-opacity-50 hover:bg-opacity-70">Restart</button>
        <button className="px-3 py-1 rounded-md bg-gray-800 bg-opacity-50 hover:bg-opacity-70">Shut Down</button>
        <button className="px-3 py-1 rounded-md bg-gray-800 bg-opacity-50 hover:bg-opacity-70">Sleep</button>
      </div>
    </div>
  );
}
