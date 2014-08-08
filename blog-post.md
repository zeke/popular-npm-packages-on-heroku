npm's [package.json](https://www.npmjs.org/doc/files/package.json.html) file is a wonderful thing. It tells you everything you need to know about an app or package: why it exists, how to use it, what its dependencies are, and so on. The npm registry and website provide useful information about these packages and their relationships to one another, but little is publicly known about how people are actually using them together to build web apps. As a platform upon which thousands of Node apps are deployed every day, Heroku is in a unique position to gather data about popular top-level npm dependencies and share it with the Javascript community.

Every time a Node app is deployed to Heroku, its package.json dependency data is anonymized and fed to a service for processing. What follows is a summary of the most popular npm dependencies in those web apps.

## The Top 20


### [express](https://npmjs.org/package/express)

Express is far and away the most popular npm package to date, and the de facto standard for building server-side applications with Node. Its middleware system, inspired by Ruby's [Rack](http://rack.github.io/), makes it very flexible. Express originally derived its middleware functionality from the [Connect](https://github.com/senchalabs/connect#readme) framework, but with the release of Express 4, Connect is no longer a dependency. A collection of community-maintained middleware for Express 4 is available in the [expressjs organization](https://github.com/expressjs) on GitHub.




### [jade](https://npmjs.org/package/jade)

