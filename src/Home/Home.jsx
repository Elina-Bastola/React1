import React from "react";
import News from "../Data/News";

function Home() {
  return (
    <>
      <News cat="Business" />
      <News cat="entertainment" />
      <News cat="general" />
      <News cat="health" />
      <News cat="science" />
    </>
  );
}

export default Home;
