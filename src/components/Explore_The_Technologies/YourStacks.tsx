import type { TTechCard } from "../../types/techDataType";

interface YourStacksProps {
    stack: TTechCard[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const YourStacks = ({ stack, onRemove, onRemoveAll }: YourStacksProps) => {
    
    return (
        <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">

            {/* Header Section Start */}
            <h3 className="text-lg font-bold text-slate-900 mb-1">Your Stack</h3>
            <p className="text-xs text-slate-500 mb-6">
                {stack.length > 0 ? `${stack.length} Technology Selected` : "No technologies selected yet."}
            </p>
            {/* Header Section End */}


            {/* Empty State Start */}
            {stack.length === 0 ? (
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center flex items-center justify-center min-h-30">
                    <span className="text-sm font-medium text-slate-400">Your stack is empty.</span>
                </div>
            ) : (
            /* Empty State End */


            /* Filled State / Selected Technologies List Start */
                <div className="space-y-4">

                    {/* Stack Items List Container Start */}
                    <div className="flex flex-col gap-3 max-h-[50vh] overflow-y-auto pr-1">
                        {stack.map((tech) => (

                            /* Single Stack Card Item Start */
                            <div 
                                key={tech.id} 
                                className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-sm"
                            >
                                {/* Tech Icon & Name Start */}
                                <div className="flex items-center gap-3">
                                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">
                                            {tech.name}
                                        </h4>
                                        <p className="text-[10px] text-slate-500 font-medium">
                                            {tech.category}
                                        </p>
                                    </div>
                                </div>
                                {/* Tech Icon & Name End */}

                                {/* Single Item Remove Button Start */}
                                <button
                                    onClick={() => onRemove(tech.id)}
                                    className="text-slate-400 hover:text-red-500 px-2 py-1 text-lg transition-colors focus:outline-none cursor-pointer"
                                    aria-label="Remove item"
                                >
                                    ✕
                                </button>
                                {/* Single Item Remove Button End */}

                            </div>
                            /* Single Stack Card Item End */

                        ))}
                    </div>
                    {/* Stack Items List Container End */}


                    {/* Remove All Action Button Start */}
                    <div className="pt-2">
                        <button
                            onClick={onRemoveAll}
                            className="w-full py-2.5 border border-red-200 text-red-500 rounded-lg font-medium text-sm transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-100 cursor-pointer"
                        >
                            Remove All
                        </button>
                    </div>
                    {/* Remove All Action Button End */}

                </div>
            /* Filled State / Selected Technologies List End */
            )}

        </div>
    );
};

export default YourStacks;
