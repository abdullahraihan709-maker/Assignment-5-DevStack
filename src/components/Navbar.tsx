import Logo from "../assets/logo-text.png";
import HamburgerLogo from "../assets/hamburger.png";

const Navbar = () => {

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Desktop View Start */}
                <nav className="hidden md:flex items-center justify-between h-16">

                    {/* Left: Brand Logo Start */}
                    <img src={Logo} alt="DevStack Logo" className="shrink-0 flex items-center h-8 w-auto" />
                    {/* Left: Brand Logo End */}



                    {/* Center: Nav Links Start */}
                    <div className="flex items-center gap-8 font-medium text-slate-600 text-sm">

                        <a href="#" className="text-[#db2777] font-semibold">Home</a>

                        <a href="#" className="hover:text-[#db2777] transition-colors">Technologies</a>

                        <a href="#" className="hover:text-[#db2777] transition-colors">Projects</a>

                        <a href="#" className="hover:text-[#db2777] transition-colors">About</a>

                        <a href="#" className="hover:text-[#db2777] transition-colors">Contact</a>

                    </div>
                    {/* Center: Nav Links End */}



                    {/* Right: Sign In and Sign Up Buttons Start */}
                    <div className="flex items-center gap-4">

                        <button className="text-slate-700 hover:text-[#db2777] font-medium text-sm transition-colors">
                            Sign In
                        </button>

                        <button className="bg-[#db2777] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-[#be185d] transition-all shadow-md shadow-pink-500/20">
                            Sign Up
                        </button>
                    
                    </div>
                    {/* Right: Sign In and Sign Up Buttons End */}

                </nav>
                {/* Desktop View End */}






                {/* Mobile View Start */}
                <nav className="flex md:hidden items-center justify-between h-16">

                    {/* Left: Hamburger Menu Icon Start */}
                     <img src= {HamburgerLogo} alt="" className="flex items-center" />
                    {/* Left: Hamburger Menu Icon End */}



                    {/* Center: Brand Logo Start */}
                    <img src={Logo} alt="DevStack Logo" className="shrink-0 h-7 w-auto" />
                    {/* Center: Brand Logo End */}



                    {/* Right: Sign In & Sign Up Buttons Start */}
                    <div className="flex items-center gap-2">
                        
                        <button className="text-slate-700 hover:text-[#db2777] text-xs sm:text-sm font-medium px-2 py-1">
                            Sign In
                        </button>
                        
                        <button className="bg-[#db2777] text-white text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full hover:bg-[#be185d] transition-all shadow-sm">
                            Sign Up
                        </button>
                    
                    </div>
                    {/* Right: Sign In & Sign Up Buttons End */}

                </nav>
                {/* Mobile View End */}

            </div>

        </header>
    );
};

export default Navbar;










