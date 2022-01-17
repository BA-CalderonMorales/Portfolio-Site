import React, { useState, useEffect } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState("");

  const handleClick = (event) => {
    setIsOpen(!isOpen);
  };

  const handleMainClick = (event) => {
    setIsOpen(false);
  };

  const handleScroll = (event) => {
    if (event != target) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setTarget(window.onwheel);
    console.log(target);
  }, []);

  return (
    <Container>
      <Header isOpen={isOpen} handleClick={handleClick} />
      <main
        onWheel={(e) => handleScroll(e)}
        draggable={false}
        onClick={handleMainClick}
      >
        {children}
      </main>
      <Footer />
    </Container>
  );
};
