import { Link } from 'react-router-dom';
import { Newspaper, ArrowLeft, Home, Compass } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { ROUTES } from '../../utils/constants';

export const ArticleNotFound = ({ slug }) => {
  return (
    <section className="py-24 sm:py-32 min-h-[70vh] flex items-center justify-center text-center">
      <Container>
        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-brand-lg bg-slate-card/90 border border-slate shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-midnight border border-slate flex items-center justify-center text-lime mx-auto mb-6">
            <Newspaper className="w-8 h-8" />
          </div>

          <Badge variant="coral" size="sm" className="mb-4">
            STORY NOT FOUND
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-heading font-black uppercase text-warm-white tracking-tight mb-4 leading-tight">
            ARTICLE DOES NOT EXIST
          </h1>

          <p className="text-base text-warm-white/80 font-sans leading-relaxed mb-4">
            We couldn&apos;t find an editorial article matching the address <span className="font-mono text-lime bg-midnight px-2 py-0.5 rounded text-xs">&quot;/news/{slug}&quot;</span>.
          </p>

          <p className="text-xs text-muted-text font-sans mb-8">
            The article may have been archived or the URL might contain a typo. Explore our active stories in the News Hub.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to={ROUTES.NEWS}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-lime text-midnight font-heading font-black text-xs uppercase tracking-wider hover:bg-lime-light hover:shadow-lime-glow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO NEWS HUB</span>
            </Link>

            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-midnight border border-slate text-warm-white hover:border-lime hover:text-lime font-heading font-black text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <Home className="w-4 h-4" />
              <span>GO TO HOME</span>
            </Link>

            <Link
              to={ROUTES.OUR_GAME}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-slate/50 border border-slate text-warm-white hover:text-lime font-heading font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Compass className="w-4 h-4 text-lime" />
              <span>EXPLORE GAME</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArticleNotFound;
