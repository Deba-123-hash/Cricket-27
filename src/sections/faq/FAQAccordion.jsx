import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import FAQItem from './FAQItem';

export const FAQAccordion = ({
  items = [],
  allowMultiple = false,
}) => {
  // Store the ID(s) of the currently expanded item(s)
  const [expandedIds, setExpandedIds] = useState(() => (items[0]?.id ? [items[0].id] : []));

  const handleToggle = useCallback((id) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((it) => it !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  }, [allowMultiple]);

  return (
    <div
      role="region"
      aria-label="FAQ Accordion"
      className="space-y-4 w-full"
    >
      <AnimatePresence initial={false}>
        {items.map((item, index) => (
          <FAQItem
            key={item.id}
            item={item}
            index={index}
            isOpen={expandedIds.includes(item.id)}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;
