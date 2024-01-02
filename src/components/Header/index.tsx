'use client'
import { links } from '@/utils/links'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Drawer } from '@/material'
import { useEffect, useState } from 'react'
import { Zoom } from 'react-awesome-reveal'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [isAbsolute, setIsAbsolute] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        if (open) {
            setIsAbsolute(true);
        } else {
            const timeoutId = setTimeout(() => {
                setIsAbsolute(false);
            }, 300);

            return () => clearTimeout(timeoutId);
        }
    }, [open]);
    return (
        <header>
            <div className='relative h-[79px] animate__animated animate__zoomInDown'>
                <div className={`w-full right-0 ml-auto duration-300 flex items-center justify-between z-[99999] ${isAbsolute && 'absolute'} ${open && '!w-[260px]'} `}>
                    <Image src='/logo.png' alt='logo' width={113} height={77} className='cursor-pointer' />
                    <div className='flex items-center gap-[35px] smd:hidden'>
                        {
                            links.map(l => (
                                <Link href={l.href} className={`${pathname === l.href && 'text-main font-bold'} hover:text-main duration-500 p-[5px]`} key={l.href}>{l.img ?
                                    <div className={pathname === l.href && `bg-main rounded-[10px] px-[10px] py-[4px] box-content duration-500`}>
                                        <Image src={l.img} alt='img' width={42} height={42} className={pathname === l.href && 'brightness-0 invert-[1]'} />
                                    </div>
                                    :
                                    l.name
                                }</Link>
                            ))
                        }
                    </div>
                    <div className='hidden smd:flex flex-col gap-[4px] w-[25px] cursor-pointer' onClick={() => setOpen(!open)}>
                        <span className={`w-full !h-[4px] bg-second rounded-full duration-300 ${open && 'rotate-45 !translate-y-[180%]'}`} />
                        <span className={`w-full !h-[4px] bg-second rounded-full duration-300 ${open && 'opacity-0'}`} />
                        <span className={`w-full !h-[4px] bg-second rounded-full duration-300 ${open && '-rotate-45 !-translate-y-[180%]'}`} />
                    </div>
                </div>
            </div>
            <Drawer open={open} placement='right'>
                <div className='flex flex-col justify-center gap-[5px] pt-[100px]'>
                    {
                        links.map(l => (
                            <Link href={l.href} className={`${pathname === l.href && 'text-main font-bold'} hover:text-main duration-500 p-[5px] text-center`} key={l.href} onClick={() => setOpen(false)}>{l.img ?
                                <Image src={l.img} alt='img' width={42} height={42} className='mx-auto' onClick={() => setOpen(false)} />
                                :
                                l.name
                            }</Link>
                        ))
                    }
                </div>
            </Drawer>
        </header>
    )
}

export default Header