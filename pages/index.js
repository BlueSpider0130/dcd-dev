import { useRouter } from "next/router";
import React, { useState } from "react";
import Content from "../components/Content";
import Accordion from "../components/statics/Accordion";
import Button from "../components/statics/Button";
import Contact from "../components/statics/Contact";
import Faq from "../components/statics/Faq";
import Navbar from "../components/statics/Navbar";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";

function Home() {
  const router = useRouter();
  const [selectedRoute, setselectedRoute] = useState("");
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  return (
    <div>
      <div className="">
        <Content items={t.items}></Content>
        <Faq
          items={[{ img_url: "assets/back4.png" }]}
          accordion_items={t.accordion_items}
        ></Faq>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default Home;
