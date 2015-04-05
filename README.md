# popular-npm-packages-on-heroku

This project was created to help compile a blog post about the most popular npm dependencies on Heroku.

## Innards

- [superagent](https://github.com/visionmedia/superagent) is an elegant HTTP client for Node and browsers. It's used to download the dependency list from a [Heroku Dataclip](https://dataclips.heroku.com/nxnfcvnlruhzzawvenwcvronnowx#nomnom-Top-100-dependencies).
- [npm-stats](https://github.com/hughsk/npm-stats) is a nice little module for getting package metadata from the npm registry, like description, keywords, homepage, etc.
- [handlebars](https://github.com/wycats/handlebars.js) is a template engine.
- [async](https://github.com/caolan/async) makes dealing with asynchronous code more palatable. It's used to make 100 calls to the npm registry in parallel, then aggregate all their metadata into a single object.
- [lodash](https://github.com/lodash/lodash) is used to extract only the desired properties from the response objects.

## Usage

```sh
npm install
npm run fetch
npm run render
cat blog-post.md
```

## License

MIT