Jade is a template language inspired by Ruby's HAML. It has a clean, whitespace-sensitive syntax that is easy to read and maintain. Jade has support for many of the features you'd expect in a template language, like [conditionals](http://jade-lang.com/reference/conditionals/), [iteration](http://jade-lang.com/reference/iteration/), and [mixins](http://jade-lang.com/reference/mixins/).




### [mongoose](https://npmjs.org/package/mongoose)

Mongoose is an object document mapper (ODM) for MongoDB. It was created way back in 2010 during the early days of Node, and was one of the first popular Node libraries that simplified the process of modelling data in a backend datastore. Mongoose provides a straightforward, schema-based solution to modeling your application data and includes built-in type casting, validation, query building, business logic hooks and more.


[mongoosejs.com](http://mongoosejs.com)

### [request](https://npmjs.org/package/request)

Request is a simplified HTTP request client. While it's perfectly reasonable to use [Node's built-in HTTP client](http://nodejs.org/api/http.html), it's often desirable to use a more high-level interface for making HTTP requests. Request is one among many packages, and is incredible feature-rich. Request has first-class support for [streaming](https://github.com/mikeal/request#streaming), [forms](https://github.com/mikeal/request#forms), [authentication](https://github.com/mikeal/request#http-authentication), [OAuth signing](https://github.com/mikeal/request#http-authentication), and more.




### [underscore](https://npmjs.org/package/underscore)

Underscore is a "kitchen sink" library for Node and browsers that provides convenience functions for working with arrays, objects, and functions. It brings many of [Ruby's beloved Enumerable functions](http://ruby-doc.org/core-2.1.2/Enumerable.html) to Javscript arrays, albeit in a slightly less glamorous way. Underscore also provides helpers for function binding, javascript templating, deep equality testing, and so on. It delegates to built-in functions, if present, so modern browsers will use the native implementations of forEach, map, reduce, filter, every, some and indexOf.


[underscorejs.org](http://underscorejs.org)

### [async](https://npmjs.org/package/async)

When writing Javascript applications that perform many asynchronous operations, it's easy to wind up in [callback hell](http://callbackhell.com/). One way to avoid callback hell is to follow the unix philosophy of building small, sharp tools. As the [creator of npm](https://twitter.com/izs) once said:

> Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there.

Even with this principle in mind, it can still sometimes be hard to reason about control flow in a complex asynchronous application. The async package is perfect for these situations. It has a clear [functional style](https://github.com/caolan/async#asyncjs) that helps lead to a coding style that follow's Node's convention of providing a single callback as the last argument of your async function.




### [ejs](https://npmjs.org/package/ejs)

EJS is a template language similar to Ruby's [erb](http://en.wikipedia.org/wiki/ERuby). EJS reads very much like HTML, and provides no special syntax for creating HTML elements. This makes EJS more verbose than other template languages such as Jade, but it's similarity to HTML makes it approachable to a wider audience of developers.




### [passport](https://npmjs.org/package/passport)

Passport is middleware for adding OpenID and OAuth authentication to Node apps. It can be unobtrusively dropped in to any Express-based web application, and has a comprehensive set of strategies that support authentication using a username and password, Facebook, Twitter, and more.


[passportjs.org](http://passportjs.org/)

### [socket.io](https://npmjs.org/package/socket.io)

Socket.IO was an early contender in the Node Websockets space, and one of the first projects to attempt to fully encapsulate all of the concerns when building socket-based applications. Socket.IO's [namespaces feature](http://socket.io/docs/rooms-and-namespaces/) provides a way to minimize the number of TCP connections while separating concerns within your application by introducing separation between communication channels. After three years in development, version 1.0 was recently released along with [a new website](http://socket.io/).




### [mongodb](https://npmjs.org/package/mongodb)

mongodb is the officially supported Node driver for MongoDB. In Spring 2012, MongoDB officially adopted the popular Node MongoDB Native Project and sponsored the maintainer, Christian Kvalheim, to continue its development. It is written in pure JavaScript and provides a native asynchronous Node.js interface to MongoDB. The driver is optimized for simplicity. It can be used on its own, but it also serves as the basis of several object mapping libraries, such as Mongoose.




### [logfmt](https://npmjs.org/package/logfmt)

logfmt is a logging format [used inside Heroku](https://brandur.org/logfmt) that is optimal for easy development, consistency, and good legibility for humans and computers. At its core, logfmt is just a basic way of displaying key/value pairs in such a way that its output is fairly easily readable by a human or a computer, while at the same time not being absolutely optimal for either. There are logfmt utilities available in many languages, including Go, Ruby, Python, Node, and Clojure. The Node logfmt package can be used as [middleware for Express or Restify](https://github.com/csquared/node-logfmt#expressrestify-parsing-middleware).




### [moment](https://npmjs.org/package/moment)

Moment is a tool for parsing, validating, manipulating, and displaying dates. Moment has a straightforward API, support for timezones and internationalization, and it works in the browser and Node.


[momentjs.com](http://momentjs.com)

### [passport-local](https://npmjs.org/package/passport-local)

passport-local lets you authenticate using a username and password in your Node.js applications. By plugging into Passport, local authentication can be easily and unobtrusively integrated into any application or framework that supports Connect-style middleware, including Express.




### [coffee-script](https://npmjs.org/package/coffee-script)

The [Coffeescript website](http://coffeescript.org/) explains it well:

> CoffeeScript is a little language that compiles into JavaScript. Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.

Proponents of Coffeescript prefer its human-friendly style reminiscent of Ruby or Python, and for the features it offers that aren't available in vanilla JavaScript like [multi-line strings](http://coffeescript.org/#strings),  [classes](http://coffeescript.org/#classes), and convenient [function binding](http://coffeescript.org/#fat-arrow).

Opponents of Coffeescript generally dislike the added mental overhead of switching between JavaScript and Coffeescript when working on projects that use both. Using Coffeescript in a project often increases the complexity of the development environment and build process, as the code must be transpiled to JavaScript. Writing npm mobuldes in Coffeescript may also decrease the likelihood of contributions from the open-source community, as many would-be contributors are turned off by the language.

The beauty of open-source development is that developers and teams can choose the tools that work for them. Hooray for language diversity.


[coffeescript.org](http://coffeescript.org)

### [grunt](https://npmjs.org/package/grunt)

Grunt is tool for automating tasks like code minification, concatenating files, adding vendor prefixes to CSS, compiling preprocessed languages, watching a directory for code changes, running test, and more. Grunt has an [incredible plugin ecosystem](http://gruntjs.com/plugins) with over 3,000 plugins to date.


[gruntjs.com](http://gruntjs.com/)

### [redis](https://npmjs.org/package/redis)





### [newrelic](https://npmjs.org/package/newrelic)

New Relic is a service for monitoring, troubleshooting, and tuning web applications. New Relic works well with Heroku, and is a [popular Heroku Add-on](https://addons.heroku.com/newrelic). The newrelic Node agent collects information about your application request volume, memory and CPU usage, and sends statistics to the New Relic service for analysis.




### [lodash](https://npmjs.org/package/lodash)

Lo-Dash is an alternative to Underscore. Its API closely matches Underscore's, but Lo-Dash was designed to be more flexible, allowing you to use [custom builds](http://lodash.com/custom-builds) that include only the functions you need without having to include the entire library as a dependency. When building a server-side Node application, using larger npm packages is not much of a problem, but as you start to use tools like browserify to build browser applications using npm packages, filesize becomes an important concern.


[lodash.com](http://lodash.com/)

### [nodemailer](https://npmjs.org/package/nodemailer)

Nodemailer is a full-featured tool for sending e-mails with Node. It supports attachments, HTML and plaintext content, and Unicode. It also supports [multiple transport](https://github.com/andris9/Nodemailer#available-transports) methods like direct, SMTP, and AWS SES.


[www.nodemailer.com](http://www.nodemailer.com)

### [stylus](https://npmjs.org/package/stylus)

Stylus is a language that compiles to CSS. Like Sass and SCSS, Stylus supports both an indented syntax and regular CSS style. Stylus takes the minimalism of Sass a step further by eschewing all superfluous syntax, such as colons between properties and values in declarations. Stylus supports many of the features like variables and mixins that designers have come to expect from a CSS preprocessor, but it has many other powerful features too, like [functions](http://learnboost.github.io/stylus/docs/functions.html), [keywords arguments](http://learnboost.github.io/stylus/docs/kwargs.html), and the [@extend directive](http://learnboost.github.io/stylus/docs/extend.html).






## The Top 100

The list below rounds out the top 100 npm dependencies. Seasoned Node developers will be familiar with many of the packages on this list, but hopefully there's a little something new for everyone.


- [connect-mongo](https://npmjs.org/package/connect-mongo): MongoDB session store for Connect

- [bcrypt](https://npmjs.org/package/bcrypt): A bcrypt library for NodeJS.

- [pg](https://npmjs.org/package/pg): PostgreSQL client - pure javascript &amp; libpq with the same API

- [connect](https://npmjs.org/package/connect): High performance middleware framework

- [connect-flash](https://npmjs.org/package/connect-flash): Flash message middleware for Connect.

- [passport-facebook](https://npmjs.org/package/passport-facebook): Facebook authentication strategy for Passport.

- [bower](https://npmjs.org/package/bower): The browser package manager

- [q](https://npmjs.org/package/q): A library for promises (CommonJS/Promises/A,B,D)

- [node-uuid](https://npmjs.org/package/node-uuid): Rigorous implementation of RFC4122 (v1 and v4) UUIDs.

- [connect-redis](https://npmjs.org/package/connect-redis): Redis session store for Connect

- [winston](https://npmjs.org/package/winston): A multi-transport async logging library for Node.js

- [optimist](https://npmjs.org/package/optimist): Light-weight option parsing with an argv hash. No optstrings attached.

- [less-middleware](https://npmjs.org/package/less-middleware): LESS.js middleware for connect.

- [grunt-cli](https://npmjs.org/package/grunt-cli): The grunt command line interface.

- [passport-twitter](https://npmjs.org/package/passport-twitter): Twitter authentication strategy for Passport.

- [aws-sdk](https://npmjs.org/package/aws-sdk): AWS SDK for JavaScript

- [validator](https://npmjs.org/package/validator): String validation and sanitization

- [cheerio](https://npmjs.org/package/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server

- [gzippo](https://npmjs.org/package/gzippo): Gzip middleware for Connect using the native zlib library in node &gt;= 0.6

- [knox](https://npmjs.org/package/knox): Amazon S3 client

- [crypto](https://npmjs.org/package/crypto): JavaScript implementations of standard and secure cryptographic algorithms.

- [passport-google-oauth](https://npmjs.org/package/passport-google-oauth): Google (OAuth) authentication strategies for Passport.

- [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch): Run predefined tasks whenever watched file patterns are added, changed or deleted.

- [sails](https://npmjs.org/package/sails): API-driven framework for building realtime apps, using MVC conventions (based on Express and Socket.io)

- [consolidate](https://npmjs.org/package/consolidate): Template engine consolidation library

- [mysql](https://npmjs.org/package/mysql): A node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.

- [less](https://npmjs.org/package/less): Leaner CSS

- [nconf](https://npmjs.org/package/nconf): Hierarchical node.js configuration with files, environment variables, command-line arguments, and atomic object merging.

- [xml2js](https://npmjs.org/package/xml2js): Simple XML to JavaScript object converter.

- [sendgrid](https://npmjs.org/package/sendgrid): Official SendGrid NodeJS library.

- [nodetime](https://npmjs.org/package/nodetime): Performance Profiler and Monitor

- [sails-disk](https://npmjs.org/package/sails-disk): Persistent local-disk adapter for Sails.js / Waterline

- [forever](https://npmjs.org/package/forever): A simple CLI tool for ensuring that a given node script runs continuously (i.e. forever)

- [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify): Minify files with UglifyJS.

- [nib](https://npmjs.org/package/nib): Stylus mixins and utilities

- [handlebars](https://npmjs.org/package/handlebars): Handlebars provides the power necessary to let you build semantic templates effectively with no frustration

- [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy): Copy files and folders.

- [express-validator](https://npmjs.org/package/express-validator): Express middleware for the validator module.

- [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean): Clean files and folders.

- [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat): Concatenate files.

- [colors](https://npmjs.org/package/colors): get colors in your node.js console like what

- [restify](https://npmjs.org/package/restify): REST framework

- [ejs-locals](https://npmjs.org/package/ejs-locals): Express 3.x locals for layout, partial and blocks.

- [passport-github](https://npmjs.org/package/passport-github): GitHub authentication strategy for Passport.

- [mocha](https://npmjs.org/package/mocha): simple, flexible, fun test framework

- [view-helpers](https://npmjs.org/package/view-helpers): View helper methods for expressjs and other node stuff

- [grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint): Validate files with JSHint.

- [csv](https://npmjs.org/package/csv): CSV parser with simple api, full of options and tested against large datasets.

- [ws](https://npmjs.org/package/ws): simple to use, blazing fast and thoroughly tested websocket client, server and console for node.js, up-to-date against RFC-6455

- [oauth](https://npmjs.org/package/oauth): Library for interacting with OAuth 1.0, 1.0A, 2 and Echo.  Provides simplified client access and allows for construction of more complex apis and OAuth providers.

- [sequelize](https://npmjs.org/package/sequelize): Multi dialect ORM for Node.JS

- [underscore.string](https://npmjs.org/package/underscore.string): String manipulation extensions for Underscore.js javascript library.

- [hbs](https://npmjs.org/package/hbs): Express.js template engine plugin for Handlebars

- [express3-handlebars](https://npmjs.org/package/express3-handlebars): A Handlebars view engine for Express which doesn&#x27;t suck.

- [cron](https://npmjs.org/package/cron): Cron jobs for your node

- [marked](https://npmjs.org/package/marked): A markdown parser built for speed

- [twilio](https://npmjs.org/package/twilio): A Twilio helper library

- [passport-google](https://npmjs.org/package/passport-google): Google (OpenID) authentication strategy for Passport.

- [mime](https://npmjs.org/package/mime): A comprehensive library for mime-type mapping

- [swig](https://npmjs.org/package/swig): A simple, powerful, and extendable templating engine for node.js and browsers, similar to Django, Jinja2, and Twig.

- [hiredis](https://npmjs.org/package/hiredis): Wrapper for reply processing code in hiredis

- [uglify-js](https://npmjs.org/package/uglify-js): JavaScript parser, mangler/compressor and beautifier toolkit

- [connect-assets](https://npmjs.org/package/connect-assets): A Rails-like asset pipeline for Connect

- [mongojs](https://npmjs.org/package/mongojs): Easy to use module that implements the mongo api

- [jsdom](https://npmjs.org/package/jsdom): A JavaScript implementation of the DOM and HTML standards

- [gm](https://npmjs.org/package/gm): GraphicsMagick and ImageMagick for node.js

- [twit](https://npmjs.org/package/twit): Twitter API client for node (REST &amp; Streaming)

- [debug](https://npmjs.org/package/debug): small debugging utility

- [cloudinary](https://npmjs.org/package/cloudinary): Cloudinary NPM for node.js integration

- [mandrill-api](https://npmjs.org/package/mandrill-api): The official API client for the Mandrill email as a service product.

- [stripe](https://npmjs.org/package/stripe): Stripe API wrapper

- [should](https://npmjs.org/package/should): test framework agnostic BDD-style assertions

- [node-static](https://npmjs.org/package/node-static): simple, compliant file streaming module for node

- [jquery](https://npmjs.org/package/jquery): JavaScript library for DOM operations

- [path](https://npmjs.org/package/path): Node.JS path module

- [passport-http](https://npmjs.org/package/passport-http): HTTP Basic and Digest authentication strategies for Passport.

- [redis-url](https://npmjs.org/package/redis-url): Use a REDIS_URL to connect to Redis

- [superagent](https://npmjs.org/package/superagent): elegant &amp; feature rich browser / node HTTP with a fluent API

- [grunt-contrib-cssmin](https://npmjs.org/package/grunt-contrib-cssmin): Compress CSS files.

- [sails-mongo](https://npmjs.org/package/sails-mongo): Mongo DB adapter for Sails.js


## Choose Wisely

A word of caution: Just because a particular package is popular doesn't always make it the best choice for your purposes. The intent of this post is not to promote a particular collection of packages, but rather to publicize what packages are in popular use today on Heroku today, and help give you a sense of what's out there.

The list above is just scratching the surface of what's available in the npm registry, which has over [80,000 packages](https://www.npmjs.org/) to date, and shows no signs of slowing.

## Dog Food

This very blog post was pieced together using a handful of npm modules, some of which appear in the list above: []


[async](https://npmjs.org/package/), 
"handlebars": "^2.0.0-alpha.4",
"lodash": "^2.4.1",
"npm-stats": "^0.3.0",
"superagent": "^0.18.0"
