import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed-variant": "#454747",
        "inverse-primary": "#c6c6c6",
        "on-primary": "#ffffff",
        "outline-variant": "#cfc4c5",
        "secondary-fixed-dim": "#c6c6c7",
        "on-surface-variant": "#4c4546",
        "surface-dim": "#dbdad9",
        "on-secondary-container": "#616363",
        "on-secondary": "#ffffff",
        "surface-container": "#efeded",
        "tertiary-fixed": "#e2e2e2",
        "secondary-container": "#dfe0e0",
        "on-background": "#1b1c1c",
        "tertiary-fixed-dim": "#c6c6c7",
        "surface-container-low": "#f5f3f3",
        "surface-variant": "#e4e2e2",
        "on-primary-fixed-variant": "#474747",
        "on-error-container": "#93000a",
        "on-surface": "#1b1c1c",
        "surface": "#fbf9f8",
        "on-secondary-fixed-variant": "#454747",
        "secondary-fixed": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e9e8e7",
        "primary-fixed": "#e2e2e2",
        "outline": "#7e7576",
        "on-tertiary-fixed": "#1a1c1c",
        "tertiary-container": "#1a1c1c",
        "on-error": "#ffffff",
        "secondary": "#5d5f5f",
        "on-primary-container": "#848484",
        "on-primary-fixed": "#1b1b1b",
        "on-tertiary-container": "#838484",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "primary-fixed-dim": "#c6c6c6",
        "background": "#fbf9f8",
        "surface-container-highest": "#e4e2e2",
        "primary": "#000000",
        "surface-tint": "#5e5e5e",
        "on-tertiary": "#ffffff",
        "inverse-on-surface": "#f2f0f0",
        "tertiary": "#000000",
        "on-secondary-fixed": "#1a1c1c",
        "surface-bright": "#fbf9f8",
        "inverse-surface": "#303031",
        "primary-container": "#1b1b1b"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px",
        "md": "0.375rem"
      },
      spacing: {
        "margin-md": "2rem",
        "margin-sm": "1rem",
        "grid-dot": "40px",
        "gutter": "1.5rem",
        "margin-lg": "4rem"
      },
      fontFamily: {
        "headline-lg-mobile": ["Space Grotesk", "sans-serif"],
        "dot-matrix-display": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "headline-xl": ["Space Grotesk", "sans-serif"],
        "label-mono": ["JetBrains Mono", "monospace"]
      },
      fontSize: {
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "500" }],
        "dot-matrix-display": ["40px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "500" }],
        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "label-mono": ["12px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "500" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;
