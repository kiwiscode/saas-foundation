import { useState, useEffect } from "react";

interface WindowDimensions {
  width: number | false;
  height: number | false;
  scrollX: number;
  scrollY: number;
}

const useWindowDimension = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: typeof window !== "undefined" ? window.innerWidth : false,
    height: typeof window !== "undefined" ? window.innerHeight : false,
    scrollX: typeof window !== "undefined" ? window.scrollX : 0,
    scrollY: typeof window !== "undefined" ? window.scrollY : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions((prevState) => ({
        ...prevState,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };

    const handleScroll = () => {
      requestAnimationFrame(() => {
        setWindowDimensions((prevState) => ({
          ...prevState,
          scrollX: window.scrollX,
          scrollY: window.scrollY,
        }));
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return windowDimensions;
};

export default useWindowDimension;
