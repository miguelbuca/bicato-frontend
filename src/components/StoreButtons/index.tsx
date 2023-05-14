import Link from "next/link";
import React from "react";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const StoreButtons = () => {
  return (
    <div className="flex flex-row gap-5">
      <Link href={"/"}>
        <button className="flex flex-row items-center border border-primary text-primary p-[.7rem_1.7rem] rounded-[100px]">
          <span className="mr-1">
            <GrAppleAppStore size={25} />
          </span>
          <span className="flex flex-row">
            AppStore{" "}
            <span className="lg:flex xs:hidden ss:hidden">( iOS )</span>
          </span>
        </button>
      </Link>
      <Link href={"/"}>
        <button className="flex flex-row items-center border border-tertiary text-tertiary p-[.7rem_1.7rem] rounded-[100px]">
          <span className="mr-1">
            <IoLogoGooglePlaystore size={25} />
          </span>
          <span className="flex flex-row">
            PlayStore{" "}
            <span className="lg:flex xs:hidden ss:hidden">( Android )</span>
          </span>
        </button>
      </Link>
    </div>
  );
};

export default StoreButtons;
