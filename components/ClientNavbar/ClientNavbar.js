"use client";

import Navbar from "../Navbar/Navbar";
import Headroom from "react-headroom";

export default function ClientNavbar() {
  return (
    <Headroom>
      <Navbar />
    </Headroom>
  );
}
