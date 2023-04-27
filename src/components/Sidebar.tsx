import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className='space-y-5 fixed'>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <HomeIcon />
                    Home
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Search />
                    Search
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Library />
                    Library
                </a>
            </nav>

            <nav className='mt-36 pt-10 border-t border-zinc-800 flex flex-col gap-2 fixed w-64'>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Minhas músicas</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Louvorzown</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo</a>
                <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Bad Trip</a>
            </nav>
        </aside>
    )
}