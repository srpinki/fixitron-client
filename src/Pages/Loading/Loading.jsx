import React from "react";
import loading from "../../assets/lottie/loading.json";

import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div>
      <div className="w-6/12 mx-auto min-h-screen flex justify-center items-center text-accent">
        <Lottie
          animationData={loading}
          loop={true}
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default Loading;
