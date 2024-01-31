import lottie from "lottie-web";
import React, { useEffect, createRef } from "react";
import animation from "../../assets/animations/4.json";
import "./Lottie.css";

function LottieComp() {
  let animationContainer = createRef();
  lottie.loadAnimation({
    container: animationContainer.current, // current instance of our container!
    animationData: animation, // animation file!
    renderer: "svg",
    loop: true,
    autoplay: true,
    repeat: false,
  });
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animation,
      repeat: false,
    });
    return () => anim.destroy(); // optional clean up for unmounting
  }, []);
  return (
    <div
      className="animation-container lottie-filter "
      ref={animationContainer}
    />
  );
}

export default LottieComp;
