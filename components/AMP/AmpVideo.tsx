import React from "react";
import { useAmp } from "next/amp";

interface VideoProps {
  // width: string;
  // height: string;
}

const Video = (): React.ReactElement => {
  const isAmp = useAmp();
  return isAmp ? (
    <>
      <amp-video
        layout="flex-item"
        width="1000"
        height="1000"
        controls=""
        loop=""
        autoPlay=""
        muted=""
        rotate-to-fullscreen=""
        // poster="/static/inline-examples/images/kitten-playing.png"
      >
        <source src="/videos/Teaser.mp4" type="video/mp4" />
      </amp-video>
      <style jsx global>{`

      `}</style>
    </>
  ) : (
    <video playsInline autoPlay loop muted>
      <source src="/videos/Teaser.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
