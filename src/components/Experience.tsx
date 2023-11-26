import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Software Developer Intern"
            subTitle="IKONOS TECHNOLOGIES PVT LTD - (Nov, 2023 - Dec, 2023)"
            result="HYDERABAD"
            des="Software Developer Intern at IKONOS TECHNOLOGIES PVT LTD, Hyderabad. Led key initiatives, refining problem-solving
            prowess. Thrived in a collaborative, innovative tech environment. Keen to persistently advance technical
            contributions to IKONOS TECHNOLOGIES. Enthusiastically anticipating further technical challenges and growth.
            "
          />

        <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Bharat Intern - (Aug, 2023 - Sept, 2023)"
            result="REMOTE"
            des="Remote Full Stack Developer Intern at Bharat Intern. Spearheaded projects involving end-to-end development.
            Applied skills in both front-end and back-end technologies. Thrived in a remote work setting, enhancing adaptability
            and collaborative coding practices. Projects I worked on included Video Conferencing Website and Project Management Tool.
            "
          />

          <ResumeCard
            title="Full Stack Developer Intern"
            subTitle="Capabl (Elite Techno Groups) - (June, 2023 - July, 2023)"
            result="REMOTE"
            des="Remote Full Stack Developer Intern at Capabl . Spearheaded comprehensive development projects, mastering both
            front-end and back-end technologies. Navigated challenges seamlessly in a remote work setup, showcasing adaptability
            and fostering collaborative coding practices. Worked on Hangman game and Library management system to gain Hands-on experience.
            "
          />

          <ResumeCard
            title="Computer Vision & ML Intern"
            subTitle="The Sparks Foundation - (May, 2023 - June, 2023)"
            result="REMOTE"
            des="Computer Vision and Machine Learning Intern at The Sparks Foundation. Contributed to cutting-edge projects
            in computer vision and ML, implementing innovative solutions. Gained hands-on experience in image processing
            and algorithm development. During my tenure I worked two projects namely Colour Detection and Social Distance Detector"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;