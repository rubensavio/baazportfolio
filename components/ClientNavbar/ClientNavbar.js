"use client";

import dynamic from "next/dynamic";
import Navbar from "../Navbar/Navbar";

// react-headroom reads window.pageYOffset — must stay client-only.
// Navbar itself is a Client Component that renders fine on the server.
const Headroom = dynamic(() => import("react-headroom"), {
  ssr: false,
  loading: () => <Navbar />,
});

export default function ClientNavbar() {
  return (
    <Headroom>
      <Navbar />
    </Headroom>
  );
}
