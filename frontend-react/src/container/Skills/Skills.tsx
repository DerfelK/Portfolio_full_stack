import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, sanityClient } from '../../client'
import './Skills.scss'

type Skill = {
  name: string
  bgColor: string
  icon: {
    asset: {
      _ref: string
    }
  }
}

type Experience = {
  year: string
  works: {
    name: string
    company: string
    desc: string
  }[]
}


const Skills = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    sanityClient.fetch(query).then((data) =>{
      setExperiences(data)
    })

    sanityClient.fetch(skillsQuery).then((data) =>{
      setSkills(data)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">
        Skills & Experience
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className="p-text2">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experiences.sort((a, b) => {
            const yearA = Number(a.year);
            const yearB = Number(b.year);
            if (isNaN(yearA) || isNaN(yearB)) {
              return 0;
            }
            return yearB - yearA;
          }).map((experience, parentIndex) => (
            <motion.div
              className="app__skills-exp-item"
              key={parentIndex}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text2">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, childIndex) => (
                  <React.Fragment key={`${parentIndex}-${childIndex}`}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tooltip-content=''
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text2">{work.name}</h4>
                      <p className="p-text2">{work.company}</p>
                    </motion.div>
                    <Tooltip 
                      id={work.name}
                      float
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap (Skills, 'app__skills' ),
  'skills', 
  'app__whitebg')