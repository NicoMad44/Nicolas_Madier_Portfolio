import React from "react";
import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h3 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h3>
        <br />
        <div className="flex flex-col md:flex-row gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 300}
              className="min-w-[14rem] duration-300 border-2 border-slate-200 rounded-xl bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none"
            >
              <img src={content.logo} alt={`image representing my role as ${content.title}`} className="mx-auto max-h-[180px] " />
              <h4 className="my-3 text-center text-xl md:min-h-[65px]">{content.title}</h4>
              <br/>
              <ul className="list-disc list-inside">
                {content.keyPoints.map((point,j) => (
                  <li key={j} className="mb-5">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
