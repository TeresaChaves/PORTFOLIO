import lottie from "lottie-web";
import React, { useEffect, createRef } from "react";
import animation from "../../assets/animations/PausePlay.json";
import "./Lottie.css";

function LottieComp() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation,
    });

    const handleComplete = () => {
      setTimeout(() => {
        anim.goToAndPlay(0, true);
      }, 5000); // pausa de 1 segundo
    };

    anim.addEventListener("complete", handleComplete);

    return () => {
      anim.removeEventListener("complete", handleComplete);
      anim.destroy();
    };
  }, []);

  return (
    <div
      className="animation-container lottie-filter"
      ref={animationContainer}
    />
  );
}

export default LottieComp;
