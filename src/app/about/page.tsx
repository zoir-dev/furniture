'use client'
import Subscribe from '@/components/Subscribe'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'

const About = () => {
    return (
        <div className='flex flex-col gap-[100px] md:gap-[60px] smd:gap-[40px] pb-[80px] md:pb-[60px] smd:pb-[40px]'>
            <Slide direction='up' triggerOnce>
                <div style={{
                    background: `linear-gradient(rgba(17, 70, 131, 0.50), rgba(17, 70, 131, 0.50)), url(/aboutbg.png) center/cover no-repeat`
                }} className='w-full aspect-[1134/311] rounded-[25px] flex flex-col items-center justify-center gap-[15px] smd:!py-[20px]'>
                    <h2 className='text-white'>About us</h2>
                    <p className='max-w-[778px] text-white text-[18px] md:text-[16px] smd:text-[14px] px-[40px] sm:px-[20px]'>Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </Slide>
            <Slide direction='up' triggerOnce>
                <div className='flex gap-[30px] items-center justify-between md:flex-col-reverse md:text-center'>
                    <div className='max-w-[565px] flex flex-col gap-[11px]'>
                        <h3 className='text-[32px] md:text-[28px] smd:text-[22px] font-bold'>Lorem ipsum dolor sit amet</h3>
                        <p className='text-[18px] md:text-[16px] smd:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.</p>
                        <p className='text-[18px] md:text-[16px] smd:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.</p>
                    </div>
                    <Image src='https://picsum.photos/480' alt='img' loading='lazy' width={480} height={403} className='rounded-[20px] w-full max-w-[480px]' />
                </div>
            </Slide>
            <Subscribe />
        </div>
    )
}

export default About