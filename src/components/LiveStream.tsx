import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Hls from "hls.js";

interface LiveStreamProps {
  link: string;
}

export default function LiveStream({ link }: LiveStreamProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(link);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = link;
        video.addEventListener("loadedmetadata", () => {
          video.play();
        });
      }
    }
  }, [link]);

  return (
    <Container className="my-4">
      <div className="ratio ratio-16x9">
        <video ref={videoRef} controls className="w-100" />
      </div>
    </Container>
  );
}
