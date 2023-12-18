// components/ServiceDetail.tsx

import { Service } from "../../data/data";
import "./styles.css";

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="service-detail">
      <img src={service.image} alt={service.title} className="service-image" />
      <div className="service-info">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-price">Price: {service.price}</p>
      </div>
      <p className="service-description">{service.description}</p>
    </div>
  );
}
