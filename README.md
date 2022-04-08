# Markdown problem in astro 1 (beta) vs pre-beta

In short: In the beta, a markdown file can no longer simply be imported and rendered like a component - Astro thinks there is a missing (FE-framework) integration.

And with an integration registered, it fails in another way (at least for React).

This repo has three branches, showing the difference between versions `v0.22.20` and `v1.0.0-beta.5` (with and without a registered React integration).

To study any of the examples, built with fresh dependencies, run:

    npm run start:clean


The examples are:

| Version                         | How to run it                                                   | Works |
|---------------------------------|-----------------------------------------------------------------|-------|
| astro@v0.22.20                  | `git checkout astro-v0.22.20 && npm run start:clean`            | Yes   |
| astro@v1.0.0-beta.5             | `git checkout master && npm run start:clean`                    | No    |
| astro@v1.0.0-beta.5, with React | `git checkout astro-v1.0.0-beta.5-react && npm run start:clean` | No    |
