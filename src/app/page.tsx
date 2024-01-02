import Categories from "@/components/Categories";
import About from "@/components/Home/About";
import Main from "@/components/Home/Main";
import Subscribe from "@/components/Subscribe";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main className='flex flex-col pt-[60px] md:pt-[30px] smd:pt-[20px] gap-[150px] md:gap-[100px] smd:gap-[50px] pb-[50px]'>
      <Main />
      <div className="smd:pt-[50px]">
        <About />
      </div>
      <Categories />
      <Trending />
      <Subscribe />
    </main>
  )
}
