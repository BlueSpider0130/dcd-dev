import { Fragment, useEffect, useState } from "react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import nl from "../../locales/nl";
import DarkThemeSwitch from "./DarkThemeSwitch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const router = useRouter();
  const [selectedRoute, setselectedRoute] = useState("");
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  useEffect(() => {
    setTimeout(() => {
      // simple function to use for callback in the intersection observer
      const changeNav = (entries, observer) => {
        entries.forEach((entry) => {
          // verify the element is intersecting
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            console.log("----------- scrolled to : ", entry.target.id);
            setselectedRoute(`#${entry.target.id}`);
          }
        });
      };

      // init the observer
      const options = {
        threshold: 0.55,
      };

      const observer = new IntersectionObserver(changeNav, options);

      // target the elements to be observed
      const sections = document.querySelectorAll(".cannavigate");
      sections.forEach((section) => {
        observer.observe(section);
      });
    }, 500);
  }, []);

  const navigation = [
    {
      name: t.why_us,
      href: "#section-why_us",
      current: selectedRoute.endsWith("#section-why_us"),
    },
    {
      name: t.solutions,
      href: "#section-solutions",
      current: selectedRoute.endsWith("#section-solutions"),
    },
    {
      name: t.projects,
      href: "#section-projects",
      current: selectedRoute.endsWith("#section-projects"),
    },
    {
      name: t.faqs,
      href: "#faq",
      current: selectedRoute.endsWith("#faq"),
    },
    {
      name: t.contact,
      href: "#contact",
      current: selectedRoute.endsWith("#contact"),
    },
  ];
  useEffect(() => {
    const onHashChangeStart = (url) => {
      setselectedRoute(url);
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
      router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, [router.events]);
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-md navbar navbar-expand-lg navbar-light lg:px-48 dark:bg-gray-900"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  dark:text-gray-200   text-gray-600 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center h-full  md:items-stretch md:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className=" logo block   h-8 w-auto"
                    src="/assets/logo.png"
                    alt="Workflow"
                  />
                  <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    DCD DEVELOPMENT
                  </span>
                </div>
                <div className="hidden md:block md:ml-6 ">
                  <div className="flex items-center space-x-4 h-full">
                    {navigation.map((item, index) => (
                      <div
                        className={classNames(
                          item.current && index !== 4
                            ? "border-b-4 border-sky-500 text-sky-500  hover:bg-gray-200 hover:text-gray-700"
                            : "",
                          "h-full flex  text-md font-medium items-center text-gray-500 dark:text-gray-200 dark:hover:text-gray-100"
                        )}
                      >
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              index === 4 ? "bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl rounded-br-none text-white" : "",
                              "px-3 py-2"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      </div>
                    ))}
                    <div className="hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                      <LanguageSelector
                        additional_classes={""}
                      ></LanguageSelector>
                    </div>
                    <DarkThemeSwitch />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* mobile responsive design */}
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3  space-y-1">
              {navigation.map((item) => (
                <Link href={item.href}>
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white dark:text-gray-200 dark:bg-gray-500"
                        : "text-gray-500 dark:text-gray-400 hover:bg-gray-200  dark:hover:bg-gray-300  ",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
              <div className="py-2 px-3">
                <span className="mr-8 text-gray-500  dark:text-gray-200">
                  {" "}
                  Language :
                </span>
                <LanguageSelector
                  additional_classes={"w-48 ml-auto inline-block mr-0 "}
                ></LanguageSelector>
              </div>
              <div className="py-2 px-3">
                <span className="mr-8 text-gray-500  dark:text-gray-200">
                  {" "}
                  Theme :
                </span>
                <DarkThemeSwitch
                  additional_classes={" inline-block mr-0 "}
                ></DarkThemeSwitch>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
