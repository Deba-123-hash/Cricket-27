import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import CricketImage from '../../components/common/CricketImage';
import { fadeIn } from '../../utils/animations';

export const ArticleHeroImage = ({ image, alt, caption }) => {
  if (!image) return null;

  return (
    <motion.figure
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="max-w-5xl mx-auto mb-14"
    >
      <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-midnight shadow-2xl group">
        <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-midnight">
          <CricketImage
            src={image}
            fallbackSrc="/assets/news/news-devlog-thumb.svg"
            alt={alt || 'Article visual concept'}
            aspectRatio="16/9"
            objectFit="cover"
            title={caption || 'Article Visual'}
            badge="NEWS ARCHIVE"
            icon="camera"
            className="w-full h-full"
            imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            loading="eager"
          />
        </div>

        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-40 pointer-events-none" />
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="mt-3 px-2 flex items-center justify-between text-xs text-muted-text font-mono">
          <span className="flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-lime" />
            <span>{caption}</span>
          </span>
          <span className="text-[11px] text-lime">CRICKET27 ARCHIVE</span>
        </figcaption>
      )}
    </motion.figure>
  );
};

export default ArticleHeroImage;
