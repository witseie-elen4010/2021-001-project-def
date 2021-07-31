import babel from '@rollup/plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/client/view_model/chats.js',
  output: {
    file: './src/dist/bundle.js',
    format: 'cjs'
  },

  plugins: [
    babel(),
    nodeResolve({
      include: ['**.js', 'node_modules/**'],
      browser: true,
      moduleResolution: 'node'
    }),
    commonjs()
  ]
}
