# Test environment for Pencil.js

This package setup a proper browser environment to test Pencil.js in node.

It's compatible with all existing test-runners (AVA, Jest, Mocha ...)

## Installation

    npm i --save-dev @pencil.js/test-environment

## Usage

Just import the package, **it will edit the global scope with required variables**.

```js
import "@pencil.js/test-environment";
```

Or if your test-runner allows it, set it as require dependency in the configuration.

## Example

```js
import "@pencil.js/test-environment";
import Pencil from "pencil.js";
import test from "ava";

test("My test", (t) => {
    const scene = new Pencil.Scene();
    t.true(scene.isScene);
});
```
