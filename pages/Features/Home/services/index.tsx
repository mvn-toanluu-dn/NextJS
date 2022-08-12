import React from "react";
import Image from "next/image";
import { Images } from "../../../../assets/images/index";
function Services() {
  const services = [
    {
      src: Images.apple,
      title: "Online Courses",
      content:
        "Choose from hundreds of free training courses, or pay to get certified to complete a course or specialization.",
      more: Images.more,
    },
    {
      src: Images.lamp,
      title: "Our Mission",
      content:
        "Developing strong vision and mission statements can help stakeholders in your school reach such a common understanding.",
      more: Images.more,
    },
    {
        src: Images.solar,
        title: "Professional Certificate",
        content:
          "Join the millions of students around the world who are already learning! Find an experienced and suitable instructor only for you..",
        more: Images.more,
      },
  ];
  return (
    <div className="section-service">
      <div className="container">
        <h6 className="section-sub-title">What We Do</h6>
        <h2 className="section-title">Unlimited Possibilities</h2>
        <ul className="service-list flex">
            {services.map((service, index) => (
          <li className="service-item col-4 flex" key={`service-item-${index}`}>
            <div className="service-icon">
              <Image src={service.src} alt="" />
            </div>
            <div className="service-info">
              <a className="service-title">{service.title}</a>
              <p className="service-content">
                {service.content}
              </p>
            </div>
            <a className="service-more-button">
              <Image src={service.more} alt="" />
            </a>
          </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
