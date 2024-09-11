"use client";
import { SignIn, SignedIn } from "@clerk/clerk-react";
import React from "react";
import SideNav from "./_component/SideNav";

function DashboardLayout({ children }) {
  return (
    <SignedIn>
      <div className="relative h-screen">
        {/* SideNav with higher z-index to overlay the forms */}
        <div className="md:w-64 fixed top-0 left-0 h-full z-40 bg-white shadow-lg">
          <SideNav />
        </div>
        {/* Main content area with margin to prevent overlap */}
        <div className="md:ml-64 p-4 relative z-10">
          {children}
        </div>
      </div>
    </SignedIn>
  );
}

export default DashboardLayout;
