# boilerplate-next

The boilerplate-next frontend app

> Visit the live app at [https://boilerplate-next.ergil.dev/](https://boilerplate-next.ergil.dev/)

> Visit the live storybook at [https://sb-boilerplate-next.ergil.dev/](https://sb-boilerplate-next.ergil.dev/)

## Prerequisites

You will need the following things properly installed on your computer:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Yarn](https://yarnpkg.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd boilerplate-next`
- `yarn install`

## Running Development

- `yarn start:local`
- Visit the app at [http://localhost:4000](http://localhost:4000).

## Building

```bash
yarn build
```

> The build result will be in `./.next` directory

## Storybook

### Running the Storybook
- `yarn start:storybook`
- Visit the storybook at [http://localhost:6006](http://localhost:6006).

### To build the storybook:
```bash
yarn build:storybook
```

> The build result will be in `./storybook` directory

Then run

```bash
# run server side renderer server
yarn start
```

## Testing

```bash
# unit tests
yarn test:unit

# unit tests in whatch mode
yarn test:unit:whatch

# unit tests with coverage
yarn test:unit:coverage

# unit tests and update snapshot
yarn test:unit:update-snapshot
```

## Our Environments

We have the following environments:

| Environments | Description                                              |
| ------------ | -------------------------------------------------------- |
| _production_ | It is the production environment (a.k.a _"prod"_)        |
| _local_      | It is the local environment running on developer machine |

## Commits Guideline

We use the standard of [conventional commits](https://www.conventionalcommits.org/), so all commits in this repository must follow this convention.

## Install Editor Plugins

To develop in this project, you will need to install the following plugins in your editor.

| Plugin   | Required |
| -------- | -------- |
| eslint   | \*       |
| Prettier | \*       |
