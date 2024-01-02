'use client'
import { data } from './data'
import Card from '@/themes/Card'
import Marquee from 'react-fast-marquee'
import { Slide } from 'react-awesome-reveal'

const Trending = () => {
    return (
        <Slide direction='up' triggerOnce>
            <div className='w-full' id='testimonials'>
                <div>
                    <h2>Trending products</h2>
                    <p className='text-[18px] smd:text-[16px] sm:!text-[14px]'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className='w-[120%] ml-[-10%]'>
                    <Marquee loop={1} className='' autoFill pauseOnHover pauseOnClick>
                        {data.map((c, index) => (
                            <div className='px-[20px] pt-[30px] pb-[50px]' key={index}>
                                <Card c={c} i={index} href={`${'/shop/' + index}`} />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </Slide>
    )
}

export default Trending