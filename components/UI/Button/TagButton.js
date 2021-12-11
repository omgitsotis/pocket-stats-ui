import clsx from 'clsx';
import { useState } from 'react'
import { tagToIcon } from '../../../libs/tags';

const TagButton = ({tagName, onTagClicked}) => {
  const [clicked, setClicked] = useState(false);
  const className = clsx("btn--pilled btn-large btn-primary", !clicked && "outline");

  const onClick = () => {
    setClicked(!clicked);
    onTagClicked(tagName);
  }

  let style = { "font-size": "1.6rem"};
  if (clicked) {
    style = { "color": "#fff", "font-size": "1.6rem" };
  }
  
  return (
    <button className={className} style={style} onClick={() => onClick()}>
      <i className={clsx("fa-wrapper fa", tagToIcon(tagName))}></i>
    </button>
  )
}

export default TagButton;