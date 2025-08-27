

const logos = [
    "/GeniusTV Logos/amazon-prime-video-seeklogo.png",
    "/GeniusTV Logos/apple-tv-seeklogo.png",
    "/GeniusTV Logos/bbc-news-seeklogo.png",
    "/GeniusTV Logos/bundesliga-seeklogo.png",
    "/GeniusTV Logos/cnn-seeklogo.png",
    "/GeniusTV Logos/curiosity-stream-seeklogo.png",
    "/GeniusTV Logos/discovery-channel-seeklogo.png",
    "/GeniusTV Logos/disney-channel-seeklogo.png",
    "/GeniusTV Logos/formula-1-seeklogo.png",
    "/GeniusTV Logos/fubotv-seeklogo.png",
    "/GeniusTV Logos/hbo-seeklogo.png",
    "/GeniusTV Logos/hulu-seeklogo.png",
    "/GeniusTV Logos/laliga-seeklogo.png",
    "/GeniusTV Logos/major-league-baseball-seeklogo.png",
    "/GeniusTV Logos/national-geographic-seeklogo.png",
    "/GeniusTV Logos/nba-seeklogo.png",
    "/GeniusTV Logos/netflix-seeklogo.png",
    "/GeniusTV Logos/new-premier-league-2016-17-seeklogo.png",
    "/GeniusTV Logos/paramount-seeklogo.png",
    "/GeniusTV Logos/sky-sports-seeklogo.png",
    "/GeniusTV Logos/nfl-seeklogo.png",
    "/GeniusTV Logos/uefa-champions-league-seeklogo.png",
    "/GeniusTV Logos/bein-sports-seeklogo.png",
    "/GeniusTV Logos/ufc-seeklogo.png",
     "/GeniusTV Logos/dazn-seeklogo.png",
];
import { useState, useRef } from "react";

export const LogoCarousel = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
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
        containerRef.current.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        containerRef.current.style.cursor = 'default';
    };

    return (
        <div className="w-full h-full overflow-hidden flex items-center bg-background/80 py-4 md:py-8 lg:py-12">
            <div
                ref={containerRef}
                className="flex animate-scroll scrollbar-hide cursor-grab select-none"
                style={{
                    minWidth: "200%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    width: "max-content"
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* Triple les logos pour un défilement infini vraiment fluide */}
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center px-4 sm:px-4 md:px-6 lg:px-8 flex-shrink-0">
                        <img
                            src={logo}
                            alt={`Logo ${idx + 1}`}
                            className="h-8 sm:h-12 md:h-12 lg:h-14 xl:h-16 w-auto object-contain max-w-none pointer-events-none"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
            
                  <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                       transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 20s linear infinite;
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

