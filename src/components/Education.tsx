import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">

          <ResumeCard
            title="BTech in Computer Science"
            subTitle="Vellore Institute of Technology, Chennai (2021 - 2025)"
            result="8.05/10"
            des="Currently pursuing my BTech in Computer Science at Vellore Institute of Technology,
            with an expected graduation in July 2025. Gaining hands-on experience in algorithms, data structures,
            and software engineering, I'm passionate about contributing innovative solutions to the tech industry."
          />

          <ResumeCard
            title="Senior Secondary Schooling"
            subTitle="Shiv Jyoti Senior Secondary School, Kota (2019 - 2021)"
            result="72.3/100"
            des="I completed my high school education at Shv Jyoti Senior Secondary School in July 2021.
            This foundational period equipped me with essential skills and a strong academic background,
            laying the groundwork for my current pursuit of a BTech in Computer Science."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="St. Paul's School, Darjeeling (2016 - 2018)"
            result="83.8/100"
            des="I successfully completed my secondary education at St. Paul's School in May 2018.
            This period marked the beginning of my academic journey and laid the groundwork for my subsequent educational pursuits."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
