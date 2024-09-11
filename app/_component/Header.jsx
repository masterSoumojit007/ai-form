"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const { user, isSignedIn } = useUser();
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    !path.includes("aiform") && (
      <div className="p-3 px-5 border-b shadow-md bg-white">
        <div className="flex items-center justify-between flex-wrap">
          <Link href="/">
            <Image src="/assets/icon.svg" width={160} height={40} alt="logo" className="object-contain" />
          </Link>
          <div className="flex items-center gap-3 md:gap-5">
            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button variant="outline" className="text-sm md:text-base hover:bg-gray-100">Dashboard</Button>
                </Link>
                <UserButton />
              </div>
            ) : (
              <SignInButton>
                <Button className="text-sm md:text-base hover:bg-blue-100">Get Started</Button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Header;
