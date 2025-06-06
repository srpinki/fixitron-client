import React from "react";
import loading from "../../src/assets/lottie/loading.json";
import Lottie from "lottie-react";
const Loading = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto min-h-screen flex justify-center items-center">
        {/* <span className="loading loading-spinner loading-xl"></span> */}
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
