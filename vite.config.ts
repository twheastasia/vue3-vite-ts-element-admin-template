import path from "path"
import vuePlugin from '@vitejs/plugin-vue';
import { defineConfig, UserConfigExport, ConfigEnv, Plugin } from "vite"
import svgPlugin from "vite-plugin-svg-sprite-component"
import { viteMockServe } from 'vite-plugin-mock'

export default ({ command }: ConfigEnv): UserConfigExport => {
  // 开发服务器端口
  const port: number =  parseInt(process.env.APP_PORT || '3000');

  return {
    plugins: [vuePlugin(),
    svgPlugin({ symbolId: (name) => "icon-" + name }),
    viteMockServe({
      // default
      mockPath: 'mock',
      localEnabled: command === 'serve',
      supportTs: true
    }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'path': 'path-browserify'
      }
    },
    server: {
      port,
      open: true,
      proxy: {
        // 解决跨域问题
        '^/kibana': {
          // onProxyReq: (proxyReq, req, res) => {
          //   proxyReq.setHeader('Referer', 'backend')
          //   proxyReq.setHeader('Origin', 'http://www.baidu.com')
          // },
          headers: {
            Referer: 'backend',
            Origin: 'http://www.baidu.com'
          },
          target: 'https://collector.xxx.com',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('^/kibana', '/1')
        }
      },
      cors: true
    }
  };
};