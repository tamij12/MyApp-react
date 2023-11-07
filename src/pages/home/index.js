import React from "react";
import NavBar from "../../components/NavBar/NavBar"
import Posts from "../posts/posts";
import SectionMain from "../../components/SectionMain/SectionMain";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <SectionMain/>
      <Posts />
    </React.Fragment>
  );
}
