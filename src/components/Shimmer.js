const Shimmer = () =>{
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
        {[...Array(8)].map((_, index) => (
            <div 
                key={index} 
                className="w-full h-32 bg-gray-300 animate-pulse rounded-lg"
            ></div>
        ))}
    </div>
    
    )
    
}

export default Shimmer;