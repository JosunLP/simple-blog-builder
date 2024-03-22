# @simple-blog-builder/core

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
![NPM Version](https://img.shields.io/npm/v/@simple-blog-builder/core)
[![GitHub issues](https://img.shields.io/github/issues/simple-blog-builder/core)](https://github.com/simple-blog-builder/core/issues)
![npm](https://img.shields.io/npm/dt/@simple-blog-builder/core)
[![CodeFactor](https://www.codefactor.io/repository/github/simple-blog-builder/core/badge)](https://www.codefactor.io/repository/github/simple-blog-builder/core)
[![TypeScript](https://img.shields.io/badge/Developed%20in-TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)

## WIP

A component library to build up fast blogs with markdown files

## Installation

    npm install @simple-blog-builder/core

## Usage

```TypeScript

import { SBBCore, SBBCoreConfig, SBBCoreBlogEntry } from '@simple-blog-builder/core';

const blog = SBBCore.createBlog({
  blogTitle: 'My Blog',
  blogDescription: 'This is a simple blog',
});

const files: File[] = [
  new File('01-01-2024-blog-example.md', '...'),
  new File('01-01-2024-blog-example-2.md', '...'),
  new File('01-01-2024-blog-example-3.md', '...'),
];

blog.loadEntries(files)

```

## Blog entry example

```Markdown
$HEADER
TITLE: 01-01-2024 Blog Example
AUTHOR: John Doe
DATE: 01-01-2024
TAGS: blog, example
$HEADER END

# Content

This is an example of a blog post. It is a simple example of how to use the blog template.

## Subtitle

This is a subtitle. It is a simple example of how to use the blog template.

```

## License

    [MIT License](https://opensource.org/licenses/MIT)

## Docs

To this point, the library is just documented by code comments. There will be a documentation page soon. Since the library is still in development, the documentation is not a priority.

## Support

Soon™
