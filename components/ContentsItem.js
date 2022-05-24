import { useRouter } from "next/router";
import { useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";
import Button from "./statics/Button";

function ContentsItem({ item, index }) {
  const router = useRouter();
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  const [isOpen, setisOpen] = useState(false);
  const handleToggle = (item) => {
    setisOpen((prev) => !prev);
    setTimeout(() => {
      let selectedView = document.getElementById(
        `longdescription-${item.name}`
      );
      selectedView.scrollIntoView({
        behavior: "smooth",
        block:
          selectedView.offsetHeight > window.innerHeight ? "start" : "center",
      });
    }, 300);
  };
  // console.log("==========================item item", item, index);
  return (
    <div
      id={`section-${item.name}`}
      key={`section-${index}`}
      className={
        " cannavigate flex  flex-wrap py-6 my-6 lg:px-52 md:py-6 md:my-6 pt-8  md:pt-24  justify-between	" +
        (index % 2 === 0
          ? "flex-row"
          : "flex-row-reverse bg-cover bg-[url('/assets/Section2BG.svg')]")
      }
    >
      <div
        className="flex-1 px-6 "
        style={{ maxWidth: "650px", minWidth: "300px" }}
      >
        <h1
          className={
            index % 2 === 0
              ? "text-[#196480] font-semibold text-4xl my-6 sm:text-center md:text-left dark:text-gray-200"
              : "text-white font-semibold text-4xl my-6 sm:text-center md:text-left dark:text-gray-200"
          }
        >
          {item.title}123
        </h1>
        <p
          className={
            index % 2 === 0
              ? "text-lg font-extralight text-justify my-8	tracking-wide text-gray-600 dark:text-gray-300"
              : "text-lg font-extralight text-justify my-8	tracking-wide text-white dark:text-gray-300"
          }
        >
          {item.description}
        </p>
        {item.long_description && (
          <div className="my-4 py-4 ">
            <Button
              onClick={() => handleToggle(item)}
              className={
                index % 2 === 0
                  ? index === 0
                    ? "border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] w-full md:w-fit"
                    : "border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2]"
                  : "border-2 rounded-2xl rounded-br-none"
              }
              text={isOpen ? t.read_less : t.read_more}
            ></Button>
          </div>
        )}
      </div>
      <div
        className="flex-1  my-6 px-6"
        style={{ maxWidth: "650px", minWidth: "300px" }}
      >
        <img
          style={{
            display: "block",
            width: "100%",
          }}
          src={item.img_url}
        />
      </div>
      {item.long_description && (
        <div
          id={`longdescription-${item.name}`}
          className={`	px-6	py-12   ${isOpen ? "" : "hidden"}`}
        >
          <h2 className="  text-3xl my-6  sm:text-center 	md:text-left dark:text-gray-200	 ">
            {item.long_description.title}
          </h2>
          <p className="text-lg font-extralight  text-justify tracking-wide text-gray-600 dark:text-gray-300">
            {item.long_description.content}
          </p>
        </div>
      )}
    </div>
  );
}

export default ContentsItem;
