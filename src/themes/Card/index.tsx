import { addItem } from '@/Redux/features/baskets'
import { rating } from '@/utils/rating'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const Card = ({ c, i, href }: { c: { title: string, rate: number, much: number }, i: number, href: string }) => {
    const dispatch = useDispatch()
    return (
        <div className='shadow-lg !w-[240px] hover:!shadow-2xl duration-500 rounded-[13px] overflow-hidden'>
            <Link href={href || '/'}>
                <Image src={`https://picsum.photos/24${i}`} alt='card img' width={240} height={200} className='rounded-br-[20px] pb-[14px] !object-contain duration-500' />
            </Link>
            <div className='p-[8px] flex items-center justify-between'>
                <div className='flex flex-col gap-[5px]'>
                    <h4 className='font-bold text-[18px]'>{c.title}</h4>
                    {rating(c.rate)}
                    <p className='text-[18px] text-[#114683]'>$ {c.much}</p>
                </div>
                <Image src='/basket.png' alt='basket img' width={36} height={31} className='cursor-pointer w-[40px]' onClick={() => { dispatch(addItem({ ...c, id: +i, img: `https://picsum.photos/24${i}`, count: 0 })), alert('Added to Basket') }} />
            </div>
        </div>
    )
}

export default Card