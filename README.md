# dana096-hello-vue.github.io

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## How to Deploy
|STG|BRANCH|TRIGGER|URL|
|---|---|---|---|
|DEV|Branch of PR|manual firebase cmd*|[danablog.web.app](https://dana096-hellovue.web.app)|
|PRD|main|Auto Github Action|[dana096.github.io](https://dana096-hello-vue.github.io)|
```bash
# manual firebase cmd*
$ firebase deploy

=== Deploying to 'dana096-hello-vue'...

i  deploying hosting
i  hosting[dana096-hellovue]: beginning deploy...
i  hosting[dana096-hellovue]: found 4 files in docs
✔  hosting[dana096-hellovue]: file upload complete
i  hosting[dana096-hellovue]: finalizing version...
✔  hosting[dana096-hellovue]: version finalized
i  hosting[dana096-hellovue]: releasing new version...
✔  hosting[dana096-hellovue]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/dana096-hello-vue/overview
Hosting URL: https://dana096-hellovue.web.app
```

<br>
