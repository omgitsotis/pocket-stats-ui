const Statbar = () => {
  return (
    <div className="row p-o level fill-height">
      <div className="col-4">
        <div className="card u-flex u-flex-column h-100">
          <div className="content" style={{marginBottom: 0}}>
            <h2 className="u-text-center">Articles Read</h2>
            <h1 className="u-text-center">56</h1>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card u-flex u-flex-column h-100">
          <div className="content">
            <h2 className="u-text-center">Articles Added</h2>
            <h1 className="u-text-center">48</h1>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card u-flex u-flex-column h-100">
          <div className="content">
            <h2 className="u-text-center">Trend</h2>
            <h1 className="u-text-center text-success" style={{paddingTop: '2.6rem'}}>
              <span className="icon"><i className="fa fa-arrow-up"></i></span>
              <span style={{marginLeft:"1.3rem"}}>8</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statbar;
