import Image from "next/image"

export const rating = (rate: number, w?: number) => {
    const array = []

    for (let i = 0; i < rate; i++) {
        array.push('/starFilled.svg')
    }
    for (let i = 0; i < 5 - rate; i++) {
        array.push('/star.svg')
    }

    return (
        <div className="flex">
            {array.map((a, index) => (
                <Image src={a} alt="star img" width={w ?? 14} height={w ?? 14} key={index} />
            ))}
        </div>
    )
}