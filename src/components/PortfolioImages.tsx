import { motion, LayoutGroup } from "framer-motion";

export default function PortfolioImages({
  currentImages,
  imageOnClick,
}: {
  currentImages: number[];               // e.g. [1,2,3,4]
  imageOnClick: (idx: number) => void;   // your existing swap handler: idx is 1..3 for thumbs
}) {
  const imgSrc = (n: number) => `/static/images/portfolio/dalinar${n}.jpg`;

  return (
    <LayoutGroup>
      <div className="flex flex-col items-center w-full gap-2 pb-5 border-b border-gray-600">
        {/* Main image (shared layoutId with whichever image is currently in slot 0) */}
        <motion.img
          key={currentImages[0]} // helps trigger enter/exit fade on source change
          layoutId={`img-${currentImages[0]}`}
          src={imgSrc(currentImages[0])}
          className="w-[100%] border border-gray-800 rounded-lg h-full object-cover
                     transition-shadow duration-300"
          initial={{ opacity: 0.0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        {/* Thumbnails */}
        <div className="w-[100%] grid grid-cols-3 gap-2">
          {[1, 2, 3].map((thumbIdx) => (
            <motion.img
              key={currentImages[thumbIdx]}
              layoutId={`img-${currentImages[thumbIdx]}`}
              src={imgSrc(currentImages[thumbIdx])}
              onClick={() => imageOnClick(thumbIdx)}
              className="w-full border hover:border-gray-600 border-gray-800 aspect-[4/3] object-cover
                         rounded-lg cursor-pointer transition-transform duration-200"
              // nice interactions
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.18 }}
            />
          ))}
        </div>
      </div>
    </LayoutGroup>
  );
}
