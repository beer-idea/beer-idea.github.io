# Beer Idea Website


## Installation

Make sure have Ruby `2.6.0` and Bundler installed before proceeding.

```
bundle install
```


## Run Locally

Executing

```
bundle exec middleman server
```

will start the web server at http://localhost:8080.


## Deploying

This website is published via GitHub Pages from the `/docs` sub directory.

It is good practice to separate the "development" commits from the actual website changes.
So once you're happy with the changes locally commit those.

Then run:

```
bundle exec middleman build
```

This will generate the updated version of the website into the `/docs` subdirectory.
Once done `git add` all those changes and commit them in a new commit.
Pushing those changes will update the website's content.
