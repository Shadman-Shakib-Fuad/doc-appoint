"use client";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

export default function ScrollTopButton() {
  const [show, setShow] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 300
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 btn btn-primary rounded-full z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}