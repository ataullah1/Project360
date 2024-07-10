import Banner from "@/Components/eachTheme/Banner";
import CardSection from "@/Components/eachTheme/CardSection";
import Promise from "@/Components/eachTheme/Promise";
import Sandbox from "@/Components/eachTheme/Sandbox";
import Stories from "@/Components/eachTheme/Stories";
import TabSection from "@/Components/eachTheme/TabSection";
import WebCard from "@/Components/eachTheme/WebCard";
// import useFetchQuery from "@/Hooks/shared/useFetch";

import React from "react";

const page = ({ params }) => {
  const id = params;
  // const { data, isLoading } = useFetchQuery(`/themes/${id}`);
  // const cards = data?.data || [];

  // console.log(cards);
  return (
    <div className="mt-12">
      <Banner></Banner>
      <CardSection></CardSection>
      {/* <WebCard></WebCard> */}
      <TabSection></TabSection>
      <Stories></Stories>
      <Promise></Promise>
      <Sandbox></Sandbox>
    </div>
  );
};

export default page;
