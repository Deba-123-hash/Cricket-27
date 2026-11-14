import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { cn } from '../../utils/helpers';

export const Accordion = ({
  items = [],
  allowMultiple = false,
  defaultExpandedId,
  children,
  className = '',
}) => {
  const [expandedIds, setExpandedIds] = useState(() => {
    if (defaultExpandedId) {
      return Array.isArray(defaultExpandedId) ? defaultExpandedId : [defaultExpandedId];
    }
    return items[0]?.id ? [items[0].id] : [];
  });

  const handleToggle = (id) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      role="region"
      aria-label="Accordion"
      className={cn('space-y-4 w-full', className)}
    >
      {items.length > 0
        ? items.map((item, index) => (
            <AccordionItem
              key={item.id || index}
              id={item.id}
              title={item.title || item.question}
              subtitle={item.subtitle}
              badge={item.category || item.badge}
              index={index}
              isOpen={expandedIds.includes(item.id)}
              onToggle={() => handleToggle(item.id)}
            >
              {typeof item.content === 'function'
                ? item.content()
                : item.content || item.answer}
            </AccordionItem>
          ))
        : children}
    </div>
  );
};

export default Accordion;
