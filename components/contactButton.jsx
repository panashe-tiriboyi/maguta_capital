import React, { Children } from "react";

const ContactButton = ({ children }) => {
  return (
    <>
      <a href="#contact_us">{children}</a>
    </>
  );
};

export default ContactButton;
