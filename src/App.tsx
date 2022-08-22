import { Fragment, ReactElement } from 'react'
import { Card } from './components/Card'
import { CardContent } from './components/Card/CardContent'
import { CardFooter } from './components/Card/CardFooter'
import { CardIcon } from './components/Card/CardIcon'
import { IconText } from './components/IconText'

interface IProp {}

const App : React.FC<IProp> = ():ReactElement => {

  return (
    <Fragment>
      <Card>
        <CardIcon avatar='./avatar.jpg' />
        <CardContent>
          <div className="text-xl font-medium text-center">Yvonne Cheung</div>
          <p className="text-slate-500 my-2 text-center rounded-full bg-[#F0F0F5] px-4">Foreign trade clerk</p>
          <div className='my-6 flex flex-row space-x-6 justify-center'>
            <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
            <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
            <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
            <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex flex-row justify-center h-1/2'>
            <IconText icon='./icon_calendar.png' text='August 19, 1995' />
            <IconText icon='./icon_position.png' text='Shuntak, China' />
            <IconText icon='./icon_email.png' text='956863594@163.com' />
            <IconText icon='./icon_phone.png' text='+86 150 1585 0220' />
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardContent notIcon>
          <div className="text-xl font-medium text-center">Yvonne Cheung</div>
          <p className="text-slate-500 my-2 text-center rounded-full bg-[#F0F0F5] px-4">Foreign trade clerk</p>
          <div className='my-6 flex flex-row space-x-6 justify-center'>
            <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
            <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
            <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
            <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex flex-row justify-center h-1/2'>
            <IconText icon='./icon_calendar.png' text='August 19, 1995' />
            <IconText icon='./icon_position.png' text='Shuntak, China' />
            <IconText icon='./icon_email.png' text='956863594@163.com' />
            <IconText icon='./icon_phone.png' text='+86 150 1585 0220' />
          </div>
        </CardFooter>
      </Card>
    </Fragment>
  )
}

export { App }
