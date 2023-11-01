import React from "react";
import Header from "../../components/header/Header";
import Posts from "../posts/posts";
import SectionMain from "../../components/SectionMain/SectionMain";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <SectionMain/>
      <Posts />
    </React.Fragment>
  );
}
