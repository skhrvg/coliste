![](https://user-images.githubusercontent.com/35118149/213958815-794959eb-834e-4fb6-a0f8-f17b8cdad55f.svg)

# coliste

This is a starter template for creating a simple component library using [Vue3](https://vuejs.org/),
[TypeScript](https://www.typescriptlang.org/), [pnpm](https://pnpm.io/), [Vite](https://vitejs.dev/)
and [ESLint](https://eslint.org/) - most loved tools in the Vue community.

## Developer experience
- You don't need to constantly rebuild the library manually to see the changes in the demo app (included playground
package). This monorepo provides a single command to start both the library and the demo app in watch mode.
- No need to use Prettier or any other code formatter. ESLint is [configured](https://github.com/antfu/eslint-config)
to fix all the code style issues automatically. Just enable `Run eslint --fix on save` in your IDE.
- Disk space is not an issue. pnpm uses hard links to store the dependencies, so you don't need to download them every
time.
- Library is configured to provide IntelliSense for the components in the demo app and after publishing. You can
see proper types for the props, events and slots.

## Installation
1. Create a new repository from this template and clone it
2. Replace all the occurrences of `yourlib` with your library name
3. Replace metadata in `library/package.json` like author, description, etc. with your own
4. Replace `LICENSE` file with your own license
5. Enable `Run eslint --fix on save` in your IDE
6. Install dependencies
    ```shell
    pnpm i
    ```
7. Start the demo app and build the library in watch mode
    ```shell
    pnpm dev
    ```

## Usage
- Add your components to `library/src/components` folder
- Export them in `library/src/index.ts`
- Play with them in the demo app in `playground/src/App.vue`

## Publishing
1. Stop `pnpm dev` if it's running
2. Bump the version in `library/package.json`
3. Build the library
    ```shell
    pnpm library:build
    ```
4. Publish the library to npm
    ```shell
    pnpm library:publish
    ```

## File structure
```
.
├── library/                    library package
│   ├── dist/                   build output
│   │   └── ...
│   ├── node_modules/
│   │   └── ...
│   ├── src/
│   │   ├── components/         your components
│   │   │   └── ...
│   │   └── index.ts            library entry point
│   ├── env.d.ts
│   ├── package.json            library package metadata
│   ├── tsconfig.json
│   └── vite.config.ts
├── node_modules/
│   └── ...
├── playground/                 demo app
│   ├── node_modules/
│   │   └── ...
│   ├── src/
│   │   ├── assets/
│   │   │   └── main.css        demo app global styles
│   │   ├── App.vue             play with your components here
│   │   └── main.ts             demo app entry point
│   ├── env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── .editorconfig
├── .gitignore
├── .npmrc
├── eslint.config.js
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

## License
[MIT](https://choosealicense.com/licenses/mit/) 2023-present Gleb Sakharov
