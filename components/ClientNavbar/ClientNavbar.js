"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "../Navbar/Navbar";

const Headroom = dynamic(() => import("react-headroom"), { ssr: false });

export default function ClientNavbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Navbar />;
  }

  return (
    <Headroom>
      <Navbar />
    </Headroom>
  );
}
