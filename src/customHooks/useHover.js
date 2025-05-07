import { useState } from "react";

export function useHover() {
  const [hoveredId, setHoveredId] = useState(false);

  const bind = (id) => ({
    onMouseEnter: () => setHoveredId(id),
    onMouseLeave: () => setHoveredId(null),
  });

  return [hoveredId, bind];
}
