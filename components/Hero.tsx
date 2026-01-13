"use client"; 

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton"; // path is correct now as per your screenshot
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* ... rest of your code ... */}
      <a href="#projects">
        <MagicButton
          title="Show my work"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};

export default Hero;