import React, { useEffect, useState } from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
import { urlFor, client } from "../../client";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"][0..2] '; //only 3 testimonials will be fetched
    client.fetch(query).then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial" key={testimonial.name}>
              <img src={urlFor(testimonial.image)} alt="" />
              <div className="reviewer-details">
                <div className="name">{testimonial.name}</div>
                <div className="company-name">{testimonial.company}</div>
                <div className="review">{testimonial.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
