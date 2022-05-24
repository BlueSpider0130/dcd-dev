import { useRouter } from "next/router";
import { useState } from "react";
import en from "../../locales/en";
import fr from "../../locales/fr";
import nl from "../../locales/nl";
import Button from "./Button";

function Contact() {
  const router = useRouter();
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null);
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = () => {
    fetch("/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        message: data.message,
      }),
    })
      .then((res) => {
        console.log("submit response ", res);
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        console.log("sdfsdfsdf ", data);
        setsuccess(data);
        seterror(null);
      })
      .catch((err) => {
        console.log(err);
        seterror(true);
        setsuccess(null);
      });
  };

  return (
    <div
      id="contact"
      key={`contact-form`}
      className={
        "  md:px-24  pt-1 pb-24  lg:px-52   sm:px-4 " + 
        "   cannavigate  flex  flex-wrap-reverse py-6   pt-24 justify-between	" +
        "flex-row-reverse  bg-cover bg-[url('/assets/Section2BG.svg')]"
      }
    >
      <div
        className="flex px-6 bg-white"
        style={{ maxWidth: "650px", minWidth: "300px" }}
      >
        <div className="pt-8">
          <div>
            <span className="uppercase text-sm text-gray-600  dark:text-gray-200  font-bold">
              {t.name} 
              <span className="text-red-500">&nbsp;&nbsp;&nbsp;  *</span>
            </span>
            <input
              value={data.name}
              onChange={(e) => {
                setdata((prev) => ({ ...prev, name: e.target.value }));
              }}
              className="w-full   dark:bg-slate-600 text-gray-900 dark:text-gray-300   mt-2 p-3 rounded-lg outline  outline-1 outline-gray-300 focus:outline-teal-200 dark:outline-teal-500 focus:shadow-outline"
              type="text"
              placeholder="John Jonny"
            ></input>
          </div>
          <div className="mt-4">
            <span className="uppercase text-sm text-gray-600   dark:text-gray-200  font-bold">
              {t.email}
              <span className="text-red-500">&nbsp;&nbsp;&nbsp;  *</span>
            </span>
            <input
              value={data.email}
              onChange={(e) => {
                setdata((prev) => ({ ...prev, email: e.target.value }));
              }}
              className="w-full   dark:bg-slate-600 text-gray-900 dark:text-gray-300   mt-2 p-3 rounded-lg outline  outline-1 outline-gray-300 focus:outline-teal-200 dark:outline-teal-500 focus:shadow-outline"
              type="text"
              placeholder="John@workemail.com"
            ></input>
          </div>
          <div className="mt-4">
            <span className="uppercase text-sm text-gray-600 dark:text-gray-200 font-bold">
              {t.message}
              <span className="text-red-500">&nbsp;&nbsp;&nbsp;  *</span>
            </span>
            <textarea
              value={data.message}
              placeholder="comments"
              onChange={(e) => {
                setdata((prev) => ({ ...prev, message: e.target.value }));
              }}
              className="w-full h-32  dark:bg-slate-600   text-gray-900   dark:text-gray-300 mt-2 p-3 rounded-lg outline  outline-1 outline-gray-300 focus:outline-teal-200 dark:outline-teal-500 focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mt-4">
            <div className="my-4 py-4">
              <Button
                onClick={handleSubmit}
                className={"btn_get_start w-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl rounded-br-none text-white"}
                text="SEND MESSAGE"
              ></Button>
            </div>

            {error && (
              <div className="border border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 my-4">
                <p>Something went wrong</p>
              </div>
            )}
            {success && (
              <div className="border border-teal-400 rounded-b bg-teal-100 px-4 py-3 text-teal-700 my-4">
                <p>{success.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="flex-1  my-6 px-6"
        style={{ maxWidth: "650px", minWidth: "300px" }}
      >
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight       text-transparent bg-clip-text bg-gradient-to-br from-teal-500  via-sky-500  to-fuchsia-500">
            {t.contact_us}!
          </h2>
          <div className="text-gray-700 mt-8   dark:text-gray-300">
            Send us an <span className="underline">email</span> instead.
          </div>
        </div>
        <div className="mt-8 text-center">
          <img src="assets/back3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
