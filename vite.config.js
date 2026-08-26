import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

const Renderer = vitePrerender.PuppeteerRenderer

export default defineConfig({
  build: {
    // Встроенный в vite-plugin-prerender puppeteer использует старый Chromium 78,
    // который не понимает ?./??  из более новых таргетов esbuild — без этого
    // JS падает с SyntaxError и Vue не монтируется при prerender'е.
    target: 'es2019',
  },
  plugins: [
    vue(),
    vitePrerender({
      // Укажите путь к папке сборки
      staticDir: path.join(__dirname, 'dist'),
      // Укажите список страниц, которые нужно превратить в готовый HTML
      routes: [ '/', '/about', '/contacts' ],
      renderer: new Renderer({
        // Показывает ошибки рендеринга страницы в puppeteer — без этого
        // сборка "успешно" завершается, даже если Vue не смонтировался (пустой <div id="app">).
        consoleHandler(route, msg) {
          if (msg.type() === 'error') {
            console.error(`[prerender:${route}] ${msg.text()}`)
          }
        },
      }),
      // Puppeteer не пробрасывает необработанные JS-исключения в consoleHandler,
      // поэтому падение рендера (например, из-за несовместимого синтаксиса) иначе
      // прошло бы незамеченным и оставило бы пустую страницу для поисковиков.
      postProcess(renderedRoute) {
        if (!renderedRoute.html.includes('data-v-app')) {
          throw new Error(
            `[vite-plugin-prerender] Пустой рендер для маршрута "${renderedRoute.route}" — Vue не смонтировался. ` +
            `Проверьте JS-ошибки в puppeteer (например, build.target несовместим с версией Chromium из puppeteer).`
          )
        }
        return renderedRoute
      },
    }),
  ],
})
