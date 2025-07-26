import React from "react";
import Image from "next/image";
// images
import location_3 from "@/assets/img/inner-contact/contact/info-3.jpg";

// data
const location_data = [
  {
    id: 3,
    img: location_3,
    country: "Canada",
    time: "5:00 pm EST",
    location_title: "The-X-Media",
    address: "100 Matheson blvd, Mississauga, Ontario CA",
    phone: "+1 437 263 5601",
    email: "contact@thexmedia.com",
  },
];

const ContactLocation = () => {
  return (
    <div className="cn-contact-info-area">
      <div className="container container-1840">
        <div className="cn-contact-info-bg black-bg">
          {location_data.map((item) => (
            <div key={item.id} className="cn-contact-info-item">
              <div className="row">
                <div className="col-xl-7">
                  <div className="cn-contact-left d-flex flex-wrap align-items-center">
                    <div className="cn-contact-info-thumb">
                      <Image src={item.img} alt="image" style={{ height: "auto" }} />
                    </div>
                    <div className="cn-contact-left-info">
                      <h4 className="cn-contact-left-title">{item.country}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i>
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="cn-contact-right-wrap d-flex align-items-start justify-content-between">
                    <div className="cn-contact-right">
                      <div className="cn-contact-location">
                        <span className="cn-contact-location-title">
                          {item.location_title}
                        </span>
                        <a
                          href="https://www.google.com/maps"
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.address }}
                        ></a>
                      </div>
                      <div className="cn-contact-map">
                        <a href="#">Google Maps</a>
                      </div>
                    </div>
                    <div className="cn-contact-right-info text-start text-md-end">
                      <a href="tel:(+91)76001726">{item.phone}</a> <br />
                      <a href="mailto:Hello@contact.com">{item.email}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
