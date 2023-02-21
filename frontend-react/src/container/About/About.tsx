import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'

import { urlFor, sanityClient } from '../../client'

interface About {
  title: string;
  description: string;
  imgUrl: {
    asset: {
      _ref: string;
    };
  };
}

const About = () => {
  const [abouts, setAbouts] = useState<About[]>([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    sanityClient.fetch<About[]>(query).then((data) => {
      setAbouts(data)
    })
  }, [])

  return (
   <>
    <h2 className="head-text">I know That <span>Good Development</span> <br /> means <span>Good Business</span>
    </h2>
    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1}}
          transition={{ duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={urlFor(about.imgUrl).url()} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            {about.title}
          </h2>
          <p className="p-text" style={{ marginTop: 10 }}>
            {about.description}
          </p>
        </motion.div>
      ))}
    </div>
   </>
  )
}

export default AppWrap(About, 'about', 'myabout')