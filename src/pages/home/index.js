import React from "react";
import Posts from "../posts/posts";
import SectionMain from "../../components/SectionMain/SectionMain";

export default function Home() {
  return (
    <React.Fragment>
      <SectionMain/>
      <Posts />
    </React.Fragment>
  );
}
