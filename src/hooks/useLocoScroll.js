import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

//Locomotive styles
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.getElementById("main-container");
    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });

    return () => {
      if (locoScroll) {
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, [start]);
}
