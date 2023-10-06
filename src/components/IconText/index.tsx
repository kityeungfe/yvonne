import { ReactElement } from "react";

interface IProp {
    icon: string,
    text: string
}

/** just for test dangerjs */
const IconText : React.FC<IProp> = ({
    icon,
    text
}):ReactElement => {
    return(
        <div className="flex flex-row items-center mx-6">
            <img className="h-8 w-8 mr-4" src={icon} alt="calendar icon" />
            <span className="text-xs">{text}</span>
        </div>
    )
}

export { IconText }