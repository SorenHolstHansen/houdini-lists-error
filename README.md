# To get error

in the repo root, run `yarn`.

Then cd into the Server package. Run `yarn watch`and in another terminal run `yarn dev`. This will make the graphql server run.

Then in another terminal cd into packages/Web. Here, run `npx houdini generate -p`. Then run `yarn dev`. Look into the terminal. There should be the following

```
data {
  grids: [ { id: 1, undefined: undefined }, { id: 2, undefined: undefined } ]
}
```
