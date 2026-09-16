import Banner from '../assets/banner-stack.png';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">

            {/* Left Side Content */}
            <div className="flex-1 text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
                    Build Your Ideal <br className="hidden sm:block" />
                    <span className="text-brand-gradient">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-6 text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                    Explore frontend, backend, database, and tooling options,<br /> compare them side by side, and put together the stack that fits your <br /> next project.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 items-center">
                    <button className="bg-brand-gradient text-white font-medium px-6 py-3 rounded-xl shadow-sm hover:opacity-95 transition-opacity cursor-pointer text-sm sm:text-base">
                        Explore Technologies
                    </button>

                    <button className="border border-gray-200 text-slate-600 font-medium px-6 py-3 rounded-xl hover:bg-slate-50 hover:border-gray-300 transition-colors cursor-pointer text-sm sm:text-base">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Side Content */}
            <div className="flex-1 flex justify-center md:justify-end w-full">
                <img src={Banner} alt="DevStack 3D Isometric Illustration" className="w-full max-w-md lg:max-w-lg object-contain"/>
            </div>

        </section>
    );
};

export default Hero;
