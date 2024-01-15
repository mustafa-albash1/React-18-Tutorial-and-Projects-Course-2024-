import React from 'react';
import Title from './Title';
import { servicesData } from '../data';

function Services() {
  return (
    <section className='section services' id='services'>
      <Title title='Our' subTitle='Services' />
      <div className='section-center services-center'>
        {servicesData.map((data) => {
          const { id, icon, title, text } = data;
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <i className={`fas fa-${icon} fa-fw`}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
