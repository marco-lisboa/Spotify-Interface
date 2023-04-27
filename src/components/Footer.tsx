import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import Image from "next/image";

export function Foooter() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed bottom-0 w-full">
            <div className='flex items-center gap-3'>
                <Image src="/capa-album.jpg" width={56} height={56} alt="Capa do Single Se eu cair" />
                <div className='flex flex-col gap-1'>
                    <strong className='font-normal'>Se Eu Cair</strong>
                    <span className='text-xs text-zinc-400'>Eli Soares</span>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} className='text-zinc-200' />
                    <SkipBack size={20} className='text-zinc-200' />
                    <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black '>
                        <Play />
                    </button>
                    <SkipForward size={20} className='text-zinc-200' />
                    <Repeat size={20} className='text-zinc-200' />
                </div>
                <div className='flex items-center gap-2'>
                    <span className='texte-xs text-zinc-400'>0:31</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-500'>
                        <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                    </div>
                    <span className='texte-xs text-zinc-400'>2:31</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <Volume2 size={20} />
                    <div className='h-1 rounded-full w-24 bg-zinc-500'>
                        <div className='bg-zinc-200 w-14 h-1 rounded-full'></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}