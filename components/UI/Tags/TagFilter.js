import TagButton from "../../UI/Button/TagButton";

const tagList = [
  "american football",
  "art",
  "bachelor",
  "baseball",
  "basketball",
  "books",
  "bowling",
  "boxing",
  "chess",
  "comedy",
  "corona",
  "crime",
  "cycling",
  "food",
  "football",
  "golf",
  "health",
  "history",
  "ice hockey",
  "life",
  "media",
  "mma",
  "movie",
  "music",
  "news",
  "other sports",
  "parenthood",
  "politics",
  "pop culture",
  "science",
  "sex",
  "tech",
  "tennis",
  "tv",
  "video games",
  "wrestling"
]

const TagFilter = ({onTagClicked}) => {
  let buttonArray = [];

  tagList.forEach((tagName, i) => {
    buttonArray.push(
      <div className="col">
        <TagButton tagName={tagName} onTagClicked={onTagClicked}/>
      </div>
    )
  })

  return (
    <div className="row">
      {buttonArray}
    </div>
  )
}

export default TagFilter;