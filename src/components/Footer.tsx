import React from "react";
import { Footer } from "flowbite-react";
const FooterComponent = () => {
  return (
    <Footer container={true} className="mb-4">
      <Footer.Copyright href="#" by="Online Exam System™" year={2023} />
    </Footer>
  );
};

export default FooterComponent;
