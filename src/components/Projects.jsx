import React from "react";
import { content } from "../Content";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Project Details collapsable box
import { ProjectDetailsBox } from "./ProjectDetailsBox";


const Projects = () => {
  const { Projects } = content;
  return (
    <section  id="projects">
      <div className="md:container px-5 pt-14 min-h-0 md:min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h3 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h3>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            speed={600}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination, Autoplay]}
            className="rounded-3xl pb-16 w-full drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit flex flex-col gap-2"
              >
                <h4 className="font-bold font-Poppins self-center">{content.title}</h4>
                <p className="font-Poppins self-center">{content.tagLine}</p>
                <br/>
                   {content.url ? (
                        <a
                          className="self-center cursor-pointer"
                          href={content.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="rounded-2xl self-center"
                            src={content.image}
                            alt="site home page screenshot"
                          />
                        </a>
                      ) : (
                        <img
                          className="rounded-2xl self-center"
                          src={content.image}
                          alt="site home page screenshot"
                        />
                      )}
                <div className="flex  gap-5 md:gap-60 mt-2 self-center ">
                  
                  {content.url && (
                    <a href={content.url} target="_blank" rel="noreferrer">
                      <div className="font-bold text-black text-center cursor-pointer w-fit px-8 py-3 rounded-full bg-bg_light_primary">
                        Visit the site
                      </div>
                    </a>
                  )}

                  <a href={content.repo}
                  target="_blank" rel="noreferrer">
                  <div className="font-bold text-black text-center cursor-pointer w-fit px-8 py-3 rounded-full bg-bg_light_primary">
                    GitHub Link
                  </div>
                  </a>

                </div>
                <div className="flex flex-col gap-1 mt-2">

                  <h5 className="flex md:w-4/5 md:self-center flex-col mb-1 " >Skills</h5>
                  <div className="flex flex-wrap w-4/5 justify-center self-center gap-6 md:gap-12">
                    {content.skillsTags.map((skill, j) => (
                        <img
                        src={skill}
                        alt="logo"
                        className="w-9 h-9 md:w-20 md:h-20 box-content"
                        key={j}
                      />
                      ))}
                  </div>

                  <br/>

                  <ProjectDetailsBox  key={i+4242} title={"Project Details"} content={content.description} />

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
