import { useState } from 'react';

export default function useExpand(initial = false) {
  const [isExpnaded, setIsExpanded] = useState(initial);

  const open = () => setIsExpanded(true);
  const close = () => setIsExpanded(false);
  const toggle = () => isExpnaded ? close() : open();

  return [isExpnaded, open, close, toggle] as const;
}
