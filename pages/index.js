import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {DiPython, DiLinux, DiMysql, DiReact} from 'react-icons/di'
import {FaGitAlt, FaCss3Alt} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {SiGmail} from 'react-icons/si'
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import web1 from '../public/poetizer.png'
import web2 from '../public/bla.jpg'
import web3 from '../public/wifi.png'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import PropTypes from 'prop-types'

export default function Home() {

  {/* ----------- CARD ----------- */}
  function Card({ imageSource, title, text, url }) {
    return (
      <div className="card text-center bg-dark">
        <div className="overflow">
          <Image src={imageSource} alt="a wallpaper" className="card-img-top"/>
        </div>
        <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            {text
              ? text
              : ""}
          </p>
          <a
            href={url ? url : "#!"}
            target="_blank"
            className="btn btn-outline-secondary border-0"
            rel="noreferrer"
          >
            Go to {title}
          </a>
        </div>
      </div>
    );
  }

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
  };
  
  {/* ----------- CARD ----------- */}


  {/* ----------- CARDS ----------- */}
  const cards = [
    {
      id: 1,
      title: "'The Poetizer' (Web Page) Python 2022",
      image: web1,
      url: "https://github.com/j0k3rD/Programacion-I",
    },
    {
      id: 2,
      title: "WiFi Log Manager Python 2022",
      image: web3,
      url: "https://github.com/j0k3rD/WiFi_Log_Manager",
    },
    {
      id: 3,
      title: "BlackJack Python 2021",
      image: web2,
      url: "https://github.com/j0k3rD/BlackJack",
    },
  ];
  {/* ----------- CARDS ----------- */}

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aaron Moya / Informatics Engineer Student</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ----------- MAIN BAR ----------- */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='pt-10 flex justify-between'>
            <h1 className='text-xl font-burtons'>developedbyaaron</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill 
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a 
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
                  href="#">
                    Download CV
                </a>
              </li>
            </ul>
          </nav>
          {/* ----------- MAIN BAR ----------- */}

          {/* ----------- MENU ----------- */}
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96'>
              <Image src={deved} layout="fill" objectFit='cover' />
            </div>
          <div className='text-center'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Hi. I'm Aaron 🖐️
            </h2>
            {/* <h3 className='text-2xl py-2 md:text-3xl'>Informatics Engineer Student</h3> */}
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>
              My name is Aaron Moya, i'm a informatics engineering student at the University of Mendoza. I'm constantly learning new things. I like to read about programming and hacking.
            </p>
          </div>
          <div>
            <div className='text-4xl text-center'>
              <h3 className='mb-7 mt-7 font-black'>My skills</h3>
              <div className='text-6xl flex justify-center gap-16 p-3'>
                <div className=' text-blue-600'>
                  <DiPython /> 
                </div>
                <div className=' text-black-100'>
                  <DiLinux /> 
                </div>
                <div className=' text-orange-400'>
                  <FaGitAlt />
                </div>
                <div className=' text-blue-300'>
                  <GrMysql /> 
                </div>
                <div className=' text-orange-600'>
                  <AiFillHtml5 />
                </div>
                <div className=' text-blue-700'>
                  <FaCss3Alt /> 
                </div>
                <div className=' text-red-500'>
                  <DiReact />
                </div>
              </div>
            </div>
          </div>
          {/* ----------- MENU ----------- */}
        </section>

        <section>
          {/* ----------- SERVICES ----------- */}
          <div>
            <h3 className='text-3xl py-1 font-black mt-10'>Services</h3>
            {/* <p className='text-md py-2 leading-8 text-gray-800'>
              I work <span className=' text-teal-500'>hard</span> and try to finish my work in a timely manner.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I adapt well to teamwork and <span className=' text-teal-500'>I like to contribute my ideas</span> to the group.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              I always try to <span className=' text-teal-500'>make clean code</span> complying with design patterns and some quality attributes.
            </p>*/}
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              {/* <Image src={design} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pb-2'>Fully Responsible 💼</h3>
              <p className='py-2'>
                I work hard and try to finish my work in a timely manner.
              </p>
              {/* <h4 className='py-4 text-teal-600'>Designs tools I use</h4> */}
              {/* <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Illustrator</p>
              <p className='text-gray-800 py-1'>Figma</p> */}
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              {/* <Image src={code} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pb-2'>Social Media Integration 👍🏻</h3>
              <p className='py-2'>
                I adapt well to teamwork and I like to contribute my ideas to the group.
              </p>
              {/* <h4 className='py-4 text-teal-600'>Designs tools I use</h4> */}
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              {/* <Image src={consulting} width={100} height={100} /> */}
              <h3 className='text-lg font-medium pb-2'>Development 🧑🏻‍💻</h3>
              <p className='py-2'>
                I always try to make clean code complying with design patterns and some quality attributes.
              </p>
              {/* <h4 className='py-4 text-teal-600'>Designs tools I use</h4> */}
            </div>
          </div>
          {/* ----------- SERVICES ----------- */}
        </section>
        <section>
          {/* ----------- PORTFOLIO ----------- */}
          <div>
            <h3 className='text-3xl py-1 font-black'>My latest projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Here you can see projects I have work on!
              {/* I work <span className=' text-teal-500'>hard</span> and try to finish my work in a timely manner.
              I adapt well to teamwork and <span className=' text-teal-500'>I like to contribute my ideas</span> to the group. */}
            </p>
            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards.map(({ title, image, url, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} url={url} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* ----------- PORTFOLIO ----------- */}
        </section>
        <section>
          {/* ----------- CONTACT ----------- */}
          <div>
            <h3 className='text-3xl py-1 font-black mt-10 mb-7'>Write Me</h3>
          </div>
          <div className='text-5xl flex justify-center gap-16 p-3'>
                <div className='twitter'>
                  <a href="https://twitter.com/aaron_moya22">
                    <AiFillTwitterCircle /> 
                  </a>
                </div>
                <div className='gmail'>
                  <a href="mailto:agm.moya@alumno.um.edu.ar">
                    <SiGmail /> 
                  </a>
                </div>
                <div className='github'>
                  <a href="https://github.com/j0k3rD">
                    <AiFillGithub/>
                  </a>
                </div>
            </div>
            <div className='text-center font-medium flex justify-center p-3 gap-12'>
                <div>
                  <p>Follow Me</p>
                </div>
                <div>
                  <p>Mail Me</p>
                </div>
                <div>
                  <p>Follow Me</p>
                </div>
            </div>
          {/* ----------- CONTACT ----------- */}
        </section>
        <section>
          {/* ----------- FOOTER ----------- */}
          <div>
            <h3 className='footer text-center py-1 font-black mt-10'>COPYRIGHT © 2022. ALL RIGHTS RESERVED</h3>
          </div>
          {/* ----------- FOOTER ----------- */}
        </section>
      </main>
    </div>
  );
}
