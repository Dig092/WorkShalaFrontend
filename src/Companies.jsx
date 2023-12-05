import React, { useState, useEffect, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import star from "./assets/icons/star.png";

const Companies = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [locationFilter, setLocationFilter] = useState(null);
  const [industryFilter, setIndustryFilter] = useState(null);
  const [companyTypeFilter, setCompanyTypeFilter] = useState(null);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    fetch("https://workshala-7v7q.onrender.com/companyData", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data.companies);
        setFilteredPosts(data.companies);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const applyFilters = () => {
    let tempFilteredPosts = [...allPosts];

    if (locationFilter) {
      tempFilteredPosts = tempFilteredPosts.filter(
        (post) => post.location === locationFilter
      );
    }

    if (industryFilter) {
      tempFilteredPosts = tempFilteredPosts.filter(
        (post) => post.industry === industryFilter
      );
    }

    if (companyTypeFilter) {
      tempFilteredPosts = tempFilteredPosts.filter(
        (post) => post.companyType === companyTypeFilter
      );
    }

    setFilteredPosts(tempFilteredPosts);
  };

  useEffect(() => {
    applyFilters();
  }, [locationFilter, industryFilter, companyTypeFilter]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <NavBar />

      <div className="w-full h-20 flex items-center bg-[#FFF6F9]">
        <h1 className="font-semibold ml-12 text-2xl ">
          Featured Companies Actively Hiring
        </h1>
      </div>

      <div className="flex flex-col md:flex-row mx-4 md:mx-8 py-12 justify-around">
        <Menu as="div" className="w-full md:w-1/4 text-left mt-4 md:mt-0">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {locationFilter || "Location"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="flex m-2 z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setLocationFilter("Delhi")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Delhi/NCR
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setLocationFilter("Banglore")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Banglore
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setLocationFilter("Mumbai")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Mumbai
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="w-full md:w-1/4 text-left mt-4 md:mt-0">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {industryFilter || "Industry"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="flex m-2 z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setIndustryFilter("IT Services & Consulting")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      IT Services & Consulting
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setIndustryFilter("Software Product")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Software Product
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setIndustryFilter("Ed Tech")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Ed Tech
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Menu as="div" className="w-full md:w-1/4 text-left mt-4 md:mt-0">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              {companyTypeFilter || "Company Type"}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="flex m-2 z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCompanyTypeFilter("Foreign MNC")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Foreign MNC
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCompanyTypeFilter("Corporate")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Corporate
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => setCompanyTypeFilter("Indian MNC")}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm w-full text-left"
                      )}
                    >
                      Indian MNC
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="flex justify-center items-center w-full bg-[#FFF6F9]">
        <div className="w-3/4 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:mt-16 mb-16 mr-16 ">
          {filteredPosts.map((post) => (
            <div className="flex flex-col items-center snap-start border-4 rounded-md flex-shrink-0 w-64 h-80 mx-4">
              <div className="flex items-center justify-center w-full h-20">
                <img
                  className="w-12 m-3 rounded-full"
                  src={post.img}
                  alt="Company Icon"
                />
              </div>
              <div className="flex flex-col items-center bg-[#FFE5ED] p-2 rounded-md m-3">
                <h1 className="text-xs font-bold mb-1">{post.title}</h1>
                <div className="flex items-center justify-center">
                  <img className="w-4" src={star} alt="" />
                  <h1 className="text-sm">3.3</h1>
                  <div className="w-px mx-2 h-4 bg-[#00000060]"></div>
                  <h1 className="text-sm">1k Reviews</h1>
                </div>
              </div>
              <h1 className="text-2xl font-bold m-1">{post.title}</h1>
              <div className="w-full h-12 overflow-hidden">
                <h1 className="text-xs text-center px-9 ">{post.about}</h1>
              </div>
              <button className=" px-8 py-2 m-8 text-xs text-white rounded bg-[#946CC3] hover:cursor-pointer hover:border hover:border-[#946CC3] hover:bg-white hover:text-black active:bg-inherit">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Companies;
