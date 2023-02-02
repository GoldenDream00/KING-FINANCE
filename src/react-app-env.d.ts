// <reference types="react-scripts" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.otf';

declare module '*.ttf';

declare module '*.md' {
  const value: string; 
  export default value;
}