import { ReactElement } from "react"

interface IProp {
    avatar: string
}

const CardIcon : React.FC<IProp> = ({
    avatar
}):ReactElement => {
    return(
        <div className="absolute inset-x-0 top-0 h-24 items-center">
            <img className="h-28 w-28 rounded-full shadow-2xl mx-auto" src={avatar} alt="User Avatar" />
        </div>
    )
}

export { CardIcon }