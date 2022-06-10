import { useState } from 'react';

export default function() {
  const [isHovered, setIsHovered] = useState(false);

  const events = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, events] as const;
}
