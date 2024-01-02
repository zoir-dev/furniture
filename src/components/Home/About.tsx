'use client'
import { Button } from '@/material'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
const About = () => {
    return (
        <Slide direction='up' triggerOnce>
            <div className='flex flex-col gap-[75px] md:gap-[50px] smd:gap-[20px] items-center relative'>
                <Image src='/second.png' alt='second img' width={228} height={442} className='absolute top-[-75px] right-0 md:w-[180px] smd:w-[150px] sm:!w-[120px]' />
                <div className='flex w-full flex-col gap-[18px] '>
                    <h2 className='text-center'>About us</h2>
                    <div className='flex flex-col gap-[36px] smd:gap-[16px] pr-[180px] md:pr-[140px] smd:pr-[110px] sm:!pr-[50px]'>
                        <p className='text-[18px] smd:text-[16px] sm:!text-[14px]'>Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.</p>
                        <p className='text-[18px] smd:text-[16px] sm:!text-[14px]'>Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.</p>
                    </div>
                </div>
                <Button size='sm' className='text-[15px] active:scale-[0.97] bg-second w-[150px] h-[48px] smd:w-[120px] smd:h-[40px] smd:text-[14px]'>Read more</Button>
            </div>
        </Slide>
    )
}

export default About