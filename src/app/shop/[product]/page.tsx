'use client'
import Subscribe from "@/components/Subscribe"
import { rating } from "@/utils/rating"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Slide } from "react-awesome-reveal"
import { Button } from '@/material'
import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "@/Redux/features/baskets"
import { data } from "@/components/Trending/data"

const Product = () => {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const baskets = useSelector((state: any) => state.baskets.items)

    return (
        <div className="pb-[60px] md:pb-[40px] smd:pb-[30px] flex flex-col gap-[100px] md:gap-[60px] smd:gap-[40px] pt-[100px] md:pt-[60px] smd:pt-[40px]">
            <div className="flex items-start justify-between gap-[30px] md:flex-col md:items-center">
                <Slide direction="up" triggerOnce>
                    <div className="flex flex-col gap-[20px] max-w-[456px]">
                        <Image src={`https://picsum.photos/24${pathname.slice(6)}`} width={456} height={382} className="object-cover rounded-[13px] w-full max-w-[456px]" alt="product img" />
                        <div className="flex gap-[20px]">
                            <Image src={`https://picsum.photos/24${pathname.slice(6) + 1}`} width={142} height={117} className="object-cover rounded-[5px] w-full max-w-[142px]" alt="product img" />
                            <Image src={`https://picsum.photos/24${pathname.slice(6) + 2}`} width={142} height={117} className="object-cover rounded-[5px] w-full max-w-[142px]" alt="product img" />
                            <Image src={`https://picsum.photos/24${pathname.slice(6) + 3}`} width={142} height={117} className="object-cover rounded-[5px] w-full max-w-[142px]" alt="product img" />
                        </div>
                    </div>
                </Slide>
                <div className="flex flex-col gap-[40px] pt-[20px] md:text-center">
                    <Slide direction="up" triggerOnce>
                        <div className="flex flex-col gap-[20px]">
                            <h2>Product details</h2>
                            <p className="max-w-[565px] text-[18px] md:text-[16px] smd:text-[14px]">Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.</p>
                            <div className="flex items-center gap-[15px] md:justify-center smd:flex-wrap">
                                {rating(4, 25)}
                                <span className="w-[8px] aspect-square rounded-full bg-[#DBDBDB]" />
                                <div className="flex items-center gap-[10px]">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33338 4.31007H21.5737V17.2403H5.59408L4.33338 18.501V4.31007ZM4.33338 2.15503C3.14811 2.15503 2.18912 3.1248 2.18912 4.31007L2.17834 23.7054L6.48842 19.3953H21.5737C22.759 19.3953 23.7287 18.4256 23.7287 17.2403V4.31007C23.7287 3.1248 22.759 2.15503 21.5737 2.15503H4.33338ZM6.48842 12.9302H19.4187V15.0853H6.48842V12.9302ZM6.48842 9.69767H19.4187V11.8527H6.48842V9.69767ZM6.48842 6.46511H19.4187V8.62015H6.48842V6.46511Z" fill="#8B96A5" />
                                    </svg>
                                    <p className="text-[20px] md:text-[18px] smd:text-[16px] text-[#787A80]">32 reviews</p>
                                </div>
                                <span className="w-[8px] aspect-square rounded-full bg-[#DBDBDB]" />
                                <div className="flex items-center gap-[10px]">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23.7007 10.2257H18.5393L13.8198 3.15715C13.6151 2.85544 13.2703 2.70459 12.9255 2.70459C12.5807 2.70459 12.2359 2.85544 12.0311 3.16792L7.31159 10.2257H2.15027C1.55764 10.2257 1.07275 10.7106 1.07275 11.3032C1.07275 11.4002 1.08353 11.4971 1.11585 11.5941L3.85275 21.5827C4.10058 22.4878 4.93027 23.1559 5.92159 23.1559H19.9293C20.9207 23.1559 21.7503 22.4878 22.009 21.5827L24.7459 11.5941L24.7782 11.3032C24.7782 10.7106 24.2933 10.2257 23.7007 10.2257ZM12.9255 5.70009L15.9425 10.2257H9.90841L12.9255 5.70009ZM19.9293 21.0009L5.93237 21.0116L3.56182 12.3807H22.2999L19.9293 21.0009ZM12.9255 14.5358C11.7402 14.5358 10.7704 15.5055 10.7704 16.6908C10.7704 17.8761 11.7402 18.8458 12.9255 18.8458C14.1107 18.8458 15.0805 17.8761 15.0805 16.6908C15.0805 15.5055 14.1107 14.5358 12.9255 14.5358Z" fill="#8B96A5" />
                                    </svg>
                                    <p className="text-[20px] md:text-[18px] smd:text-[16px] text-[#787A80]">154 sold</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <div className="flex flex-col gap-[16px]">
                                <div className="flex items-center">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8351 19.5576L5.69777 14.4203L3.94836 16.1574L10.8351 23.0441L25.6188 8.2604L23.8817 6.52332L10.8351 19.5576Z" fill="#00B517" />
                                    </svg>
                                    <p className="text-[20px] md:tex-[18px] smd:text-[16px] text-[#00B517]">In stock</p>
                                </div>
                                <div className="flex gap-[6px]">
                                    <Button variant="text" className="w-[50px] aspect-[5/4] border-[1px] flex items-center justify-center border-second rounded-[10px] cursor-pointer select-none text-[18px] md:text-[16px] smd:text-[14px] text-second md:w-[45px] smd:w-[40px] active:scale-90 duration-500" onClick={() => dispatch(addItem({ ...data[pathname.slice(6) || 2], img: `https://picsum.photos/24${pathname.slice(6)}`, id: pathname.slice(6) }))}>+</Button>
                                    <Button variant="text" className="w-[50px] aspect-[5/4] flex items-center justify-center border-[1px] border-second rounded-[10px] cursor-pointer select-none text-[18px] md:text-[16px] smd:text-[14px] text-second md:w-[45px] smd:w-[40px] active:scale-90 duration-500">{baskets.filter(b => b?.id === pathname.slice(6))[0]?.count || 0}</Button>
                                    <Button variant="text" className="w-[50px] aspect-[5/4] flex items-center justify-center border-[1px] border-second rounded-[10px] cursor-pointer select-none text-[18px] md:text-[16px] smd:text-[14px] text-second md:w-[45px] smd:w-[40px] active:scale-90 duration-500" onClick={() => dispatch(removeItem(baskets.find(b => b?.id === pathname.slice(6))))}>-</Button>
                                </div>
                            </div>
                            <Link href='/basket'>
                                <Image src='/basket2.png' alt='basket img' width={87} height={76} className='cursor-pointer object-contain w-[87px] md:w-[77px] smd:w-[67px]' />
                            </Link>
                        </div>
                    </Slide>
                </div>
            </div>
            <Subscribe />
        </div>
    )
}

export default Product