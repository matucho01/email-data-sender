import React from 'react'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineYoutube,
} from 'react-icons/ai'

const Footer = () => {
    return (
        <footer className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
            <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
                <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
                    Producto desarrollado para Picaval
                </div>
                <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
                    © 2024 Mateo Pérez
                </div>
            </div>
        </footer>
    )
}

export default Footer