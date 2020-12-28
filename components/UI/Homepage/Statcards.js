const Statcards = ({totals}) => (
  <div className="row" style={{ "paddingBottom": "3rem" }}>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h3 className="u-text-center">{totals.articles_read}</h3>
          <p className="u-text-center font-semibold" style={{ "fontSize": "1.5rem" }}>Articles Read</p>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h3 className="u-text-center">{totals.articles_added}</h3>
          <p className="u-text-center font-semibold" style={{ "fontSize": "1.5rem" }}>Articles Added</p>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h3 className="u-text-center">{totals.words_read}</h3>
          <p className="u-text-center font-semibold" style={{"fontSize":"1.5rem"}}>Words Read</p>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h3 className="u-text-center">{totals.words_added}</h3>
          <p className="u-text-center font-semibold" style={{ "fontSize": "1.5rem" }}>Words Added</p>
        </div>
      </div>
    </div>
  </div>
)

export default Statcards
