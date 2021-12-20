import TagButton from "../../UI/Button/TagButton";

const TagFilter = ({onTagClicked, tagList, tagState}) => {
  let buttonArray = [];

  tagList.forEach((tagName, i) => {
    buttonArray.push(
        <TagButton tagName={tagName} onTagClicked={onTagClicked} isClicked={tagState[tagName]}/>
    )
  })

  return (
    <div className="row">
      {buttonArray}
    </div>
  )
}

export default TagFilter;