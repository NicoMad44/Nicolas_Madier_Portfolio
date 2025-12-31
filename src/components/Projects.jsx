import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Project Details collapsable box
import { ProjectDetailsBox } from "./ProjectDetailsBox";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary" id="projects">
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
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 w-4/5 drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit flex flex-col gap-2"
              >
                <h5 className="font-bold font-Poppins">{content.title}</h5>
                <img className="rounded-2xl self-center" src={content.image} alt="site home page screenshot" />
                <div className="flex flex-col gap-1 mt-2">

                  <h6>Skills</h6>
                  <div className="flex gap-3">
                    {content.skillsTags.map((skill, j) => (
                        <img
                        src={skill}
                        alt="logo"
                        className="w-10 box-content"
                        key={j}
                      />
                      ))}
                  </div>

                  <h6>Project Details</h6>
                  {content.description.map((item, j) => (
                       <ProjectDetailsBox key={item.subtitle+j} title={item.subtitle} content={item.subtexts} />
                      ))}
                  

                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <a href={content.url}
                  target="_blank">
                  <button className="font-bold text-gray self-end">
                    Visit the site
                  </button>
                  </a>
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
