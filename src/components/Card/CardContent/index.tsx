/*
 * @Author: kityeungfe kityeungfe@outlook.com
 * @Date: 2022-08-23 03:23:44
 * @LastEditors: kityeungfe kityeungfe@outlook.com
 * @LastEditTime: 2022-08-23 04:04:43
 * @FilePath: \yvonne\src\components\Card\CardContent\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ReactElement } from "react"

interface IProp {
    children?: React.ReactNode
    notIcon?: boolean
    notFooter?: boolean
    flexDirection?: string 
    className?: string | undefined,
    xl?: string,
    lg?: string,
    sm?: string
}

const CardContent : React.FC<IProp> = ({
    children,
    notIcon = false,
    notFooter = false,
    flexDirection = "items-center",
    className,
    xl,
    lg,
    sm
}): ReactElement => {

    let style_pt: string = notIcon ? "pt-6 " : "pt-16 "
    let style_mt: string = notIcon ? " " : "mt-14 "
    let style_rounded: string = notFooter ? "rounded-3xl " : "rounded-t-3xl "
    let xl_val: string = xl ? xl : "mx-64"
    let lg_val: string = lg ? lg : "mx-32"
    let sm_val: string = sm ? sm : "mx-12"
    
    return(
        <div className={ "xl:" + xl_val + " lg:" + lg_val + " sm:" + sm_val + " mx-10 pl-6 pr-6 bg-white shadow-xl flex flex-col " + flexDirection + " " + style_pt + style_mt + style_rounded + " " + className}>
            {children}
        </div>
    )
}

export { CardContent }