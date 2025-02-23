import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="  m-auto py-[10%] h-screen  flex items-center justify-center ">
      <DotLottieReact
        className="w-[50%]"
        src="https://lottie.host/d7498f31-7e5b-4d69-b3b6-fccf02c33555/UNKuxK75q4.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default Loading;
