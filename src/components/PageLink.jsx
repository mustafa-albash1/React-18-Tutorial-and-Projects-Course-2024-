import React from 'react';
import { PageLinkData } from '../data';

const PageLink = ({ parent, child }) => {
  return (
    <ul className={parent}>
      {PageLinkData.map((data) => {
        const { id, text, href } = data;
        return (
          <li key={id}>
            <a href={href} className={child}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLink;
