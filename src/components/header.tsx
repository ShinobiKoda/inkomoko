"use client";

import { Input } from "@/components/ui/input";
import { Search, Mic, Bell } from "lucide-react";
// import Image from "next/image";

export function Header() {
  return (
    <div className="w-full bg-gray-200 py-2">
      <div className="flex items-center justify-end w-full gap-6">
        <div className="bg-white rounded-3xl hidden md:flex items-center px-2">
          <Search className="text-gray-300 h-6 w-6" />
          <Input
            type="text"
            placeholder="Search..."
            className=" border-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-transparent"
          />
          <Mic className="text-blue-300 h-6 w-6" />
        </div>
        <Bell className="text-[#616161]"/>
        <div className="flex items-center gap-2">
          <p className="flex flex-col">
            <span>Bonte</span>
            <span className="text-[#757575]">UI/UX Designer</span>
          </p>
          {/* <Image
            src="/images/bonte.jpg"
            alt="Bonte"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
        </div>
      </div>
    </div>
  );
}
