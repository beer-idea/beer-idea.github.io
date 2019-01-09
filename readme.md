# Beer Idea Website


## Installation

Make sure you have Ruby `2.6.0` and Bundler installed before proceeding.

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

This website is automatically published via [Netlify](https://www.netlify.com) every time the `master` branch changes.

- The custom domain we use is https://beeridea.app
- Netlify's default domain is https://gifted-golick-45f6e9.netlify.com


### Local Builds

We keep the latest content of the website in the `/build` sub directory.

It is good practice to separate the "development" commits from the actual website changes.
So once you're happy with the changes locally commit those.

Then run:

```
bundle exec middleman build
```

This will generate the updated version of the website into the `/build` subdirectory.
Once done `git add` all those changes and commit them in a new commit.
