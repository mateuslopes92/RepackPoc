import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default Repack.defineWebpackConfig({
  context: __dirname,
  entry: {
    index: './index.js', // named entry
  },
  resolve: {
    ...Repack.getResolveOptions(),
  },
  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          options: {},
        },
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin({
      asyncChunkLoading: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1000,
      automaticNameDelimiter: '-',
    },
  },
output: {
  filename: (pathData) =>
    pathData.chunk.name === 'index' ? 'index.bundle' : '[name].bundle',
  chunkFilename: 'chunks/[name].chunk.bundle',
  path: path.join(__dirname, 'dist'),
},
});
