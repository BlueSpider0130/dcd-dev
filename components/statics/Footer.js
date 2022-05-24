import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="bg-[#1D1D22] h-1/2 w-full flex  md:flex-row flex-col justify-around items-start p-20 dark:bg-slate-800">
        <div className="p-5 ">
          <p className="flex text-gray-800  dark:text-gray-300  font-bold text-3xl">
            <img
              className="block  mx-auto   h-8 w-auto"
              src="/assets/logo.png"
              alt="Workflow"
            />
            <span className="pl-2 font-bold   text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              DCD DEVELOPMENT
            </span>
          </p>
          {/* <div className="flex gap-6 pb-5 justify-center">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600    dark:hover:text-yellow-600  dark:text-gray-300" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600   dark:hover:text-blue-600     dark:text-gray-300" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600   dark:hover:text-blue-600    dark:text-gray-300" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600  dark:hover:text-red-600  dark:text-gray-300" />
          </div> */}
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white  dark:text-gray-200 font-bold text-2xl pb-4">
              Company
            </p>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-gray-500   dark:text-gray-300  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-gray-500   dark:text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-gray-500   dark:text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white font-bold   dark:text-gray-200  text-2xl pb-4">
              Contact us
            </p>
            <li className="text-gray-500   dark:text-gray-300  text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-gray-500   dark:text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-gray-500    dark:text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-white  dark:text-gray-200    font-bold text-2xl pb-4">
              Support
            </p>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-gray-500  dark:text-gray-300    text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-gray-500  dark:text-gray-300   text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
        <div className="p-5">
          <p className="text-white  dark:text-gray-200    font-medium text-2xl pb-4">
            Connect with us
          </p>
          <div className="flex gap-6 pb-5 justify-center">
            <FaLinkedin className="text-2xl text-slate-200 cursor-pointer hover:text-blue-600   dark:hover:text-blue-600    dark:text-gray-300" />
            <FaTwitter className="text-2xl text-slate-200 cursor-pointer hover:text-blue-600   dark:hover:text-blue-600     dark:text-gray-300" />
            <FaInstagram className="text-2xl text-slate-200 cursor-pointer hover:text-yellow-600    dark:hover:text-yellow-600  dark:text-gray-300" />
            <FaYoutube className="text-2xl text-slate-200 cursor-pointer hover:text-red-600  dark:hover:text-red-600  dark:text-gray-300" />
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D22] flex flex-col justify-center items-center text-center   p-5 bg-gray-50     dark:bg-slate-900 ">
        <h1 className=" text-gray-500 dark:text-gray-200 font-semibold">
          © 2021-2022 All rights reserved |
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            {"  "} DCD DEVELOPMENT
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
