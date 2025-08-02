

const logos = [
    "/Posters/Group 3.png",
    "/Posters/Group 4.png",
    "/Posters/Group 5.png",
    "/Posters/Group 6.png",
    "/Posters/Group 7.png",
    "/Posters/Group 8.png",
    "/Posters/Group 9.png",
    "/Posters/Group 10.png",
    "/Posters/Group 11.png",
    "/Posters/Group 12.png",
    "/Posters/Group 13.png",
    "/Posters/Group 14.png",
];
import { useState, useRef, useEffect } from "react";

export const PostersCarousel = () => {
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
                className="flex animate-logos-marquee overflow-x-auto scrollbar-hide cursor-grab select-none"
                style={{ 
                    minWidth: "200%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none"
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {/* Triple les logos pour un défilement infini vraiment fluide */}
                {[...logos, ...logos, ...logos].map((logo, idx) => (
                    <div key={idx} className="flex items-center justify-center px-4 sm:px-2 md:px-2 lg:px-1 flex-shrink-0">
                        <img
                            src={logo}
                            alt={`Logo ${idx + 1}`}
                            className="h-8 sm:h-12 md:h-12 lg:h-14 xl:h-16 w-auto object-contain max-w-none pointer-events-none"
                            draggable={false}
                            style={{ height: 600 , width: 350, objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};



