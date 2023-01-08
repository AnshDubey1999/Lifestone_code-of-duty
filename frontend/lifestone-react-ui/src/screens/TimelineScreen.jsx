import React from "react";
import { useSelector } from "react-redux";
import Timeline from "../components/TimelineComponent";
const TimelineScreen = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log("isAuth", isAuth);
  return (
    <div>
      <div className="ms-5">
        <h2 className="text-white ">Timeline screen</h2>
      </div>{" "}
      <Timeline />
    </div>
  );
};

export default TimelineScreen;
