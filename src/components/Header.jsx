import React from "react";

const Header = () => {
  return (
    <div className="lg:w-[1140px] text-white flex items-center mx-auto">
      <h1 className="text-2xl font-bold w-[295px]">Kourse</h1>
      <div className="w-[550px]">
        <ul className="lg:flex items-center justify-between hidden">
          <li>Home</li>
          <li>Courses</li>
          <li>Post a Job</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-[295px] flex justify-end">
        <button className="border rounded-md bg-[#303b63] lg:py-[10px] lg:px-[25px] px-3 py-3">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
