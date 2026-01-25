
// Global cache for KeyboardScroll sequence frames
// We use a global variable to persist data across component unmounts/remounts (navigation)

// Initialize array with nulls
// 240 is the FRAME_COUNT used in KeyboardScroll.tsx
export const globalFramesIds: (HTMLImageElement | null)[] = new Array(240).fill(null);
