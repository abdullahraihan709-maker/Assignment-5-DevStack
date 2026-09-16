const LoadingSpinner = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 border-4 border-pink-200 border-t-[#db2777] rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium text-sm">Loading technologies...</p>
        </div>
    );
};

export default LoadingSpinner;
