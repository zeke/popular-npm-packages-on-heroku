"use strict";

var fs = require("fs")
var path = require("path")
var hbs = require("handlebars")
var dependencies = require("../data/dependencies.json")
var template = hbs.compile(fs.readFileSync(__dirname + "/../template.hbs").toString())
var schemey = new RegExp("^https?:\/\/", "i")
var writeupsDir = path.resolve(__dirname + "/../data/writeups")
var writeups = {}
var context = {}

fs.readdirSync(writeupsDir).forEach(function(filename) {
  var key = filename.replace(".md", "")
  writeups[key] = fs.readFileSync(writeupsDir + "/" + filename).toString()
})

dependencies = dependencies.map(function(dep, index){

  // Save numerical rank
  dep.rank = index + 1

  // Inject longer prose writeup into object
  if (writeups[dep.name]) dep.writeup = writeups[dep.name]

  // GitHub is not a homepage
  if (dep.homepage && dep.homepage.match(/github\.com/))
    delete(dep.homepage)

  // Create a nice http-free version of the homepage URL
  if (dep.homepage)
    dep.homepage_text = dep.homepage
      .replace(schemey, '')
      .replace(/\/$/, '')

  return dep
})

context.top = dependencies.slice(0,20)
context.the_rest = dependencies.slice(20,10000)

fs.writeFileSync(__dirname + "/../blog-post.md", template(context))
