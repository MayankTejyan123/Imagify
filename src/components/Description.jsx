import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Description = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{ once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

<div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
    <img src={assets.sample_img_1} alt="" className='w-80 xl-w-96 rounded-lg'/>

    <div>
        <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator</h2>
        <p className='text-gray-600 md-4'>Create consistent visuals by training your styles (known as LoRAs), like Custom Styles and Custom Characters. Simply upload your images, tell the AI what to do, and watch as your styles and characters show up in different scenarios—all in just minutes.</p>
        <p className='text-gray-600'>
        Available exclusively on Freepik, Mystic lets you create images that you cannot tell apart from actual photos. From faces, through hands to texts, all is pixel perfect and no additional editing or upscaling is necessary.
        </p>
    </div>
</div>





    </motion.div>
  )
}

export default Description
