/* eslint-disable react/react-in-jsx-scope */
// import content
import { content } from "../Content";
// import ball
import { CoinCanvas } from './canvas';



const Skills = () => {
  const { skills } = content;
  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      
      <div className="md:container px-5  pt-14">
        <h2 className="title" data-aos="fade-down">
            {skills.title}
          </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:container px-5  py-14">
        {skills.skills_content.map((skill, i) => (
          <div key={i+4242} data-aos="fade-up" data-aos-delay={i*150}  >
          <CoinCanvas 
            key={`coin+${i}`} 
            icon={skill.logo} 
            />
          </div>

        ))}



        
      </div>

    </section>
  );
};

export default Skills;
