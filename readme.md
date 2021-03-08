# Stencil and Storybook Starter

This is a starter project for building Web Components using Stencil and documenting and testing them with Storybook.

This tool was built to learn Web Components and to learn how to utilize Storybook to document and test them. I wanted to share the process I used to build this starter and wrote a tutorial that can be found [here](https://mabrycodes.medium.com/build-a-stencil-and-storybook-environment-74ab7ef9a109)

## Getting Started

To get started, clone this repo in your working folder:

```bash
git clone https://github.com/mabry1985/stencilBook.git
cd stencilBook
git remote rm origin
```

and run:

```bash
npm install
```

Spin up the Storybook server and Stencil watcher:  
```bash
npm dev
```

# Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

[Stencil Docs](https://stenciljs.com/docs/my-first-component)

# Storybook

Storybook is a tool for UI development. 

It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

Use Storybook to build small atomic components and complex pages in your web application. If it's a UI, you can build it with Storybook.

[Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)

