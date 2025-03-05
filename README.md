![Build Status](https://github.com/internetarchive/iaux-typescript-wc-template/actions/workflows/ci.yml/badge.svg) [![codecov](https://codecov.io/gh/internetarchive/iaux-reviews/graph/badge.svg?token=06FEWLWMXR)](https://codecov.io/gh/internetarchive/iaux-reviews)

# Internet Archive Reviews

A component for displaying and editing reviews for items on the Internet Archive.

## Installation
```bash
npm install @internetarchive/reviews
```

## Usage

**Note:** The release currently only includes the web component for rendering the review edit form, and the form will trigger the spam detector unless a valid token is passed in.

**Default review form:**
```ts
<ia-review-form .identifier=${'foo'}></ia-review-form>
```

**Form with prefilled previous review:**
```ts
const myReview = new Review({
  stars: 3,
  reviewtitle: 'What a cool book!',
  reviewbody: 'I loved it.',
})

<ia-review-form .identifier=${'foo'} .oldReview=${myReview}></ia-review-form>
```

**Submittable form with token:**
```ts
import { VALID_TOKEN } from './constants.ts'

<ia-review-form .identifier=${'foo'} .token=${VALID_TOKEN}></ia-review-form>
```

## Development
### Prerequisite
```bash
npm install
```

## Testing
```bash
npm run test
```

### Watch mode
```bash
npm run test:watch
```

## Linting
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

## Releasing alpha and production tagged packages to NPM
### Releasing alpha and test packages
- Use your Jira ticket to create your namespace.  This will prevent collision as many people can be simultaneously working in the same repository.
  - run: **`npm version prerelease --preid=wedev-1234`**
    - this command will help auto-increment your alpha package tags inside your jira ticket namespace. refer to [npm versioning docs](https://docs.npmjs.com/cli/v11/commands/npm-version) & [guides for more info on command options](- this command will help auto-increment your alpha package tags inside your jira ticket namespace)
  - run: **`npm publish --tag alpha`** our most used development tags are: alpha, canary
 
### Releasing production level package
We like to create a pull request specifically after the expected changes are merged into the main branch.
Steps:
- create PR with version number as branch name. Ex, if the next version is 3.2.1, your git command will be:  `git checkout -b v3.2.1`
  - in the new branch, run the following: 
    1. **`git pull --tags`** to fetch all git tags
    2. **`npm version X.X.X`** to set the new tag WITH the commit git tagged
    3. **`git push --tags`**
    4. **`npm publish`**
- Note: version numbers must start at minimum, with 1 (1.x.x) in order for consumers to automatically receive patch updates (no tags starting with 0, like 0.x.x)
