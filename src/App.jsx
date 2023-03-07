import React from "react";

//components
import { OneFilterRegular } from "./components/OneFilterRegular";
import { TwoFilterExtraWithSameValue } from "./components/TwoFilterExtraWithSameValue";
import { ThreeCorrectWay } from "./components/ThreeCorrectWay";
// import Three from "./Three";

export default function App() {
  return (
    <>
      <h1>This is with 3 types of filter </h1>
      <OneFilterRegular />
      <TwoFilterExtraWithSameValue />
      <ThreeCorrectWay />
      {/* <Three /> */}
    </>
  );
}
