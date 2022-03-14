# Vizzu Chart Demo with Vite

## Adding Vizzu to an existing Vite project

Add Vizzu as dependency to the project:
```bash 
yarn add vizzu
```

Import Vizzu and set the location of the wasm module before you call the Vizzu constructor:

```Javascript { "run": false }
import Vizzu from 'vizzu';
import VizzuModule from 'vizzu/dist/cvizzu.wasm?url'

Vizzu.options({ wasmUrl: VizzuModule })

// const chart = new Vizzu(...);

```

## Setup

To get started, clone the repository, or use the green "Use as a template" button on the top right.

Run `yarn` to install the necessary dependencies.

## Running

To run the app, use `yarn dev`. It's the bare bones basic chart, but a good start.
