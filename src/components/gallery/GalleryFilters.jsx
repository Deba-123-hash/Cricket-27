export const GalleryFilters = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 text-xs font-display uppercase tracking-wider rounded-lg transition-all duration-200 focus-visible:outline-cricket-green ${
              isActive
                ? 'bg-cricket-green text-cricket-dark font-bold shadow-neon-green/30'
                : 'bg-cricket-dark-card border border-cricket-dark-border text-cricket-muted hover:text-white hover:border-cricket-green/40'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default GalleryFilters;
