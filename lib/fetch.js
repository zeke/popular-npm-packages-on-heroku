"use strict";

var _ = require("lodash")
var fs = require("fs")
var path = require("path")
var superagent = require("superagent")
var async = require("async")
var registry = require("npm-stats")()
var filename = path.resolve(__dirname + "/../data/dependencies.json")
var dataclip = "https://dataclips.heroku.com/nxnfcvnlruhzzawvenwcvronnowx.json"
var desiredProps = [
  'name',
  'description',
  'keywords',
  'repository',
  'homepage',
  'author',
  'license'
]

superagent
  .get(dataclip)
  .end(function(res){
    var pkgs = res.body.values.map(function(value) { return value[0] })
    async.map(
      pkgs, function(pkg, cb) {
      registry.module(pkg).info(cb)
    }, function(err, pkgs){
      pkgs = pkgs.map(function(pkg) {
        delete(pkg.readme)
        return _.pick(pkg, desiredProps)
      })
      fs.writeFileSync(filename, JSON.stringify(pkgs, null, 2))
      console.log("Created %s", filename)
    })
  })
