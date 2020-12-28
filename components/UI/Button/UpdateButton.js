import clsx from 'clsx';

const UpdateButton = ({loading, onClick}) => {
  const className = clsx("btn-primary outline", loading && "animated loading loading-left");
  return (
    <div className="pt-4">
      <button className={className} onClick={onClick}>
        Update
      </button>
    </div>
  )
}

export default UpdateButton
