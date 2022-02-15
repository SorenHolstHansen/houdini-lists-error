# To get error

in the repo root, run `yarn`.

Then cd into the Server package. Run `yarn watch` and in another terminal run `yarn dev`. This will make the graphql server run.

Then in another terminal cd into packages/Web. Here, run `npx houdini generate -p`. Then run `yarn dev`. Look into the terminal. There should be the following error

```
Pulled latest schema from http://localhost:4000/graphql
[
  Error: @list can only be applied to types with an id field.
...
```
