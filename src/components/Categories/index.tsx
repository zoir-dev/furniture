'use client'
import { data } from './data'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'

const Categories = () => {
    return (
        <div className='w-full text-center'>
            <Slide direction='up' triggerOnce>
                <h2>Categories</h2>
                <p className='text-[18px] smd:text-[16px] sm:!text-[14px]'>Lorem ipsum dolor sit amet consectetur</p>
            </Slide>
            <div className='grid grid-cols-3 md:grid-cols-2 smd:grid-cols-1 smd:justify-center justify-between w-full gap-x-[18px] gap-y-[60px] md:gap-y-[40px] smd:gap-y-[16px] pt-[60px] md:pt-[40px] smd:pt-[25px]'>
                {
                    data.map((d, index) => (
                        <Slide direction='up' triggerOnce>
                            <div className='w-full max-w-[370px] overflow-hidden rounded-[20px] pb-[54px] shadow-lg cursor-pointer hover:!shadow-2xl duration-500 smd:mx-auto md:pb-[40px] smd:pb-[25px]'>
                                <Image src={`https://picsum.photos/36${index}`} alt='category img' width={367} height={302} className='rounded-br-[30px] w-full mb-[20px] md:mb-[10px]' />
                                <h3 className='text-[32px] md:text-[25px] text-[#222]'>{d.title}</h3>
                                <p className='text-[24px] smd:text-[20px] text-[#114683]'>{d.count}</p>
                            </div>
                        </Slide>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories