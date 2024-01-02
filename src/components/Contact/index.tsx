'use client'
import { Checkbox, Input } from '@/material'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
const ContactC = () => {
    return (
        <div className='flex flex-col gap-[80px] md:gap-[50px] smd:gap-[30px] pt-[100px] md:pt-[60px] smd:pt-[40px]'>
            <Slide direction='up' triggerOnce>

                <div className='flex items-start smd:flex-col-reverse smd:items-center justify-between gap-[20px]'>
                    <div className='w-full max-w-[616px]'>
                        <h2>Contact us</h2>
                        <p className='text-[18px] md:text-[16px] smd:text-[14px]'>Lorem ipsum dolor sit amet consectetur. Eu nulla </p>
                        <form className='flex flex-col gap-[25px] smd:gap-[15px] pt-[25px] smd:pt-[20px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor="name">Name</label>
                                <Input id='name' variant='outlined' label='Name' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor="email">Email</label>
                                <Input id='email' label='Email' />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <label htmlFor="message">Message</label>
                                <Input id='message' label='Message' />
                            </div>
                            <Checkbox
                                label={
                                    <p
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the Terms
                                    </p>
                                }
                                containerProps={{ className: "-ml-2.5" }}
                            />
                        </form>
                    </div>
                    <Image src='/contact.png' width={459} height={537} className='w-full max-w-[459px]' />
                </div>
            </Slide>
            <div className='flex flex-wrap justify-between pb-[32px] smd:pb-[20px] gap-[25px] smd:justify-center smd:text-center'>
                <Slide direction='up' triggerOnce>
                    <div className='flex flex-col gap-[20px] smd:gap-[10px] smd:items-center'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99994 8.00098H39.9999C42.2091 8.00098 43.9999 9.79184 43.9999 12.001V36.001C43.9999 38.2102 42.2091 40.001 39.9999 40.001H7.99994C5.7908 40.001 3.99994 38.2102 3.99994 36.001V12.001C3.99994 9.79184 5.7908 8.00098 7.99994 8.00098ZM27.2999 30.901L39.9999 22.001V17.801L25.2999 28.101C24.5181 28.6436 23.4817 28.6436 22.6999 28.101L7.99994 17.801V22.001L20.6999 30.901C22.6819 32.2864 25.3179 32.2864 27.2999 30.901Z" fill="#114683" />
                        </svg>
                        <h5 className='text-[24px] font-bold md:text-[20px] smd:text-[18px]'>Email</h5>
                        <p className='text-[16px] smd:text-[14px] max-w-[304px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                        <a href='' className='text-[16px] smd:text-[14px] underline'>hello@relume.io</a>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                    <div className='flex flex-col gap-[20px] smd:gap-[10px] smd:items-center'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36 4H12C7.58172 4 4 7.58172 4 12V43C4 43.5522 4.44772 44 5 44C5.26424 43.9984 5.51666 43.8902 5.7 43.7L11.7 37.7C12.8487 36.5816 14.3971 35.9694 16 36H36C40.4182 36 44 32.4182 44 28V12C44 7.58172 40.4182 4 36 4ZM28 25C28 25.5522 27.5522 26 27 26H13C12.4477 26 12 25.5522 12 25V23C12 22.4478 12.4477 22 13 22H27C27.5522 22 28 22.4478 28 23V25ZM35 18C35.5522 18 36 17.5523 36 17V15C36 14.4477 35.5522 14 35 14H13C12.4477 14 12 14.4477 12 15V17C12 17.5523 12.4477 18 13 18H35Z" fill="#114683" />
                        </svg>
                        <h5 className='text-[24px] font-bold md:text-[20px] smd:text-[18px]'>Live chat</h5>
                        <p className='text-[16px] smd:text-[14px] max-w-[304px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                        <a href='' className='text-[16px] smd:text-[14px] underline'>Start new chat</a>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                    <div className='flex flex-col gap-[20px] smd:gap-[10px] smd:items-center'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34 42.0006C30.6926 41.9976 27.4366 41.1802 24.52 39.6206L23.62 39.1206C17.4015 35.7772 12.3034 30.679 8.96 24.4606L8.46 23.5606C6.85964 20.6274 6.01426 17.3419 6 14.0005V12.6605C5.99916 11.5945 6.42392 10.5721 7.18 9.82053L10.56 6.44053C10.8883 6.10973 11.3516 5.9503 11.8139 6.00906C12.2762 6.06782 12.685 6.33814 12.92 6.74054L17.42 14.4605C17.8751 15.2463 17.7437 16.2401 17.1 16.8805L13.32 20.6606C13.0061 20.971 12.9329 21.4506 13.14 21.8406L13.84 23.1606C16.3541 27.8174 20.1786 31.635 24.84 34.1406L26.16 34.8606C26.55 35.0676 27.0296 34.9944 27.34 34.6806L31.12 30.9006C31.7604 30.257 32.7542 30.1256 33.54 30.5806L41.26 35.0806C41.6624 35.3156 41.9328 35.7244 41.9914 36.1866C42.0502 36.649 41.8908 37.1124 41.56 37.4406L38.18 40.8206C37.4284 41.5766 36.406 42.0014 35.34 42.0006H34Z" fill="#114683" />
                        </svg>
                        <h5 className='text-[24px] font-bold md:text-[20px] smd:text-[18px]'>Phone</h5>
                        <p className='text-[16px] smd:text-[14px] max-w-[304px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                        <a href='' className='text-[16px] smd:text-[14px] underline'>+1 (555) 000-0000</a>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce>
                    <div className='flex flex-col gap-[20px] smd:gap-[10px] smd:items-center'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.0003 3.99902C16.0124 3.99902 9.51379 10.4976 9.51379 18.4854C9.51379 28.3986 22.4777 42.9516 23.0297 43.5662C23.5481 44.1436 24.4533 44.1426 24.9709 43.5662C25.5227 42.9516 38.4867 28.3986 38.4867 18.4854C38.4865 10.4976 31.9881 3.99902 24.0003 3.99902ZM24.0003 25.774C19.9814 25.774 16.7118 22.5044 16.7118 18.4854C16.7118 14.4665 19.9814 11.197 24.0003 11.197C28.0191 11.197 31.2887 14.4666 31.2887 18.4855C31.2887 22.5044 28.0191 25.774 24.0003 25.774Z" fill="#114683" />
                        </svg>
                        <h5 className='text-[24px] font-bold md:text-[20px] smd:text-[18px]'>Office</h5>
                        <p className='text-[16px] smd:text-[14px] max-w-[304px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                        <a href='' className='text-[16px] smd:text-[14px] underline'>123 Sample St, Sydney NSW 2000 AU</a>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default ContactC