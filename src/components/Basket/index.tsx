'use client'
import Image from "next/image"
import { Button } from '@/material'
import Link from "next/link"
import { Slide } from "react-awesome-reveal"
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "@/Redux/features/baskets"

const BasketC = () => {
    const dispatch = useDispatch()
    const baskets = useSelector((state: any) => state.baskets.items)

    console.log(baskets);


    return (
        <div className="py-[70px] flex flex-col gap-[70px] md:gap-[50px] smd:gap-[30px]">
            <Slide direction="up" triggerOnce>
                <h2>Cart</h2>
            </Slide>
            <div>
                <Slide direction="up" triggerOnce>
                    <div className="flex justify-between w-[50%] md:w-[70%] smd:w-[80%] sm:w-[90%]">
                        <h5 className="text-[20px] md:text-[18px] smd:text-[16px] font-bold">Product</h5>
                        <h5 className="text-[20px] md:text-[18px] smd:text-[16px] font-bold">Quantity</h5>
                        <h5 className="text-[20px] md:text-[18px] smd:text-[16px] font-bold">Price</h5>
                    </div>
                </Slide>
                <div className="flex flex-col gap-[25px] md:gap-[20px] smd:gap-[15px] pt-[40px] md:pt-[30px] smd:pt-[20px]">
                    {baskets.map((b: any) => (
                        <Slide direction="up" triggerOnce key={b.id}>
                            <div className="flex justify-between items-center px-[21px] py-[18px] smd:px-[10px] smd:py-[10px] rounded-[20px] shadow-lg duration-500 hover:shadow-xl">
                                <div className="flex items-center justify-between w-[50%] md:w-[70%] smd:w-[80%] sm:w-[90%]">
                                    <Link href={'/shop/' + b.id}>
                                        <Image src={b.img} alt="product img" width={160} height={131} className="rounded-[10px] md:w-[120px] smd:w-[80px] sm:!w-[60px]" />
                                    </Link>
                                    <div className="flex items-center gap-[6px] sm:gap-0">
                                        <Button variant="text" className="w-[50px] aspect-[5/4] border-[1px] flex items-center justify-center border-second rounded-[10px] cursor-pointer select-none text-[18px] smd:text-[20px] text-second md:scale-90
                                    smd:scale-75 sm:scale-[60]  duration-500" onClick={() => dispatch(addItem(b))}>+</Button>
                                        <Button variant="text" className="w-[50px] aspect-[5/4] flex items-center justify-center border-[1px] border-second rounded-[10px] cursor-pointer select-none text-[18px] smd:text-[20px] text-second md:scale-90
                                    smd:scale-75 sm:scale-[60] duration-500">{b.count}</Button>
                                        <Button variant="text" className="w-[50px] aspect-[5/4] flex items-center justify-center border-[1px] border-second rounded-[10px] cursor-pointer select-none text-[18px] smd:text-[20px] text-second md:scale-90
                                    smd:scale-75 sm:scale-[60] duration-500"  onClick={() => dispatch(removeItem(b))}>-</Button>
                                    </div>
                                    <p className='text-[22px] md:text-[20px] smd:text-[16px] font-bold text-[#114683]'>$ {b?.much}</p>
                                </div>
                                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer smd:w-[35px]" onClick={() => dispatch(removeItem(b))} >
                                    <path d="M24.5003 26.2416L30.1795 31.9208C30.5385 32.2798 30.9955 32.4593 31.5503 32.4593C32.1052 32.4593 32.5621 32.2798 32.9212 31.9208C33.2802 31.5618 33.4597 31.1048 33.4597 30.55C33.4597 29.9951 33.2802 29.5382 32.9212 29.1791L27.242 23.5L32.9212 17.8208C33.2802 17.4618 33.4597 17.0048 33.4597 16.45C33.4597 15.8951 33.2802 15.4382 32.9212 15.0791C32.5621 14.7201 32.1052 14.5406 31.5503 14.5406C30.9955 14.5406 30.5385 14.7201 30.1795 15.0791L24.5003 20.7583L18.8212 15.0791C18.4621 14.7201 18.0052 14.5406 17.4503 14.5406C16.8955 14.5406 16.4385 14.7201 16.0795 15.0791C15.7205 15.4382 15.541 15.8951 15.541 16.45C15.541 17.0048 15.7205 17.4618 16.0795 17.8208L21.7587 23.5L16.0795 29.1791C15.7205 29.5382 15.541 29.9951 15.541 30.55C15.541 31.1048 15.7205 31.5618 16.0795 31.9208C16.4385 32.2798 16.8955 32.4593 17.4503 32.4593C18.0052 32.4593 18.4621 32.2798 18.8212 31.9208L24.5003 26.2416ZM24.5003 43.0833C21.7913 43.0833 19.2455 42.5689 16.8628 41.5401C14.4802 40.5113 12.4076 39.1164 10.6451 37.3552C8.88262 35.5927 7.48763 33.5201 6.46016 31.1375C5.43269 28.7548 4.9183 26.209 4.91699 23.5C4.91699 20.7909 5.43138 18.2451 6.46016 15.8625C7.48894 13.4798 8.88392 11.4073 10.6451 9.64475C12.4076 7.88225 14.4802 6.48727 16.8628 5.45979C19.2455 4.43232 21.7913 3.91793 24.5003 3.91663C27.2094 3.91663 29.7552 4.43102 32.1378 5.45979C34.5205 6.48857 36.593 7.88356 38.3555 9.64475C40.118 11.4073 41.5137 13.4798 42.5424 15.8625C43.5712 18.2451 44.085 20.7909 44.0837 23.5C44.0837 26.209 43.5693 28.7548 42.5405 31.1375C41.5117 33.5201 40.1167 35.5927 38.3555 37.3552C36.593 39.1177 34.5205 40.5133 32.1378 41.5421C29.7552 42.5709 27.2094 43.0846 24.5003 43.0833ZM24.5003 39.1666C28.8739 39.1666 32.5784 37.6489 35.6139 34.6135C38.6493 31.5781 40.167 27.8736 40.167 23.5C40.167 19.1263 38.6493 15.4218 35.6139 12.3864C32.5784 9.351 28.8739 7.83329 24.5003 7.83329C20.1267 7.83329 16.4222 9.351 13.3868 12.3864C10.3514 15.4218 8.83366 19.1263 8.83366 23.5C8.83366 27.8736 10.3514 31.5781 13.3868 34.6135C16.4222 37.6489 20.1267 39.1666 24.5003 39.1666Z" fill="black" fill-opacity="0.5" />
                                </svg>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
            <Slide direction="up" triggerOnce>
                <div className="flex justify-between">
                    <Link href='/shop' className="flex items-center gap-[10px] text-[18px] md:text-[16px] smd:text-[14px] font-bold group">
                        <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-[-15px] duration-500">
                            <g clip-path="url(#clip0_1_989)">
                                <path d="M4.7082 16.1478C4.44014 16.4159 4.28955 16.7795 4.28955 17.1587C4.28955 17.5379 4.44014 17.9015 4.7082 18.1696L12.7971 26.2586C13.0668 26.519 13.428 26.6631 13.8029 26.6599C14.1778 26.6566 14.5365 26.5062 14.8016 26.2411C15.0667 25.976 15.2171 25.6174 15.2203 25.2425C15.2236 24.8676 15.0795 24.5064 14.819 24.2367L9.1709 18.5886H28.107C28.4862 18.5886 28.8499 18.438 29.1181 18.1698C29.3862 17.9016 29.5369 17.5379 29.5369 17.1587C29.5369 16.7795 29.3862 16.4158 29.1181 16.1476C28.8499 15.8795 28.4862 15.7288 28.107 15.7288H9.1709L14.819 10.0807C15.0795 9.81105 15.2236 9.44985 15.2203 9.07494C15.2171 8.70003 15.0667 8.34139 14.8016 8.07628C14.5365 7.81116 14.1778 7.66078 13.8029 7.65752C13.428 7.65427 13.0668 7.79839 12.7971 8.05886L4.7082 16.1478Z" fill="#114683" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_989">
                                    <rect width="34.3175" height="34.3175" fill="white" transform="matrix(-1 0 0 1 34.3174 0)" />
                                </clipPath>
                            </defs>
                        </svg>
                        Continue shopping
                    </Link>
                    <p className="text-[20px] md:text-[18px] smd:text-[16px] text-[#222222B2]">Total: <span className="text-[#222] font-bold text-[22px] md:text-[20px] smd:text-[18px]">$ {baskets.reduce((total: any, item: any) => total + item.much * item.count, 0)}</span></p>
                </div>
            </Slide>
            <Slide direction="up" triggerOnce className="w-full text-center">
                <Link href='/basket/payment'>
                    <Button className="max-w-[784px] w-full bg-second active:scale-[0.97] text-[24px] shadow-xl md:text-[20px] smd:text-[16px] capitalize">Payment</Button>
                </Link>
            </Slide>
        </div>
    )
}

export default BasketC