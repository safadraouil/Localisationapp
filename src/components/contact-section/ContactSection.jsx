import React from "react";

import Form from "./Form";
import Info from "./Info";
import Map from "../map/Map";

import "./contact-section.css";

const ContactSection = () => (
  <>
    <div className="contact-section">
      <Form />
      <Info />
      <Map />
    </div>
  </>
);

export default ContactSection;
