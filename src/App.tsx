import { Carousel, Tooltip } from 'flowbite-react'
import { Fragment, ReactElement } from 'react'
import { Card } from './components/Card'
import { CardContent } from './components/Card/CardContent'
import { CardFooter } from './components/Card/CardFooter'
import { CardIcon } from './components/Card/CardIcon'
import { IconText } from './components/IconText'
import avatar from './assets/avatar.jpg'
import whatsapp from './assets/whatsapp.jpeg'
import icon_whatsapp from './assets/icon_whatsapp.png'
import instagram from './assets/instagram.png'
import icon_wechat from './assets/icon_wechat.png'
import icon_facebook from './assets/icon_facebook.png'
import icon_instagram from './assets/icon_instagram.png'
import icon_calendar from './assets/icon_calendar.png'
import icon_position from './assets/icon_position.png'
import icon_email from './assets/icon_email.png'
import icon_phone from './assets/icon_phone.png'

interface IProp {}

const App : React.FC<IProp> = ():ReactElement => {

  return (
    <Fragment>
      {/* personal profile */}
      <Card>
        <CardIcon avatar={avatar} />
        <CardContent>
          <div className="text-xl font-medium text-center">Yvonne Cheung</div>
          <div className='flex flex-row'>
            <p className="text-slate-500 my-2 text-center rounded-full bg-[#F0F0F5] px-4 mr-2">Foreign Trade Manager</p>
            <p className="text-slate-500 my-2 text-center rounded-full bg-[#F0F0F5] px-4 mr-2">Supervisor</p>
          </div>
          <div className='my-6 flex flex-row justify-center'>
            <Tooltip 
              style="light"
              content={(
                <Fragment>
                  <img className="h-56 w-56" src={whatsapp} alt="whatsapp qrcode" />
                </Fragment>
              )}
            >
              <img className="h-4 w-4 mx-4" src={icon_whatsapp} alt="whatsapp icon" />
            </Tooltip>
            <Tooltip 
              style="light"
              content={(
                <Fragment>
                  <img className="h-56 w-56" src={instagram} alt="whatsapp qrcode" />
                </Fragment>
              )}
            >
              <img className="h-4 w-4 mx-4" src={icon_wechat} alt="wechat icon" />
            </Tooltip>
            <img className="h-4 w-4 mx-4" src={icon_facebook} alt="facebook icon" />
            <img className="h-4 w-4 mx-4" src={icon_instagram} alt="instagram icon" />
          </div>
        </CardContent>
        <CardFooter>
          <div className='flex flex-row justify-center h-1/2'>
            <IconText icon={icon_calendar} text='August 19, 1995' />
            <IconText icon={icon_position} text='Shuntak, China' />
            <IconText icon={icon_email} text='956863594@163.com' />
            <IconText icon={icon_phone} text='+86 150 1585 0220' />
          </div>
        </CardFooter>
      </Card>
      {/* About Me*/}
      <Card>
      
        <CardContent notIcon flexDirection='items-start'>
          <div className="text-xl font-medium w-full">About Me</div>
          <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
          <p className='indent-10'>
            I love life, I love traveling and taking pictures. 
            I have been to Changsha, Shanghai, Guizhou and Shantou 
            to experience different lives. I have a lively personality, 
            are good at sociability, and have the courage to face challenges. 
            My motto is: do what I dare to do, think I dare to think.
          </p>
          <br/>
          <div className="w-full h-96">
            <Carousel leftControl=" " rightControl=" " indicators={false}>
              <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..."/>
              <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..."/>
              <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..."/>
              <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..."/>
              <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..."/>
            </Carousel>
          </div>
          <div className='my-6 flex flex-row space-x-6 justify-center'>
            <img className="h-4 w-4" src={icon_whatsapp} alt="whatsapp icon" />
            <img className="h-4 w-4" src={icon_wechat} alt="wechat icon" />
            <img className="h-4 w-4" src={icon_facebook} alt="facebook icon" />
            <img className="h-4 w-4" src={icon_instagram} alt="instream icon" />
          </div>
          
        </CardContent>
        <CardFooter className={'mb-12'}>
          <CardContent notIcon notFooter flexDirection='items-start' xl='mx-10' lg='mx-5' sm='mx-3'>
            <div className="text-xl font-medium w-full">About Me</div>
            <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
            <div className='my-6 flex flex-row space-x-6 justify-center'>
            <img className="h-4 w-4" src={icon_whatsapp} alt="whatsapp icon" />
            <img className="h-4 w-4" src={icon_wechat} alt="wechat icon" />
            <img className="h-4 w-4" src={icon_facebook} alt="facebook icon" />
            <img className="h-4 w-4" src={icon_instagram} alt="instream icon" />
            </div>
          </CardContent>
          <CardContent notIcon notFooter flexDirection='items-start' xl='mx-10' lg='mx-5' sm='mx-3' className={'mt-6'}>
            <div className="text-xl font-medium w-full">About Me</div>
            <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
            <div className='my-6 flex flex-row space-x-6 justify-center'>
            <img className="h-4 w-4" src={icon_whatsapp} alt="whatsapp icon" />
            <img className="h-4 w-4" src={icon_wechat} alt="wechat icon" />
            <img className="h-4 w-4" src={icon_facebook} alt="facebook icon" />
            <img className="h-4 w-4" src={icon_instagram} alt="instream icon" />
            </div>
          </CardContent>
          <CardContent notIcon notFooter flexDirection='items-start' xl='mx-10' lg='mx-5' sm='mx-3' className={'mt-6'}>
            <div className="text-xl font-medium w-full">About Me</div>
            <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
            <div className='my-6 flex flex-row space-x-6 justify-center'>
            <img className="h-4 w-4" src={icon_whatsapp} alt="whatsapp icon" />
            <img className="h-4 w-4" src={icon_wechat} alt="wechat icon" />
            <img className="h-4 w-4" src={icon_facebook} alt="facebook icon" />
            <img className="h-4 w-4" src={icon_instagram} alt="instream icon" />
            </div>
          </CardContent>
        </CardFooter>
      </Card>
    </Fragment>
  )
}

export { App }
