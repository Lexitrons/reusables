import React from 'react';

const Icon = ({cssClass = '', icon = ''}) => {
  const svgHtml = `<use xlink:href='#${icon}'></use>`;
  return (
      <svg className={cssClass}
        viewBox="0 0 100 100"
        dangerouslySetInnerHTML={{__html: svgHtml}} />
  );
};

export default Icon;
