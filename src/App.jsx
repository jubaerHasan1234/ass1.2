import { Fragment } from "react";
import Companies from "./Components/Companies/Companies";

import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Price from "./Components/Price/Price";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonial/Testimonial";
import Trial from "./Components/Trial/Trial";
import TrustedWorldwide from "./Components/TrustedWorldwide/TrustedWorldwide";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Companies />
      <Service />
      <TrustedWorldwide />
      <Testimonial />
      <Price />
      <Faq />
      <Trial />
      <Footer />
    </Fragment>
  );
}
