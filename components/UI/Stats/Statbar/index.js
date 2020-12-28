const titleStyle = {"font-size":"1.87rem"};

const Statbar = ({statType, read, added }) => {
  return (
    <div className="row p-o pb-5 level fill-height">
      <div className="col-4">
        <div className="card u-flex u-flex-column h-100">
          <div className="content" style={{marginBottom: 0}}>
            <h2 className="u-text-center" style={titleStyle}>{`${statType} Read`}</h2>
            <h1 className="u-text-center">{read}</h1>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card u-flex u-flex-column h-100">
          <div className="content">
            <h2 className="u-text-center" style={titleStyle}>{`${statType} Added`}</h2>
            <h1 className="u-text-center">{added}</h1>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card u-flex u-flex-column h-100">
          <div className="content">
            <h2 className="u-text-center" style={titleStyle}>Trend</h2>
            <TrendText read={read} added={added} />
          </div>
        </div>
      </div>
    </div>
  )
}

const TrendText = ({read, added}) => {
  const value = read - added;
  if (value > 0) {
    return (
      <h1 className="u-text-center text-success">
        {`+${value}`}   
      </h1>
    )
  }

  return (
    <h1 className="u-text-center text-danger">
      {value}
    </h1>
  )
}

export default Statbar;
