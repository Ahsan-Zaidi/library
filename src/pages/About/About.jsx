import React from 'react';
import "./About.css";
import aboutImg from '../../images/about-img.jpg'

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Bookspot</h2>
            <p className='fs-17'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi quo fugiat dolorum porro esse, tempore consequatur minima repellat voluptatibus sint? Totam, minus doloremque asperiores accusantium fugit quod laudantium atque.</p>
            <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo necessitatibus ex sed ut perferendis, cumque sit excepturi! Repudiandae, nostrum quaerat ea delectus sapiente harum nam, doloremque iusto dolor tenetur natus!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
