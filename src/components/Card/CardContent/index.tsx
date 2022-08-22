import { ReactElement } from "react"

interface IProp {
    children?: React.ReactNode
    notIcon?: boolean
}

const CardContent : React.FC<IProp> = ({
    children,
    notIcon = false
}): ReactElement => {

    let style_pt: string = notIcon ? "pt-6 " : "pt-16 "
    let style_mt: string = notIcon ? " " : "mt-14 "
    return(
        <div className={ "xl:mx-64 lg:mx-32 sm:mx-12 mx-10 pl-6 pr-6 bg-white rounded-t-3xl shadow-xl flex flex-col items-center " + style_pt + style_mt}>
            {children}
        </div>
    )
}

export { CardContent }