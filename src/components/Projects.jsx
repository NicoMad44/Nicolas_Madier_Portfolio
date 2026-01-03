/* eslint-disable react/react-in-jsx-scope */
import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Project Details collapsable box
import { ProjectDetailsBox } from "./ProjectDetailsBox";

import { Pagination, Autoplay } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section  id="projects">
      <div className="md:container px-5 pt-14 min-h-0 md:min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
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
                <br/>
                <a className="self-center cursor-pointer"
                  href={content.url}
                  target="_blank" rel="noreferrer">
                    <img className="rounded-2xl self-center" src={content.image} alt="site home page screenshot" />
                </a>
                <div className="flex flex-col gap-1 mt-2 self-center w-fit px-8 py-3 rounded-full bg-bg_light_primary">
                  <a href={content.url}
                  target="_blank" rel="noreferrer">
                  <button className="font-bold text-gray text-center cursor-pointer">
                    Visit the site
                  </button>
                  </a>
                </div>
                <div className="flex flex-col gap-1 mt-2">

                  <h6 className="flex md:w-4/5 md:self-center flex-col mb-1 " >Skills</h6>
                  <div className="flex flex-wrap w-4/5 self-center gap-3">
                    {content.skillsTags.map((skill, j) => (
                        <img
                        src={skill}
                        alt="logo"
                        className="w-10 box-content"
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
