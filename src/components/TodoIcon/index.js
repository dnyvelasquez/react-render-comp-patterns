import { ReactComponent as CheckSvg } from "./check.svg";
import { ReactComponent as DeletekSvg } from "./delete.svg";
import './main.css';

const iconTypes = {
    "check": (color) => <CheckSvg className="Icon-svg" fill={color} />,
    "delete": (color) => <DeletekSvg  className="Icon-svg" fill={color} />,
}

function TodoIcon({ type, color, onClick }) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
                {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };
