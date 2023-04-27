import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
    return (
        <main className="flex-1 p-6">
        <div className='flex items-center gap-4'>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
        </div >

        <h1 className='font-semibold text-3xl mt-10'>Boa Tarde</h1>

        <div className='grid grid-cols-3 gap-6 mt-4'>
          <a href='#' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/capa-album.jpg" width={104} height={104} alt="Capa do Single Se eu cair" />
            <strong>Se Eu Cair</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/capa-album.jpg" width={104} height={104} alt="Capa do Single Se eu cair" />
            <strong>Se Eu Cair</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/capa-album.jpg" width={104} height={104} alt="Capa do Single Se eu cair" />
            <strong>Se Eu Cair</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/capa-album.jpg" width={104} height={104} alt="Capa do Single Se eu cair" />
            <strong>Se Eu Cair</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/capa-album.jpg" width={104} height={104} alt="Capa do Single Se eu cair" />
            <strong>Se Eu Cair</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
          <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <Image src="/capa-album.jpg" width={104} height={104} alt="Capa do Single Se eu cair" />
            <strong>Se Eu Cair</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <Play />
            </button>
          </a>
        </div>

        <h2 className='font-semibold text-3xl mt-10'>Feito para Marco Lisboa</h2>

        <div className='grid grid-cols-4 gap-4 mt-4 mb-14 pb-10'>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 items-center hover:bg-white/10'>
            <Image src="/capa-album.jpg" className='w-44 h-44 rounded' width={120} height={120} alt="Capa do Single Se eu cair" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Japa, Emithir, WIU e mais</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 items-center hover:bg-white/10'>
            <Image src="/capa-album.jpg" className='w-44 h-44 rounded' width={120} height={120} alt="Capa do Single Se eu cair" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Japa, Emithir, WIU e mais</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 items-center hover:bg-white/10'>
            <Image src="/capa-album.jpg" className='w-44 h-44 rounded' width={120} height={120} alt="Capa do Single Se eu cair" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Japa, Emithir, WIU e mais</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 items-center hover:bg-white/10'>
            <Image src="/capa-album.jpg" className='w-44 h-44 rounded' width={120} height={120} alt="Capa do Single Se eu cair" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-500'>Japa, Emithir, WIU e mais</span>
          </a>
        </div>
      </main>
    )
}