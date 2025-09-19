// import React, { useState, useEffect } from "react";

// export default function Carousel() {
//   const images = [
//     " /blogs/post-6.webp",
//     " /blogs/post-2.webp",
//     " /blogs/post-3.webp",
//     " /blogs/post-7.webp",
//     " /blogs/post-5.webp",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const goToNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const goToPrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToSlide = (index: number) => {
//     if (isTransitioning || index === currentIndex) return;
//     setIsTransitioning(true);
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 500); // Match transition duration

//     return () => clearTimeout(timer);
//   }, [currentIndex]);

//   return (
//     <div className="flex items-center justify-center">
//       <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
//         {/* Carousel Container */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="w-full flex-shrink-0">
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-110 object-cover"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={goToPrev}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           aria-label="Previous slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           aria-label="Next slide"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>

//         {/* Indicators */}
//         <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 index === currentIndex
//                   ? "bg-white scale-125"
//                   : "bg-white/60 hover:bg-white/80"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
