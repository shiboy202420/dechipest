import { Menu, Search, UserRound, ShoppingBag } from "lucide-react"

export default function Navbar(){

    return(
        <nav className="fixed top-0 left-0 z-50 flex items center bg-gray-800 text-sky-50 w-full py-3 px-5 justify-between">
                <div className="flex text-xl font-bold space-x-3">
                    <Menu/>
                    <h1>DeChipest</h1>
                </div>
                <div className="flex space-x-6">
                    <Search />
                    <UserRound />
                    <ShoppingBag />
                </div>
            
        </nav>
    )
}

