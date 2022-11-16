/*
 * @Author: kityeungfe kityeungfe@outlook.com
 * @Date: 2022-08-23 03:23:44
 * @LastEditors: kityeungfe kityeungfe@outlook.com
 * @LastEditTime: 2022-08-23 04:40:43
 * @FilePath: \yvonne\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Carousel, Tooltip } from 'flowbite-react'
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
      {/* personal profile */}
      <Card>
        <CardIcon avatar='./avatar.jpg' />
        <CardContent>
          <div className="text-xl font-medium text-center">Yvonne Cheung</div>
          <p className="text-slate-500 my-2 text-center rounded-full bg-[#F0F0F5] px-4">Foreign trade clerk</p>
          <div className='my-6 flex flex-row justify-center'>
            <Tooltip 
              style="light"
              content={(
                <Fragment>
                  <div className="text-xl font-medium w-full">About Me</div>
                  <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
                  <div className='my-6 flex flex-row space-x-6 justify-center'>
                    <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
                    <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
                    <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
                    <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
                  </div>
                </Fragment>
              )}
            >
              <img className="h-4 w-4 mx-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
            </Tooltip>
            <Tooltip 
              style="light"
              content={(
                <Fragment>
                  <div className="text-xl font-medium w-full">About Me</div>
                  <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
                  <div className='my-6 flex flex-row space-x-6 justify-center'>
                    <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
                    <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
                    <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
                    <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
                  </div>
                </Fragment>
              )}
            >
              <img className="h-4 w-4 mx-4" src={'./icon_wechat.png'} alt="wechat icon" />
            </Tooltip>
            <img className="h-4 w-4 mx-4" src={'./icon_facebook.png'} alt="facebook icon" />
            <img className="h-4 w-4 mx-4" src={'./icon_instream.png'} alt="instream icon" />
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
      {/* About Me*/}
      <Card>
      
        <CardContent notIcon flexDirection='items-start'>
          <div className="text-xl font-medium w-full">About Me</div>
          <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
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
            <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
            <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
            <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
            <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
          </div>
          
        </CardContent>
        <CardFooter className={'mb-12'}>
          <CardContent notIcon notFooter flexDirection='items-start' xl='mx-10' lg='mx-5' sm='mx-3'>
            <div className="text-xl font-medium w-full">About Me</div>
            <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
            <div className='my-6 flex flex-row space-x-6 justify-center'>
              <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
              <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
              <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
              <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
            </div>
          </CardContent>
          <CardContent notIcon notFooter flexDirection='items-start' xl='mx-10' lg='mx-5' sm='mx-3' className={'mt-6'}>
            <div className="text-xl font-medium w-full">About Me</div>
            <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
            <div className='my-6 flex flex-row space-x-6 justify-center'>
              <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
              <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
              <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
              <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
            </div>
          </CardContent>
          <CardContent notIcon notFooter flexDirection='items-start' xl='mx-10' lg='mx-5' sm='mx-3' className={'mt-6'}>
            <div className="text-xl font-medium w-full">About Me</div>
            <div className="w-14 h-4 text-slate-500 my-2 rounded-full bg-[#2422c2] px-4"></div>
            <div className='my-6 flex flex-row space-x-6 justify-center'>
              <img className="h-4 w-4" src={'./icon_whatsapp.png'} alt="whatsapp icon" />
              <img className="h-4 w-4" src={'./icon_wechat.png'} alt="wechat icon" />
              <img className="h-4 w-4" src={'./icon_facebook.png'} alt="facebook icon" />
              <img className="h-4 w-4" src={'./icon_instream.png'} alt="instream icon" />
            </div>
          </CardContent>
        </CardFooter>
      </Card>
    </Fragment>
  )
}

export { App }
