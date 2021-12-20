const TagInfo = ({tag = {}, name}) => {
  return (
    <div className="row">
      <div className="col-12" style={{"paddingBottom": "1rem"}}>
        <h1>{(name === "") ? "" : name.charAt(0).toUpperCase() + name.slice(1)}</h1>
      </div>
      <div className="col-8">
        <h4>Articles Read</h4>
      </div>
      <div className="col-4">
        <h3>{(tag.articles_read === undefined) ? '0' : tag.articles_read}</h3>
      </div>
      <div className="col-8">
        <h4>Articles Added</h4>
      </div>
      <div className="col-4">
        <h3>{(tag.articles_added === undefined) ? '0' : tag.articles_added}</h3>
      </div>
      <div className="col-8">
        <h4>Words Read</h4>
      </div>
      <div className="col-4">
        <h3>{(tag.words_read === undefined) ? '0' : tag.words_read}</h3>
      </div>
      <div className="col-8">
        <h4>Words Added</h4>
      </div>
      <div className="col-4">
        <h3>{(tag.words_added === undefined) ? '0' : tag.words_added}</h3>
      </div>
      <div className="col-8">
        <h4>Time Read</h4>
      </div>
      <div className="col-4">
        <h3>{(tag.time_read === undefined) ? '0' : tag.time_read}</h3>
      </div>
      <div className="col-8">
        <h4>Time Added</h4>
      </div>
      <div className="col-4">
        <h3>{(tag.time_added === undefined) ? '0' : tag.time_added}</h3>
      </div>
    </div>
  )
}

export default TagInfo