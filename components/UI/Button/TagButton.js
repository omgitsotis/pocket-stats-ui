import clsx from 'clsx';
import { useState } from 'react'
import { tagToIcon } from '../../../libs/tags';

const TagButton = ({tagName, onTagClicked, isClicked}) => {
  const className = clsx("btn--pilled btn-large btn-primary", !isClicked && "outline");

  const onClick = () => {
    onTagClicked(tagName);
  }

  let style = { "font-size": "1.6rem"};
  if (isClicked) {
    style = { "color": "#fff", "font-size": "1.6rem" };
  }
  
  return (
    <div className="col">
      <button className={className} style={style} onClick={() => onClick()}>
        <i className={clsx("fa-wrapper fa", tagToIcon(tagName))}></i>
      </button>
    </div>
  )
}

export default TagButton;