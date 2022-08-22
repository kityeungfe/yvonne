import { ReactElement } from "react"

interface IProp {
    children?: React.ReactNode
}

const CardFooter : React.FC<IProp> = ({
    children
}): ReactElement => {
    return(
        <div className='p-6 rounded-b-3xl xl:mx-64 lg:mx-32 sm:mx-12 mx-10 px-2 bg-[#F0F0F5] inset-x-0 bottom-0 shadow-xl justify-center'>
            {children}
        </div>
    )
}

export { CardFooter }