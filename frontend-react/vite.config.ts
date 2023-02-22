import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// export default defineConfig(({ command, mode}) => {
//   //Load env file based on `mode` in the currente directory.
//   //set the thir parameter to "to load all env regardless of the `Vite_` prefix"
//   const env = loadEnv(mode, process.cwd(),'')
//   return {
//     //vite config
//     define: {
//       _APP_ENV_:env.APP_ENV,
//     }
//   }
// })