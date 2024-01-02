'use client'
import { Button } from '@/material'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
const Main = () => {
  return (
    <Slide direction='up' triggerOnce>
      <div className='flex items-end w-full justify-between gap-[20px] md:flex-col-reverse md:items-center'>
        <div className='flex flex-col items-start md:items-center gap-[55px] lg:gap-[40px] smd:gap-[20px]'>
          <div className='flex flex-col gap-[16px] md:items-center lg:gap-[5px]'>
            <h1 className='text-main font-bold text-[60px] xl:text-[50px] lg:!text-[40px] md:!text-[30px] smd:!text-[28px]'>Lorem ipsum dolor</h1>
            <p className='text-[18px] max-w-[504px] md:text-[16px] smd:text-[14px] md:text-center'>Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.</p>
          </div>
          <Button size='sm' className='text-[15px] active:scale-[0.97] bg-second w-[150px] h-[48px] smd:w-[120px] smd:h-[40px] smd:text-[14px]'>Shop now</Button>
        </div>
        <Image src='/main.png' alt='Main img' width={477} height={318} className='max-w-full lg:w-[50%] md:min-w-[350px]
      sm:!w-full sm:!min-w-[300px]' />
      </div>
    </Slide>
  )
}

export default Main