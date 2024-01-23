import React from "react";

const MapComponent = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2921422585723!2d80.89846027165456!3d27.708264872833322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998d6a8bc68e85b%3A0x24ab138c5d0d678f!2sPW53%2B868%20Shahar%20Bazar%2C%20Markaz%20Masjid%2C%20Laharpur%2C%20Uttar%20Pradesh%20261135!5e0!3m2!1sen!2sin!4v1705735706404!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: "none", outline: "none !important" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default MapComponent;
