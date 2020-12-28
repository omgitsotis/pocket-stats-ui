import clsx from "clsx";
import { DROPDOWN_RELATIVE, DROPDOWN_ABSOLUTE } from '../../../libs/const';


const DropdownButton = ({state, onSelected}) => {
  const relativeClass = clsx("menu-item", state === DROPDOWN_RELATIVE && "selected");
  const absoluteClass = clsx("menu-item", state === DROPDOWN_ABSOLUTE && "selected");
    return (
      <div className="list-dropdown">
        <div className="btn-group">
          <button className="btn-primary btn-small btn-dropdown" style={{ "marginTop": "0.2rem" }}>
            <i className="fa fa-wrapper fa-clock pr-1"></i>
            <i className="fa fa-wrapper fa-caret-down" aria-hidden="true"></i>
          </button>
          <ul className="menu">
            <li className={relativeClass} onClick={() => onSelected(DROPDOWN_RELATIVE)}><a >Realative</a></li>
            <li className={absoluteClass} onClick={() => onSelected(DROPDOWN_ABSOLUTE)}><a>Absolute</a></li>
          </ul>
        </div>
      </div>
    );
}

export default DropdownButton;