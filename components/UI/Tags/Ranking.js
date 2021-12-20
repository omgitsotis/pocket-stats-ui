import clsx from 'clsx';
import {tagToIcon} from '../../../libs/tags';

const TagRanking = ({data, type}) => {
  const items = sort(data, type);

  if (items.length === 0) {
    return (
      <div className="card u-flex u-flex-column h-100">
        <div className="content" style={{ marginBottom: 0 }}>
          <h3>Loading</h3>
        </div>
      </div>
    );
  }

  let firstTag, secondTag, thirdTag, fourthTag, fifthTag;

  if (typeof(items[0]) !== "undefined") {
    firstTag = (
      <div className="row text-yellow-400">
        <div className="col-4">
          <div className="icon subtitle tooltip" data-tooltip={items[0].tag} style={{ "fontSize": "3rem" }}>
            <i className={clsx("fa-wrapper fa my-2", tagToIcon(items[0].tag))}></i>
          </div>
        </div>
        <div className="col-8">
          <h1>{items[0].value}</h1>
        </div>
      </div>
    );
  }
  
  if (typeof(items[1]) !== "undefined") {
    secondTag = (
      <div className="row text-gray-400">
        <div className="col-4">
          <div class="icon subtitle tooltip" data-tooltip={items[1].tag} style={{ "fontSize": "2.5rem" }}>
            <i class={clsx("fa-wrapper fa my-2", tagToIcon(items[1].tag))}></i>
          </div>
        </div>
        <div className="col-8">
          <h3>{items[1].value}</h3>
        </div>
      </div>
    );
  }

  if (typeof(items[2]) !== "undefined") {
    thirdTag = (
      <div className="row text-yellow-700">
        <div className="col-4">
          <div class="icon subtitle tooltip" data-tooltip={items[2].tag} style={{ "fontSize": "2rem" }}>
            <i class={clsx("fa-wrapper fa my-2", tagToIcon(items[2].tag))}></i>
          </div>
        </div>
        <div className="col-8">
          <h4>{items[2].value}</h4>
        </div>
      </div>
    );
  }

  if (typeof(items[3]) !== "undefined") {
    fourthTag = (
      <div className="row">
        <div className="col-4">
          <div class="icon subtitle tooltip" data-tooltip={items[3].tag} style={{ "fontSize": "1.5rem" }}>
            <i class={clsx("fa-wrapper fa my-2", tagToIcon(items[3].tag))}></i>
          </div>
        </div>
        <div className="col-8">
          <h5>{items[3].value}</h5>
        </div>
      </div>
    );
  }

  if (typeof(items[4]) !== "undefined") {
    fifthTag = (
      <div className="row">
        <div className="col-4">
          <div className="icon subtitle tooltip" data-tooltip={items[4].tag} style={{ "fontSize": "1.5rem" }}>
            <i className={clsx("fa-wrapper fa my-2", tagToIcon(items[4].tag))}></i>
          </div>
        </div>
        <div className="col-8">
          <h5>{items[4].value}</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="card u-flex u-flex-column h-100">
      <div className="content" style={{ marginBottom: 0 }}>
        <h3 className="u-text-center">{title(type)}</h3>
        {firstTag}
        {secondTag}
        {thirdTag}
        {fourthTag}
        {fifthTag}
      </div>
    </div>
  );
};

const sort = (data, key) => {
  let items = [];
  if (typeof(data) === "undefined") {
    return items;
  }

  for (const [k, v] of Object.entries(data)) {
    items.push({tag: k, value: v[key]});
  }

  items.sort((a, b) => b.value - a.value );
  return items;
}

const title = (key) => {
  switch (key) {
    case "articles_read":
      return "Articles Read"
    case "words_read":
      return "Words Read"
    case "time_read":
      return "Time Read"
    default:
      return "";
  }
}

export default TagRanking;