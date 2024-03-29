'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/material'
import { scrollTo } from '@/utils/scrollTo'
import { Zoom } from 'react-awesome-reveal'
import { usePathname } from 'next/navigation'
const Footer = () => {
    const pathname = usePathname()
    return (
        <Zoom direction='up' triggerOnce>
            <footer style={{ borderWidth: '130% !important' }} className='flex items-start justify-between pt-[75px] pb-[100px] md:pt-[60px] md:pb-[80px] smd:pt-[30px] smd:pb-[50px] border-t-[2px] border-second md:grid md:grid-cols-3 md:gap-y-[30px] smd:flex smd:flex-wrap smd:gap-[30px]'>
                <div className='smd:w-full'>
                    <Image src='/logo.png' alt='logo' width={113} height={77} className='cursor-pointer' />
                </div>
                <div className='flex flex-col gap-[13px] items-start w-min'>
                    <h5 className='font-bold text-[15px]'>Navigation</h5>
                    {
                        [{ href: '/', name: 'Home' }, { href: '/about', name: 'About' }, { id: 'categories', name: 'Categories' }, { id: 'testimonials', name: 'Testimonials' }, { 'href': '/contact', name: 'Contact' }].map(l => (
                            l.id ? <Button variant='text' className='font-[500] !text-[13px] p-0 !bg-[transparent] capitalize' onClick={() => scrollTo(l.id)} key={l.href || l.id} placeholder={undefined}>
                                {l.name}
                            </Button> :
                                <Link href={l.href || '/'} key={l.href} className={`text-[13px] duration-500 hover:text-main ${pathname === l.href && 'text-main font-bold'} `}>{l.name}</Link>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-[13px]'>
                    <h5 className='font-bold text-[15px]'>Contact us</h5>
                    <p className='max-w-[235px] leading-[200%] text-[13px]'>For all inquiries contact {" "}
                        <a href="https://womenfashiontrend.net" className='text-[13px]' target='_blank'>
                            @womenfashiontrend.net
                        </a> or head over to our Contact page and
                        send us a message.</p>
                    <div className='flex gap-[5px]'>
                        <a href="https://twitter.com" className='text-[13px]'>
                            <svg width="41" height="47" viewBox="0 0 41 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="20.5" cy="23.5" rx="20.5" ry="23.5" fill="#114683" />
                                <path d="M29.7386 18.7351C29.7526 18.9429 29.7526 19.1508 29.7526 19.3586C29.7526 25.6968 25.2158 33 16.9239 33C14.3693 33 11.9962 32.2132 10 30.8477C10.363 30.8922 10.7119 30.907 11.0888 30.907C13.1967 30.907 15.1371 30.15 16.6866 28.8586C14.7043 28.8141 13.0431 27.4336 12.4708 25.5336C12.75 25.5781 13.0292 25.6078 13.3224 25.6078C13.7272 25.6078 14.132 25.5484 14.5089 25.4445C12.4429 24.9992 10.8934 23.0695 10.8934 20.7391V20.6797C11.4936 21.036 12.1916 21.2586 12.9314 21.2883C11.717 20.4273 10.9213 18.9578 10.9213 17.2953C10.9213 16.4047 11.1446 15.5883 11.5355 14.8758C13.7551 17.7851 17.0914 19.6851 20.8325 19.8929C20.7627 19.5367 20.7208 19.1656 20.7208 18.7945C20.7208 16.1523 22.731 14 25.2297 14C26.5279 14 27.7005 14.5789 28.5241 15.5141C29.5431 15.3063 30.5203 14.9055 31.3858 14.3563C31.0507 15.4696 30.3388 16.4047 29.4036 16.9984C30.3109 16.8946 31.1904 16.6273 32 16.2563C31.3859 17.2062 30.6181 18.0523 29.7386 18.7351Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" className='text-[13px]'>
                            <svg width="41" height="47" viewBox="0 0 41 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="20.5" cy="23.5" rx="20.5" ry="23.5" fill="#114683" />
                                <path d="M21.0058 16.9862C17.3147 16.9862 14.3375 19.8919 14.3375 23.4942C14.3375 27.0966 17.3147 30.0022 21.0058 30.0022C24.6968 30.0022 27.6741 27.0966 27.6741 23.4942C27.6741 19.8919 24.6968 16.9862 21.0058 16.9862ZM21.0058 27.7253C18.6205 27.7253 16.6705 25.8278 16.6705 23.4942C16.6705 21.1606 18.6147 19.2632 21.0058 19.2632C23.3968 19.2632 25.341 21.1606 25.341 23.4942C25.341 25.8278 23.391 27.7253 21.0058 27.7253ZM29.5022 16.72C29.5022 17.564 28.8058 18.238 27.9468 18.238C27.0821 18.238 26.3915 17.5583 26.3915 16.72C26.3915 15.8817 27.0879 15.2021 27.9468 15.2021C28.8058 15.2021 29.5022 15.8817 29.5022 16.72ZM33.9187 18.2606C33.82 16.2272 33.3442 14.4261 31.8178 12.9421C30.2973 11.4581 28.4517 10.9937 26.3683 10.8917C24.2209 10.7728 17.7848 10.7728 15.6375 10.8917C13.5598 10.988 11.7142 11.4524 10.1879 12.9364C8.66157 14.4204 8.19148 16.2216 8.08701 18.255C7.96514 20.3507 7.96514 26.6321 8.08701 28.7278C8.18567 30.7612 8.66157 32.5624 10.1879 34.0464C11.7142 35.5304 13.554 35.9948 15.6375 36.0968C17.7848 36.2157 24.2209 36.2157 26.3683 36.0968C28.4517 36.0005 30.2973 35.536 31.8178 34.0464C33.3384 32.5624 33.8142 30.7612 33.9187 28.7278C34.0406 26.6321 34.0406 20.3563 33.9187 18.2606ZM31.1446 30.9765C30.6919 32.0866 29.8156 32.9419 28.6723 33.3894C26.9602 34.052 22.8977 33.8991 21.0058 33.8991C19.1138 33.8991 15.0455 34.0464 13.3392 33.3894C12.2017 32.9476 11.3254 32.0923 10.8669 30.9765C10.1879 29.3056 10.3446 25.3407 10.3446 23.4942C10.3446 21.6478 10.1937 17.6772 10.8669 16.012C11.3196 14.9019 12.1959 14.0466 13.3392 13.5991C15.0513 12.9364 19.1138 13.0894 21.0058 13.0894C22.8977 13.0894 26.966 12.9421 28.6723 13.5991C29.8098 14.0409 30.6861 14.8962 31.1446 16.012C31.8236 17.6829 31.6669 21.6478 31.6669 23.4942C31.6669 25.3407 31.8236 29.3112 31.1446 30.9765Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://whatsapp.com" className='text-[13px]'>
                            <svg width="41" height="47" viewBox="0 0 41 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="20.5" cy="23.5" rx="20.5" ry="23.5" fill="#114683" />
                                <path d="M31.5067 13.2141C28.7009 10.4953 24.9643 9 20.9933 9C12.7969 9 6.12723 15.4473 6.12723 23.3705C6.12723 25.9016 6.81027 28.3743 8.10938 30.5558L6 38L13.8817 35.9998C16.0513 37.1455 18.4955 37.7475 20.9866 37.7475H20.9933C29.183 37.7475 36 31.3002 36 23.377C36 19.5384 34.3125 15.9328 31.5067 13.2141ZM20.9933 35.3266C18.7701 35.3266 16.5937 34.7504 14.6987 33.6629L14.25 33.404L9.57589 34.5886L10.8214 30.1804L10.5268 29.7272C9.28795 27.8241 8.63839 25.6297 8.63839 23.3705C8.63839 16.7873 14.183 11.4275 21 11.4275C24.3013 11.4275 27.4018 12.6703 29.7321 14.9295C32.0625 17.1886 33.4955 20.1857 33.4888 23.377C33.4888 29.9667 27.8036 35.3266 20.9933 35.3266ZM27.7701 26.3806C27.4018 26.1993 25.5737 25.3319 25.2321 25.2154C24.8906 25.0924 24.6429 25.0342 24.3951 25.3967C24.1473 25.7592 23.4375 26.5618 23.2165 26.8078C23.0022 27.0473 22.7812 27.0797 22.4129 26.8984C20.2299 25.8433 18.7969 25.0147 17.3571 22.6261C16.9754 21.9917 17.7388 22.0371 18.4487 20.6647C18.5692 20.4252 18.5089 20.2181 18.4152 20.0368C18.3214 19.8556 17.5781 18.0884 17.2701 17.3699C16.9688 16.6708 16.6607 16.7679 16.433 16.7549C16.2188 16.742 15.971 16.742 15.7232 16.742C15.4754 16.742 15.0737 16.8326 14.7321 17.1886C14.3906 17.5511 13.433 18.4185 13.433 20.1857C13.433 21.9529 14.7656 23.6618 14.9464 23.9013C15.1339 24.1408 17.5647 27.7658 21.2946 29.3259C23.6518 30.3098 24.5759 30.394 25.7545 30.2257C26.471 30.1221 27.9509 29.3583 28.2589 28.5167C28.567 27.6752 28.567 26.9567 28.4732 26.8078C28.3862 26.646 28.1384 26.5554 27.7701 26.3806Z" fill="white" />
                            </svg>
                        </a>
                        <a href="https://youtube.com" className='text-[13px]'>
                            <svg width="41" height="47" viewBox="0 0 41 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="20.5" cy="23.5" rx="20.5" ry="23.5" fill="#114683" />
                                <path d="M35.5364 16.0281C35.1874 14.6886 34.1593 13.6336 32.8539 13.2756C30.4878 12.625 21 12.625 21 12.625C21 12.625 11.5122 12.625 9.14603 13.2756C7.84065 13.6337 6.81253 14.6886 6.46359 16.0281C5.82959 18.4562 5.82959 23.522 5.82959 23.522C5.82959 23.522 5.82959 28.5878 6.46359 31.0158C6.81253 32.3554 7.84065 33.3664 9.14603 33.7244C11.5122 34.375 21 34.375 21 34.375C21 34.375 30.4878 34.375 32.8539 33.7244C34.1593 33.3664 35.1874 32.3554 35.5364 31.0158C36.1704 28.5878 36.1704 23.522 36.1704 23.522C36.1704 23.522 36.1704 18.4562 35.5364 16.0281ZM17.8969 28.1214V18.9226L25.8269 23.5221L17.8969 28.1214Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col gap-[13px]'>
                    <h5 className='font-bold text-[15px]'>Install the app</h5>
                    <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className='flex ml-[-15px]'>
                        <Image src='/android.png' alt='play market' width={150} height={55} className='w-min cursor-pointer' />
                        <Image src='/iphone.png' alt='app store' width={150} height={55} className='w-min cursor-pointer' />
                    </div>
                    <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur</p>
                    <div className='flex gap-[33px]'>
                        <Image src='/visa.png' alt='visa' width={80} height={40} className='w-min' />
                        <Image src='/payment.png' alt='payment' width={80} height={40} className='w-min' />
                        <Image src='/paypal.png' alt='paypal' width={80} height={40} className='w-min' />

                    </div>
                </div>
            </footer>
        </Zoom>
    )
}

export default Footer