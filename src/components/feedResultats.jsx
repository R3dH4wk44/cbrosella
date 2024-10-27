import React, { useRef } from "react";
import PostCardResultats from "./PostCardResultats";

const FeedResultats = (props) => {
    const { results } = props;
    const scrollRef = useRef(null);

    // Función para desplazar el contenedor a la izquierda
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -scrollRef.current.clientWidth / 2, // Desplazar la mitad del ancho del contenedor
                behavior: "smooth",
            });
        }
    };

    // Función para desplazar el contenedor a la derecha
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollRef.current.clientWidth / 2, // Desplazar la mitad del ancho del contenedor
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative">
            {/* Contenedor de botones */}
            <div className="flex items-center justify-between">
                {/* Botón para desplazarse a la izquierda */}
                <button
                    onClick={scrollLeft}
                    className="bg-gray-800 text-white p-2 rounded-full mr-4" // Agrega margen a la derecha
                >
                    ❮
                </button>

                {/* Contenedor de tarjetas */}
                <div
                    ref={scrollRef}
                    className="container flex overflow-x-auto w-screen gap-28 md:gap-20 mt-10 mb-10 scrollbar-hide snap-x snap-mandatory"
                    id="sectionToScroll"
                >
                    {results.map((resultItem, index) => (
                        <PostCardResultats
                            key={index}
                            equipA={resultItem.local ? resultItem.equip : resultItem.opponent}
                            equipB={resultItem.local ? resultItem.opponent : resultItem.equip}
                            resultatA={resultItem.local ? resultItem.scoreEquip : resultItem.scoreOpponent}
                            resultatB={resultItem.local ? resultItem.scoreOpponent : resultItem.scoreEquip}
                            date={resultItem.date}
                        />
                    ))}
                </div>

                {/* Botón para desplazarse a la derecha */}
                <button
                    onClick={scrollRight}
                    className="bg-gray-800 text-white p-2 rounded-full ml-4" // Agrega margen a la izquierda
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default FeedResultats;
