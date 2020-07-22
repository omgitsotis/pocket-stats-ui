const Statcards = ({totals}) => (
  <div className="row">
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h1 className="u-text-center">{totals.articles_read}</h1>
          <h6 className="u-text-center">Articles Read</h6>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h1 className="u-text-center">{totals.articles_added}</h1>
          <h6 className="u-text-center">Articles Added</h6>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h1 className="u-text-center">{totals.words_read}</h1>
          <h6 className="u-text-center">Words Read</h6>
        </div>
      </div>
    </div>
    <div className="col-3">
      <div className="card">
        <div className="content">
          <h1 className="u-text-center">{totals.words_added}</h1>
          <h6 className="u-text-center">Words Added</h6>
        </div>
      </div>
    </div>
  </div>
)

export default Statcards
