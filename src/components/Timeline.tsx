import React, { createContext } from 'react';
import { Chrono } from "react-chrono";

const items = [
  {
    title: "May 2010 - March 2011",
    cardTitle: "Data Entry Technician",
    cardSubtitle: "",
    cardDetailedText: "Worked together with staff to accommodate customers, scanned documents, reviewed and updated client correspondence files, and evaluated source documents.",
  },
  {
    title: "July 2012 - March 2014",
    cardTitle: "Front Desk Receptionist",
    cardSubtitle: "",
    cardDetailedText: "Worked with staff to accommodate customers, answered multi-line phone system, maintained files and records, reported facility maintenance problems, and maintained transaction security.",
  },
  {
    title: "April 2014 - May 2015",
    cardTitle: "Service Contractor at AT&T",
    cardSubtitle: "",
    cardDetailedText: "Worked with a team to diagnose Wi-Fi constraints at Texas A&M Campus, ran latency tests, located network stress points, and applied commercial network repeaters.",
  },
  {
    title: "September 2015 - May 2016",
    cardTitle: "Pharmacy Technician at CVS",
    cardSubtitle: "",
    cardDetailedText: "Worked with a team to ensure patients received and were knowledgeable about their medication, counted and measured medications, resolved non-routine issues, and answered incoming calls.",
  },
  {
    title: "August 2018 - January 2020",
    cardTitle: "Computer Science Student at Midwestern State University",
    cardSubtitle: "",
    cardDetailedText: "Studied various computer science subjects including Data Structures, Computer Architecture, Object-Oriented Programming, and more.",
  },
  {
    title: "January 2020 - Present",
    cardTitle: "Computer Science Student at University of North Texas",
    cardSubtitle: "",
    cardDetailedText: "Continued studying computer science with subjects like Basic SQL and Java Introduction.",
  },
  {
    title: "November 2021 - February 2022",
    cardTitle: "Full Stack Web Development at Southern Methodist University",
    cardSubtitle: "",
    cardDetailedText: "Certified in Full Stack Web Development, learned Front-end and Back-End Web Development, and Mern Stack.",
  },
  {
    title: "November 2022 - October 2022",
    cardTitle: "Web Developer at Momenta Tech",
    cardSubtitle: "Houston, TX",
    cardDetailedText: "Diagnosed and addressed website server-related issues. Created an SMTP server to fulfill the website's email needs, replaced Mailchimp with ConvertKit, and worked on SEO optimization by generating meta tags for all managed websites."
  },
  {
    title: "November 2022 - May 2023",
    cardTitle: "Technology Manager",
    cardSubtitle: "ETHOS Brand - Dallas, TX",
    cardDetailedText: "Coded websites using HTML, CSS, JavaScript and jQuery languages. Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX and JSON coding. Provided front-end website development using WordPress and other editing software. Oversaw back-end development using PHP to maintain website integrity, security and efficiency."
  },
];

const VerticalAlternatingTimeline = () => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      itemWidth={150}
      enableOutline
    />
  );
};

export default VerticalAlternatingTimeline;
