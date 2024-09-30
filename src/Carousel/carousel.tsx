import React, { useEffect, useRef, useState } from "react";
import { BooksData } from "./output";
import "./carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface Data {
  data: BooksData[];
}
function Carousel({ data }: Data) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div className="carousel-container">
      {showLeftArrow && (
        <button className="but" onClick={scrollLeft}>
          <BsArrowLeftCircleFill />
        </button>
      )}
      <div className="carousel-main" ref={scrollRef}>
        {data.map((item, index) => (
          <div className="carousel-item" key={index}>
            <a href={item.link}>
              <img src={item.coverImage} alt={item.title} className="slide" />
            </a>
            <div className="item-name">
              <a href={item.link}>{item.title}</a>
            </div>
          </div>
        ))}
      </div>
      {showRightArrow && (
        <button className="but2" onClick={scrollRight}>
          <BsArrowRightCircleFill />
        </button>
      )}
    </div>
  );
}
export default Carousel;
