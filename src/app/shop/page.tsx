'use client'
import { useState } from "react"
import { Input } from '@/material'
import Subscribe from "@/components/Subscribe"
import Image from "next/image"
import { data } from "@/components/Trending/data"
import Card from "@/themes/Card"
import { Slide } from "react-awesome-reveal"

const Shop = () => {
    const [value, setValue] = useState('')
    const [page, setPage] = useState(1)

    const filteredData = () => {
        if (value) return [...data, ...data, ...data, ...data, ...data].filter(f => f.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        return [...data, ...data, ...data, ...data, ...data]
    }

    return (
        <div className="pt-[35px] smd:pt-[20px] flex flex-col  gap-[100px] md:gap-[60px] smd:gap-[30px] pb-[70px]">
            <Slide direction="up" triggerOnce>
                <div className="flex  gap-[22px] smd:!gap-[10px]">
                    <div className="relative ml-auto flex w-[90%]">
                        <Input
                            type="search"
                            variant='static'
                            placeholder="Search"
                            className="w-full bg-white !text-[20px] shadow-md focus:shadow-xl !pl-[10px] !py-[35px] smd:!py-[25px] box-border !border-none rounded-[5px]"
                            labelProps={{
                                className: "hidden"
                            }}
                            containerProps={{
                                className: "min-w-0 !border-none"
                            }}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[22px] top-[25%] smd:w-[25px] smd:h-[25px]">
                            <path d="M27.2037 25.6593L31.4759 29.9293C31.6751 30.1356 31.7853 30.4119 31.7829 30.6987C31.7804 30.9854 31.6653 31.2598 31.4625 31.4625C31.2598 31.6653 30.9854 31.7804 30.6987 31.7829C30.4119 31.7853 30.1356 31.6751 29.9293 31.4759L25.6571 27.2037C22.8653 29.5956 19.2556 30.8132 15.5855 30.6011C11.9153 30.3889 8.46993 28.7635 5.97235 26.0658C3.47478 23.3682 2.11914 19.808 2.18989 16.1324C2.26065 12.4567 3.75229 8.95137 6.35183 6.35183C8.95137 3.75229 12.4567 2.26065 16.1324 2.18989C19.808 2.11914 23.3682 3.47478 26.0658 5.97235C28.7635 8.46993 30.3889 11.9153 30.6011 15.5855C30.8132 19.2556 29.5956 22.8653 27.2037 25.6571V25.6593ZM16.4062 28.4374C19.5971 28.4374 22.6573 27.1699 24.9136 24.9136C27.1699 22.6573 28.4374 19.5971 28.4374 16.4062C28.4374 13.2153 27.1699 10.1551 24.9136 7.89881C22.6573 5.64251 19.5971 4.37493 16.4062 4.37493C13.2153 4.37493 10.1551 5.64251 7.89881 7.89881C5.64251 10.1551 4.37493 13.2153 4.37493 16.4062C4.37493 19.5971 5.64251 22.6573 7.89881 24.9136C10.1551 27.1699 13.2153 28.4374 16.4062 28.4374Z" fill="black" fillOpacity="0.4" />
                        </svg>
                    </div>
                    <div className=" shadow-lg w-[70px] smd:h-[50px] grid place-items-center aspect-square rounded-[10px] cursor-pointer active:scale-95 duration-500">
                        <Image src='/settings.svg' alt="settings" width={39} height={39} />
                    </div>
                </div>
            </Slide>
            <div>
                <Slide direction="up" triggerOnce>
                    <h2 className="smd:text-center">All product</h2>
                </Slide>
                <div className="w-full pt-[40px] md:pt-[30px] smd:pt-[20px]">
                    <div className="flex flex-wrap gap-[22px] justify-center pb-[60px] md:pb-[40px] smd:pb-[30px]">
                        {
                            filteredData().slice((page - 1) * 12, page * 12).map((d, index) => (
                                <Slide direction="up" triggerOnce key={index}>
                                    <Card c={d} i={index} href={'/shop/' + index} />
                                </Slide>
                            ))
                        }
                    </div>
                    {filteredData().length > 12 && <Slide direction="up" triggerOnce>
                        <div className="flex justify-center gap-[10px]">
                            {
                                [...Array(Math.ceil(filteredData().length / 12))].map((_, index) => (
                                    <p key={index + 1} className={`bg-[#E6ECF2] rounded-[10px] w-[52px] smd:w-[45px] h-[48px] smd:h-[40px] smd:text-[18px] grid place-items-center text-[23px] text-second cursor-pointer shadow-md hover:shadow-xl duration-500 ${page === index + 1 && 'font-bold'}`} onClick={() => setPage(index + 1)}>{index + 1}</p>
                                ))
                            }
                        </div>
                    </Slide>}
                </div>
            </div>
            <div>
                <Slide direction="up" triggerOnce>
                    <h2 className="smd:text-center">New arrivals</h2>
                </Slide>
                <div className="flex flex-wrap gap-[22px] justify-center pb-[60px] md:pb-[40px] smd:pb-[30px] pt-[40px] md:pt-[30px] smd:pt-[20px]">
                    {
                        [...data, ...data].map((d, index) => (
                            <Slide direction="up" triggerOnce key={index}>
                                <Card c={d} i={index} href={'/shop/' + index} />
                            </Slide>
                        ))
                    }
                </div>
            </div>
            <Subscribe />
        </div>
    )
}

export default Shop