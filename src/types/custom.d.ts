declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

// Fallback declaration for react/jsx-runtime when @types/react isn't installed
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
  export function jsxDEV(type: any, props?: any, key?: any): any;
}

// Allow importing PNG/JPG/SVG modules if needed elsewhere
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

// Minimal fallback for 'react' module to avoid TS errors when @types/react is missing.
// Recommended: install `npm i -D @types/react` for correct typings.
declare module 'react' {
  const React: any;
  export default React;
  export function createElement(type: any, props?: any, ...children: any[]): any;
}
