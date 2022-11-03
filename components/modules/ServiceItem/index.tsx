import React from 'react'
import Image from 'next/image'
import { Service } from '../../../type/type'



const ServiceItem = ( service:Service) => {
  return (
    <li className="service-item col-4 flex">
    <div className="service-icon">
      <Image src={service.src} alt={service.title} />
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
  )
}

export default ServiceItem