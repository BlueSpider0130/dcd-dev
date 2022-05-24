import React from "react";
import Accordion from "./Accordion";

function Faq({ items, accordion_items }) {
  if (!items) items = [];
  return (
    <div className="  md:px-24 pt-1 pb-24  lg:px-52   sm:px-4 ">
      {items.map((item, index) => {
        console.log("=== item", item);
        return (
          <div
            id="faq"
            key={`faq-${index}`}
            className={
              "  cannavigate     py-6 my-6  pt-24	" +
              (index % 2 !== 0 ? "flex-row" : "")
            }
          >
            <h1
              className={
                index % 2 === 0
                  ? " flex-1  text-[#196480] font-semibold text-4xl sm:text-center md:text-center dark:text-gray-200"
                  : ""
              }
            >
              Frequently Asked Questions
            </h1>
            <div
              className="flex-1 m-auto my-6 px-6"
              style={{ maxWidth: "950px", minWidth: "300px" }}
            >
              <img
                style={{
                  display: "block",
                  width: "100%",
                }}
                src={item.img_url}
              />
            </div>
            <div
              className="flex-1 px-6 m-auto"
              style={{ maxWidth: "750px", minWidth: "300px" }}
            >
              <h1
                className={
                  index % 2 === 0
                    ? " flex-1  text-[#196480] font-semibold text-4xl sm:text-center md:text-left dark:text-gray-200"
                    : ""
                }
              >
                FAQ's
              </h1>
              <Accordion accordion_items={accordion_items}></Accordion>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
