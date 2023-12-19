// pages/services.tsx
import { useState, useEffect, useRef } from "react";
import { Service } from "../data/data";
import servicesData from "../data/data";
import ServiceDetail from "../components/ServiceDetail";
import './services.css'

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="services">
      <h2 className="services-title">Services</h2>
      <span className="services-subtitle">What I Do</span>
      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} onClick={() => handleServiceClick(service)} className="service-lists">
            <p>{service.id.toString().padStart(2, "0")}</p>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">
              {service.description.split(" ").slice(0, 20).join(" ")}...
              <br />
              <span
                className="read-more"
                onClick={() => handleServiceClick(service)}
              >
                Read More
              </span>
            </p>
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="modal" ref={modalRef}>
          <button className="modal-close-button" onClick={handleCloseModal}>
            X
          </button>
          <ServiceDetail service={selectedService} />
        </div>
      )}
    </div>
  );
}
