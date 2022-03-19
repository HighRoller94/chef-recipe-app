import React from 'react'
import { motion} from 'framer-motion/dist/framer-motion'

import HeroContent from '../components/Home/HeroContent';
import Blog from '../components/Home/Blog';
import Newsletter from '../components/Home/Newsletter';

function Home() {
    return (
        <motion.div className="hero__section"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}>
            <HeroContent />
            <Blog />
        </motion.div>
    )
}

export default Home
