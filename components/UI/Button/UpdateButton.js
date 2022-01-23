import clsx from 'clsx';
import useWindowDimensions from '../../../libs/windowDimensions';

const UpdateButton = ({loading, onClick}) => {
  const {height, width} = useWindowDimensions();

  const className = clsx(
    "btn-primary outline", 
    loading && "animated loading loading-left",
    (width < 640) ? 'btn-xsmall':'btn-large'
  );
  return (
    <div className="pt-4">
      <button className={className} onClick={onClick}>
        Update
      </button>
    </div>
  )
}

export default UpdateButton
