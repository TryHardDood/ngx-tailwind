export interface Schema {
  /**
   * Css stylesheet format.
   */
  cssFormat: CssFormat;

  /**
   * The project in which we want to generate our component.
   */
  project: string;

  /**
   * postcss version.
   */
  postcssVersion: string;

  /**
   * Skip initializing Tailwind CSS.
   */
  skipTailwindInit?: boolean;

  /**
   * Tailwind CSS version.
   */
  tailwindVersion: string;
  
  /**
   * Tailwind JIT version.
   */
   tailwindJitVersion: string;

  /**
   * Set the build:prod script to be only UNIX compatible.
   */
  disableCrossPlatform?: boolean;

  /**
   * cross-env version.
   */
  crossEnvVersion: string;

  /**
   * @tailwindcss plugins installed and added to tailwind.config.js
   */
  tailwindPlugins: string[];
}

export type CssFormat = 'css' | 'scss';
