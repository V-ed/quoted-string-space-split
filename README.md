# quoted-string-space-split

![CI/CD](https://github.com/V-ed/quoted-string-space-split/workflows/CI/CD/badge.svg)
[![npm](https://img.shields.io/npm/v/quoted-string-space-split)](https://www.npmjs.com/package/quoted-string-space-split)
[![Coverage Status](https://coveralls.io/repos/github/V-ed/quoted-string-space-split/badge.svg?branch=master)](https://coveralls.io/github/V-ed/quoted-string-space-split?branch=master)
![npm bundle size](https://img.shields.io/bundlephobia/min/quoted-string-space-split?label=install%20size)

Typescript / Javascript string splitter that allows to split a string by spaces, but bypassing quoted content

Bypassing quoted content (`Content and "quoted content"`) means that you can know what does the user actually wanted to say, in case where you need to split your string by space.

## Installation

```console
npm install quoted-string-space-split
```

## Basic Usage

There are two main methods to use this package :

```typescript
import splitSpacesExcludeQuotes from 'quoted-string-space-split';

const myArray = splitSpacesExcludeQuotes('Content and "quoted content"');

console.log(myArray); // ["Content", "and", "quoted content"]
```

```typescript
import { splitSpacesExcludeQuotesDetailed } from 'quoted-string-space-split';

const myArray = splitSpacesExcludeQuotesDetailed('Content and "quoted content"');

console.log(myArray);
/*
[
    {
        type: "plain",
        value: "Content"
    },
    {
        type: "plain",
        value: "and"
    },
    {
        type: "double",
        value: "quoted content"
    }
]
*/
```

## Author

- Guillaume Marcoux ([V-ed](https://github.com/V-ed)) - Owner

See also the list of [contributors](https://github.com/V-ed/quoted-string-space-split/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
