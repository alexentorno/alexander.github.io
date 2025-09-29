import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkCard = ({ images, name, description }) => {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
      <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0">
          <div
              className="relative rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 h-[1000px] w-[500px]"
          >
              <div
                  className="flex h-full w-full transition-transform duration-700 ease-in-out"
                  style={{transform: `translateX(-${index * 100}%)`}}
              >
                  {images.map((src, i) => (
                      <div
                          key={i}
                          className="flex-shrink-0 w-full h-full flex items-center justify-center"
                      >
                          <img
                              alt={`${name}-${i}`}
                              className="max-h-full max-w-full object-contain"
                              src={src}
                          />
                      </div>
                  ))}
              </div>



              <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
              >
                  <ChevronLeft size={24}/>
              </button>

              <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70"
              >
                  <ChevronRight size={24}/>
              </button>
          </div>

          <h1 className="mt-5 text-3xl font-medium">{name}</h1>
          <h2 className="text-xl opacity-50">{description}</h2>
      </div>

  )
      ;
};

export default WorkCard;