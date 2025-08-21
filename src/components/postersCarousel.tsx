import { useState, useRef, useEffect } from "react";

const logos = [
    "/Posters/Champions-league.png",
    "/Posters/NFL.png",
    "/Posters/Jordan.png",
    "/Posters/premier-league.png",
    "/Posters/UFC.png",
    "/Posters/Netflix.png",
    "/Posters/House-of-dragon.png",
    "/Posters/Squid-game.png",
    "/Posters/The-witcher.png",
    "/Posters/Carry-on.png",
    "/Posters/James-Lebron.png",
    "/Posters/Messi-Lamin-yamal.png",
];

export const PostersCarousel = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    // Créer un tableau avec suffisamment de copies pour un défilement fluide
    const duplicatedLogos = [...logos, ...logos, ...logos];

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setIsPaused(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
        containerRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setIsPaused(false);
        containerRef.current.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setIsPaused(false);
        containerRef.current.style.cursor = 'default';
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeaveContainer = () => {
        setIsPaused(false);
    };

    return (
        <div className="w-full h-full overflow-hidden flex items-center bg-gray-900/80 py-4 md:py-8 lg:py-12">
            <div className="relative w-full overflow-hidden">
                <div 
                    ref={containerRef}
                    className={`flex gap-6 cursor-grab select-none ${isPaused ? '' : 'animate-scroll'}`}
                    style={{ 
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        width: 'fit-content'
                    }}
              
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                 
                >
                    {duplicatedLogos.map((logo, idx) => (
                        <div 
                            key={idx} 
                            className="flex-shrink-0 flex items-center justify-center bg-gray-800/50 rounded-lg p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={logo}
                                alt={`Poster ${(idx % logos.length) + 1}`}
                                className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain pointer-events-none rounded"
                                draggable={false}
                                style={{ 
                                    width: '200px',
                                    height: '300px', 
                                    objectFit: "cover",
                                    borderRadius: '8px'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-${(logos.length * (200 + 24))}px);
                    }
                }

                .animate-scroll {
                    animation: scroll 10s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                /* Masquer les barres de défilement */
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};