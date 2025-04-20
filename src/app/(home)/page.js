"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <p>Redirecting to login...</p>
    </div>
  );
}
