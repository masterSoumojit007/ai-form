"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CreateForm from "./CreateForm";

// Drawer component for smaller screens
function Drawer({ isOpen, onClose, onSelect }) {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } md:hidden z-50`}
    >
      <button
        className="absolute top-4 right-4 p-2 bg-purple-600 text-white rounded-full"
        onClick={onClose}
      >
        <span className="sr-only">Close Menu</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="pt-16 flex flex-col items-center justify-start h-full">
        <div className="w-full max-w-xs px-4">
          {menuList.map((menu) => (
            <Link
              href={menu.path}
              key={menu.id}
              className={`flex items-center gap-4 p-4 mb-2 bg-gray-100 hover:bg-purple-100 rounded-lg cursor-pointer text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out ${
                window.location.pathname === menu.path
                  ? "bg-purple-100 text-purple-600"
                  : ""
              }`}
              onClick={() => {
                onSelect(); // Call onSelect when an option is clicked
              }}
            >
              <menu.icon className="w-6 h-6 text-gray-500" />
              <span className="text-lg font-medium">{menu.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];

  const { user } = useUser();
  const path = usePathname();
  const [formList, setFormList] = useState([]);
  const [percFileCreated, setPercFileCreated] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    user && GetFormList();
  }, [user]);

  const GetFormList = async () => {
    const result = await db
      .select()
      .from(JsonForms)
      .where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(JsonForms.id));

    setFormList(result);

    const perc = (result.length / 3) * 100;
    setPercFileCreated(perc);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-64 h-screen shadow-md border">
        <div className="flex items-center justify-between p-4">
        <Link href="/">
        <Image
          src="/assets/icon.svg" // Use an absolute path relative to the public folder
          width={60} // Set a smaller width
          height={32} // Adjust the height accordingly
          alt="logo"
          className="w-auto h-auto"
        />
      </Link>
        </div>
        <div className="p-5">
          {menuList.map((menu, index) => (
            <Link
              href={menu.path}
              key={index}
              className={`flex items-center gap-3 p-4 mb-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer text-gray-500 ${
                path === menu.path ? "bg-primary text-white" : ""
              }`}
            >
              <menu.icon />
              {menu.name}
            </Link>
          ))}
        </div>
        <div className="fixed bottom-7 p-6 w-64">
          <div className="flex items-center justify-center mb-8">
            <CreateForm className="ml-auto" />{" "}
            {/* Apply ml-auto to push button to the right */}
          </div>
          <div className="my-7">
            <Progress value={percFileCreated} />
            <h2 className="text-sm mt-2 text-gray-600">
              <strong>{formList?.length} </strong>Out of <strong>3</strong> File
              Created
            </h2>
            <h2 className="text-sm mt-3 text-gray-600">
              Upgrade your plan for unlimited access to AI-powered Terraform.
            </h2>
          </div>
        </div>
      </div>

      {/* Drawer for smaller screens */}
      <button
        className="md:hidden fixed top-4 right-4 p-2 bg-purple-600 text-white rounded-full z-50"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <span className="sr-only">Toggle Menu</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
        onSelect={handleDrawerClose} // Pass handleDrawerClose to onSelect
      />
    </>
  );
}

export default SideNav;
