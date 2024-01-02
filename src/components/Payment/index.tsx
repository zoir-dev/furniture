'use client'
import Image from "next/image"
import { Button, Input } from '@/material'
import { Slide } from "react-awesome-reveal"

const PaymentC = () => {
    return (
        <Slide direction="up" triggerOnce>
            <div className="flex flex-col gap-[60px] pt-[70px] md:pt-[50px] smd:pt-[40px] md:gap-[40px] smd:gap-[30px] pb-[150px] md:pb-[100px] smd:pb-[40px] max-w-[687px]">
                <h2>Payment</h2>
                <div className="flex gap-[60px] md:gap-[40px] smd:gap-[20px]">
                    <Image src='/visa.png' alt="visa" width={130} height={40} className="px-[20px] shadow-md duration-500 hover:shadow-xl cursor-pointer rounded-[10px] smd:w-[100px] sm:!w-[80px]" />
                    <Image src='/payment.png' alt="visa" width={130} height={40} className="px-[20px] py-[10px] shadow-md duration-500 hover:shadow-xl cursor-pointer rounded-[10px] smd:w-[100px] sm:!w-[80px]" />
                    <Image src='/paypal.png' alt="visa" width={130} height={40} className="px-[20px] py-[10px] shadow-md duration-500 hover:shadow-xl cursor-pointer rounded-[10px] smd:w-[100px] sm:!w-[80px]" />
                </div>
                <form className='flex flex-col gap-[25px] smd:gap-[15px] pt-[25px] smd:pt-[20px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <label htmlFor="name">Card name</label>
                        <Input id='name' variant='outlined' label='Name' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <label htmlFor="number">Card number</label>
                        <Input id='number' label='Card number' />
                    </div>
                    <div className='flex flex-col gap-[5px]'>
                        <label htmlFor="message">Message</label>
                        <Input id='message' label='Message' />
                    </div>
                    <div className="flex justify-between gap-[15px] sm:flex-col">
                        <div className='flex flex-col gap-[5px]'>
                            <label htmlFor="message">Expiration date</label>
                            <Input type="date" id='message' />
                        </div>
                        <div className='flex flex-col gap-[5px]'>
                            <label htmlFor="cvv">Cvv</label>
                            <Input id='cvv' label='****' />
                        </div>
                    </div>
                </form>
                <Button className="w-full bg-second active:scale-[0.97] text-[20px] shadow-xl md:text-[18px] smd:text-[16px] capitalize">Pay now</Button>
            </div>
        </Slide>
    )
}

export default PaymentC