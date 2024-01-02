'use client'
import { Button, Input } from '@/material'
import { useState } from 'react'
import { Slide } from 'react-awesome-reveal'
const Subscribe = () => {
    const [value, setValue] = useState('')
    return (
        <Slide direction='up' triggerOnce>
            <div className='flex flex-col gap-[50px] md:gap-[45px] smd:gap-[30px] text-center'>
                <div>
                    <h2>Keep in touch</h2>
                    <p className='text-[18px] md:text-[16px] smd:text-[14px]'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div style={{ backgroundImage: 'url(/bg.png)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }} className='w-full aspect-[1137/239] grid place-items-center'>
                    <div className="relative flex w-[90%]">
                        <Input
                            type="email"
                            variant='static'
                            placeholder="Email Address"
                            className="w-full bg-white !text-[20px] smd:!text-[16px] !pl-[10px] !py-[10px] smd:!py-[5px] box-content !border-none rounded-[5px]"
                            labelProps={{
                                className: "hidden"
                            }}
                            containerProps={{
                                className: "min-w-0 !border-none h-[50px] smd:h-[35px] "
                            }}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <Button size='sm' className='text-[15px] !absolute right-0 top-[11px] smd:top-[3px] smd:right-[-7px] rounded active:scale-[0.97] bg-second w-[150px] h-[48px] smd:w-[120px] smd:h-[40px] smd:text-[14px]' onClick={() => setValue('')}>Subscribe</Button>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default Subscribe