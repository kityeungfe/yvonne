import { ReactElement } from "react"

interface IProp {
    children?: React.ReactNode
}

const Card : React.FC<IProp> = ({
    children
}): ReactElement => {
    return(
        <div className='flex flex-col relative mt-12'>
            {children}
        </div>
    )   
}

export { Card }