import React from 'react';
import { SocialMediaIconsData } from '../data';

const SocilMedia = ({ parent, child }) => {
  return (
    <ul className={parent}>
      {SocialMediaIconsData.map((data) => {
        const { id, href, icon } = data;
        return (
          <li key={id}>
            <a href={href} target='blank' className={child}>
              <i className={`fab fa-${icon}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocilMedia;
