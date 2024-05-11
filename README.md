# fxcie-utils
My Utilities

Methods I need to have access to from anywhere.

## Install

```
npm install @fxcie/svg
```

## Usage

```
// Common JS
const SVG = require('@fxcie/svg/cjs')

// Module JS
import { SVG } from '@fxcie/svg'
or
import { SVG } from '@fxcie/svg/mjs'


// Typescript
import { SVG } from '@fxcie/svg/src'

```

## Static

SVG.modifyPath(path: string, options: PathModifyOptions): Create a modified path.

Path modify options are in an object with the following optional options:
- scaleX as number;
- scaleY as number;
- shiftX as number;
- shiftY as number;
- decimalPlaces as number;
