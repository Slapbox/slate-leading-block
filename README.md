# slate-leading-block

## Thanks to GitbookIO
#### for their trailing block plugin, which this is simply a rewrite of for leading blocks

[![NPM version](https://badge.fury.io/js/slate-leading-block.svg)](http://badge.fury.io/js/slate-leading-block)
[![Linux Build Status](https://travis-ci.org/GitbookIO/slate-leading-block.png?branch=master)](https://travis-ci.org/GitbookIO/slate-leading-block)

Slate plugin to ensure a leading block.

### Install

```
npm install slate-leading-block
```

### Simple Usage

```js
import LeadingBlock from 'slate-leading-block'

const plugins = [
  LeadingBlock({ type: 'paragraph' })
]
```

#### Arguments

This plugin accepts options to redefine the following block types:

- ``[type: String]`` — type for the leading block

### Utilities

`slate-leading-block` exports utilities and transforms:

#### `transforms.focusAtStart`

`plugin.transforms.focusAtStart(transform: Transform) => Transform`

Focus at the end of the first block. (?)
