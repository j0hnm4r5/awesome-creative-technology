# Contribution Guidelines

## The Easy Way

Submit a [new issue](https://github.com/j0hnm4r5/awesome-creative-technology/issues/new/choose) using the "Request an addition" issue template. This will automatically create a pull request which the maintainers will be able to merge in.

## DIY

Manually add your group to the list.

**Please add/update any groups within `groups.ts` and submit a PR.**

The front-facing README (and the CLOSED and UP readmes) will generate via GitHub Actions upon Push. Any changes directly to these files will be overwritten upon generation, so please only edit `groups.ts`.

Also be sure to run `npm run format` locally before commit (if you're not already using an ESLint plugin in VSCode). This is run as an Action as well, but it's best to run it locally first to make sure it passes.

## Updating your PR

A lot of times, making a PR adhere to the standards above can be difficult. If the maintainers notice anything that we'd like changed, we'll ask you to edit your PR before we merge it. There's no need to open a new PR, just edit the existing one. If you're not sure how to do that, [here is a guide](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md) on the different ways you can update your PR so that we can merge it.
