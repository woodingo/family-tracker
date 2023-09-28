import path from 'path';
import transform from 'lodash/transform';
import tsConfig from './tsconfig.json';

module.exports = {
  webpack: {
    alias: transform(
      tsConfig.compilerOptions.paths,
      (r: Record<string, string>, [v]: string[], k: string) => {
        r[k.replace('/*', '')] = path.resolve(
          __dirname,
          `./${v.replace('*', '')}`,
        );
      },
    ),
  },
};
