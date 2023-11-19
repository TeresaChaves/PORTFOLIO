import lottie from "lottie-web";
import React, { useEffect, createRef } from "react";
import animation from "../../assets/animations/39702-work-space.json";
import "./Lottie.css";

function LottieComp() {
  let animationContainer = createRef();
  lottie.loadAnimation({
    container: animationContainer.current, // current instance of our container!
    animationData: animation, // animation file!
    renderer: "svg",
    loop: true,
    autoplay: false,
    repeat: false,
  });
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
      repeat: false,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  return <div className="animation-container" ref={animationContainer} />;
}

export default LottieComp;
