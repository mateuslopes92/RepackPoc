import * as Repack from '@callstack/repack';

import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default Repack.defineWebpackConfig((env) => ({
  entry: {
    main: path.resolve(__dirname, 'index.js'),
  },
  mode: env === 'production' ? 'production' : 'development',
  optimization: {
    splitChunks: {
      chunks: 'async', // only split dynamic imports
    },
  },
  output: {
    filename: '[name].[fullhash].bundle.js', // unique main bundle to avoid conflicts
  },
}));