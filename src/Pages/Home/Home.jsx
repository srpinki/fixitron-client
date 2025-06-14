import React, { Suspense } from "react";
import Hero from "./Hero";
import Trusted from "./Trusted";
import HowItWorks from "./HowItWorks ";
import WhyChooseFixitron from "./WhyChooseFixitron";
import Review from "./Reviews";
import PopularServices from "./PopularServices";
import Loading from "../Loading/Loading";
import DocumentTitle from "../Shared/DocumentTitle";

const servicesPromise = fetch("http://localhost:3000/services").then((res) =>
  res.json()
);

const Home = () => {
  DocumentTitle("Fixitron | Find & Book Trusted Services")
  return (
    <div>
      <Hero></Hero>
      <Suspense fallback={<Loading />}>
        <PopularServices servicesPromise={servicesPromise}></PopularServices>
      </Suspense>
      <Trusted></Trusted>
      <HowItWorks></HowItWorks>
      <WhyChooseFixitron></WhyChooseFixitron>
      <Review></Review>
    </div>
  );
};

export default Home;
