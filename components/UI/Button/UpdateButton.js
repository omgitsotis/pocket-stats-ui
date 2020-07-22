import clsx from 'clsx';

const UpdateButton = ({loading, onClick}) => {
  const className = clsx("btn-primary outline", loading && "animated loading loading-left");
  return (
    <div style={{"paddingTop": "2rem"}}>
      <button className={className} onClick={onClick}>
        Update
      </button>
    </div>
  )
}

export default UpdateButton
