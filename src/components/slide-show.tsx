// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { motion } from "framer-motion";

import "@splidejs/react-splide/css";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";

const SlideShow = ({ images }: { images: string[] }) => {
  const [hovering, setHovering] = useState(false);
  const splideRef = useRef<any>(null); // Add ref

  const goPrev = () => {
    splideRef.current?.go("<");
  };

  const goNext = () => {
    splideRef.current?.go(">");
  };

  return (
    <Splide
      ref={splideRef} // Attach ref
      options={{
        autoplay: true,
        perPage: 1,
        start: 0,
        rewind: true,
        padding: { left: '3rem', right: '3rem' },
        gap: "1rem",
        pagination: false, // Explicitly disable pagination if not wanted, user didn't complain about dots.
        arrows: false, // Disable default arrows since we are making custom ones.
        interval: 2500,
      }}
      hasTrack={false}
    >
      <SplideTrack>
        {images.map((image, idx) => (
          <SplideSlide key={idx} className="flex items-center">
            <Dialog>
              <DialogTrigger
                className="relative"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <Image
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full rounded-lg h-auto"
                />
                <AnimatePresence>
                  {hovering && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 text-white backdrop-blur-[1px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Click to zoom
                    </motion.div>
                  )}
                </AnimatePresence>
              </DialogTrigger>
              <DialogContent className="min-w-[90vw] h-[90vh] bg-transparent outline-none border-none p-0 m-0">
                <DialogHeader className="w-full">
                  {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                  <DialogDescription>
                    {image.split("/").pop()}
                  </DialogDescription>
                </DialogHeader>
                <Image
                  src={image}
                  alt="screenshot"
                  width={1000}
                  height={1000}
                  className="w-full"
                  style={{ objectFit: "contain", width: "100vw" }}
                />
              </DialogContent>
            </Dialog>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="custom-arrows absolute top-1/2 left-0 w-full flex justify-between px-4 -translate-y-1/2 pointer-events-none z-50">
        <button
          className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 flex items-center justify-center transform hover:scale-110 active:scale-95"
          type="button"
          aria-label="Previous slide"
          onClick={goPrev} // Manual click handler
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="24"
            height="24"
            focusable="false"
            className="fill-current w-6 h-6 rotate-180" // Rotate for Prev arrow (pointing left)
          >
            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
          </svg>
        </button>
        <button
          className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 flex items-center justify-center transform hover:scale-110 active:scale-95"
          type="button"
          aria-label="Next slide"
          onClick={goNext} // Manual click handler
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width="24"
            height="24"
            focusable="false"
            className="fill-current w-6 h-6"
          >
            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z" />
          </svg>
        </button>
      </div>
      <div className="splide__progress">
        <div className="splide__progress__bar"></div>
      </div>
    </Splide>
  );
};
export default SlideShow;
