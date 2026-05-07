import type { StorybookConfig } from '@storybook/react-vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { InlineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],

  addons: ['@storybook/addon-a11y'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (cfg: InlineConfig) => {
    cfg.resolve = cfg.resolve ?? {};
    cfg.resolve.alias = {
      ...(cfg.resolve.alias as Record<string, string>),
      '@': resolve(__dirname, '../src'),
    };

    return cfg;
  },
};

export default config;
