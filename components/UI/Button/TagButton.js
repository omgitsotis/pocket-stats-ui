import clsx from 'clsx';
import { tagToIcon } from '../../../libs/tags';
import useWindowDimensions from '../../../libs/windowDimensions';

const TagButton = ({tagName, onTagClicked, isClicked}) => {
  const {height, width} = useWindowDimensions();
  
  const className = clsx(
    "btn--pilled btn-primary", 
     (width < 640) ? 'btn-xsmall':'btn-large',
    !isClicked && "outline"
  );

  const onClick = () => {
    onTagClicked(tagName);
  }

  let style = { "font-size": "1.6rem"};
  if (isClicked) {
    style = { "color": "#fff", "font-size": "1.6rem" };
  }
  
  return (
    <div className="col-md-1 col-xs-4">
      <button className={className} style={style} onClick={() => onClick()}>
        <i className={clsx("fa-wrapper fa", tagToIcon(tagName))}></i>
      </button>
    </div>
  )
}

export default TagButton;