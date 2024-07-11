import React from "react";
import Banner from "./Banner";
import DemoStore from "../demoStore/DemoStore";
import TabSection from "./TabSection";
import Stories from "./Stories";
import CardSection from "./CardSection";
import Promise from "./Promise";
import Sandbox from "./Sandbox";

const SingleThemepage = () => {
  console.log(id);
  return (
    <div>
      <Banner></Banner>
      <DemoStore></DemoStore>
      {/* <WebCard></WebCard> */}
      <TabSection></TabSection>
      <Stories></Stories>
      <Promise></Promise>
      <CardSection></CardSection>
      <Sandbox></Sandbox>
    </div>
  );
};

export default SingleThemepage;
