import { Quote, CheckCircle2 } from 'lucide-react';
import CricketImage from '../../components/common/CricketImage';

export const ArticleContentRenderer = ({ content }) => {
  if (!content) return null;

  // Handle plain string content fallback
  if (typeof content === 'string') {
    const paragraphs = content
      .split('\n')
      .map((p) => p.trim())
      .filter(Boolean);

    return (
      <div className="space-y-6 text-warm-white/85 text-base sm:text-lg font-sans leading-relaxed">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    );
  }

  // Handle structured array content
  if (Array.isArray(content)) {
    return (
      <div className="space-y-6 text-warm-white/85 text-base sm:text-lg font-sans leading-relaxed">
        {content.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={index} className="leading-relaxed">
                  {block.text}
                </p>
              );

            case 'heading':
              return (
                <h2
                  key={index}
                  className="text-2xl sm:text-3xl font-heading font-black uppercase text-warm-white tracking-wide mt-10 mb-4 pt-4 border-t border-slate/50"
                >
                  {block.text}
                </h2>
              );

            case 'subheading':
              return (
                <h3
                  key={index}
                  className="text-xl font-heading font-bold uppercase text-lime tracking-wide mt-8 mb-3"
                >
                  {block.text}
                </h3>
              );

            case 'quote':
              return (
                <blockquote
                  key={index}
                  className="my-8 p-6 sm:p-8 rounded-brand-lg bg-slate-card/80 border-l-4 border-lime shadow-card relative overflow-hidden"
                >
                  <Quote className="w-8 h-8 text-lime/20 absolute right-4 top-4 pointer-events-none" />
                  <p className="text-lg sm:text-xl font-sans italic text-warm-white leading-relaxed mb-3">
                    &ldquo;{block.text}&rdquo;
                  </p>
                  {block.author && (
                    <cite className="block text-xs font-mono uppercase tracking-wider text-lime not-italic">
                      &mdash; {block.author}
                    </cite>
                  )}
                </blockquote>
              );

            case 'list':
              return (
                <ul key={index} className="space-y-3 my-6 pl-2">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-base text-warm-white/90">
                      <span className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 mt-0.5 text-lime">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );

            case 'numbered_list':
              return (
                <ol key={index} className="space-y-3.5 my-6 pl-2">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3.5 text-base text-warm-white/90">
                      <span className="w-6 h-6 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 text-lime font-mono text-xs font-bold mt-0.5">
                        {itemIdx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              );

            case 'image':
              return (
                <figure key={index} className="my-8 rounded-brand-lg overflow-hidden border border-slate bg-midnight">
                  <CricketImage
                    src={block.src}
                    fallbackSrc="/assets/news/news-devlog-thumb.svg"
                    alt={block.alt || 'Inline article illustration'}
                    aspectRatio="16/9"
                    title={block.caption || 'Article Visual'}
                    badge="ARTICLE ILLUST."
                    icon="camera"
                    className="w-full h-auto"
                  />
                  {block.caption && (
                    <figcaption className="p-3 text-xs text-muted-text font-mono border-t border-slate bg-slate-card">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );

            default:
              return null;
          }
        })}
      </div>
    );
  }

  return null;
};

export default ArticleContentRenderer;
