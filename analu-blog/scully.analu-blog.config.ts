import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'analu-blog',
  distFolder: './dist/analu-blog', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/posts/:postId': {
      type: 'contentFolder',
      postId: {
        folder: "./posts"
      }
    }
  },//rotas do blog
};