# Contribution Guidelines

## Easy, but slow (for now)

Submit a [new issue](/issues/new?assignees=j0hnm4r5&labels=new+addition&projects=&template=request-addition.yaml&title=%5BAdd%5D:+) and the maintainers will add it to the list.

We are working on a way to make this process more automatic.

## DIY

Manually add your group to the list.

**Please add/update any groups within `groups.ts` and submit a PR.**

The front-facing README (and the CLOSED and UP readmes) will generate via GitHub Actions upon Push. Any changes directly to these files will be overwritten upon generation, so please only edit `groups.ts`.

Also be sure to run `npm run format` locally before commit (if you're not already using an ESLint plugin in VSCode). This is run as an Action as well, but it's best to run it locally first to make sure it passes.

## Updating your PR

A lot of times, making a PR adhere to the standards above can be difficult. If the maintainers notice anything that we'd like changed, we'll ask you to edit your PR before we merge it. There's no need to open a new PR, just edit the existing one. If you're not sure how to do that, [here is a guide](https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md) on the different ways you can update your PR so that we can merge it.
