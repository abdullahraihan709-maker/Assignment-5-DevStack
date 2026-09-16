
import { use, useState } from "react";

import type { TTechCard } from "../../types/techDataType";

import YourStacks from "./YourStacks";

interface TechCardProps {
    techCardPromise: Promise<TTechCard[]>
}

const TechCard = ({ techCardPromise }: TechCardProps) => {
    // Resolve data using React 19's use hook
    const techCards = use(techCardPromise);
    
    // State to hold selected technologies
    const [stack, setStack] = useState<TTechCard[]>([]);

    // Function to add a technology
    const handleAdd = (tech: TTechCard) => {
        const isDuplicate = stack.find(item => item.id === tech.id);
        if (isDuplicate) {
            alert("This technology is already in your stack!");
            return;
        }
        setStack([...stack, tech]);
    };

    // Function to remove a single technology
    const handleRemove = (id: string) => {
        setStack(stack.filter(item => item.id !== id));
    };

    // Function to clear the whole stack
    const handleRemoveAll = () => {
        setStack([]);
    };




    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

            {/* Section Heading Start */}
            <div className="mb-10 text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] tracking-tight">
                    Explore the <span className="text-brand-gradient">Technologies</span>
                </h2>
                <p className="mt-3 text-slate-500 text-sm sm:text-base">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            {/* Section Heading End */}


            {/* Main Section Content Start */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left Side: Technology Grid Start */}
                <div className="lg:w-2/3 xl:w-3/4 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {techCards.map((tech) => {
                            const isAdded = stack.some(item => item.id === tech.id);

                            return (
                                <div key={tech.id} className="border border-gray-100 rounded-2xl p-6 flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
                                    
                                    {/* Icon & Badge Row Start */}
                                    <div className="flex justify-between items-start mb-4">
                                        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                                        <span
                                            className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full transition-colors"
                                            style={{
                                                color: tech.badgeTextColor || "#0284C7",
                                                backgroundColor: tech.badgeBgColor || "#E0F2FE",
                                            }}
                                        >
                                            {tech.badge}
                                        </span>
                                    </div>
                                    {/* Icon & Badge Row End */}


                                    {/* Name & Description Start */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
                                    <p className="text-sm text-slate-500 grow mb-6 leading-relaxed line-clamp-3">
                                        {tech.description}
                                    </p>
                                    {/* Name & Description End */}


                                    {/* Metadata (Category, Difficulty, Rating) Start */}
                                    <div className="flex items-center justify-between text-[11px] sm:text-xs font-medium text-slate-500 mb-5">
                                        <span className="px-2.5 py-1 bg-slate-50 rounded-md border border-slate-100">
                                            {tech.category}
                                        </span>
                                        <span>{tech.difficulty}</span>
                                        <span className="flex items-center gap-1">
                                            <span className="text-amber-400 text-sm">★</span> {tech.rating}
                                        </span>
                                    </div>
                                    {/* Metadata End */}


                                    {/* Add Button Start */}
                                    <button
                                        onClick={() => handleAdd(tech)}
                                        disabled={isAdded}
                                        className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                                            isAdded
                                                ? "bg-slate-900 text-white cursor-not-allowed"
                                                : "bg-[#0f172a] text-white hover:bg-slate-800"
                                        }`}
                                    >
                                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                                    </button>
                                    {/* Add Button End */}

                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Left Side: Technology Grid End */}




                {/* Right Side: Sidebar (YourStacks) Component Start */}
                <div className="lg:w-1/3 xl:w-1/4 w-full sticky top-24">
                    <YourStacks stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
                </div>
                {/* Right Side: Sidebar (YourStacks) Component End */}


            </div>
            {/* Main Section Content End */}

        </section>
    );
};

export default TechCard;
