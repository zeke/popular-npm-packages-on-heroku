When writing Javascript applications that perform many asynchronous operations, it's easy to wind up in [callback hell](http://callbackhell.com/). One way to avoid callback hell is to follow the unix philosophy of building small, sharp tools. As the [creator of npm](https://twitter.com/izs) once said:

> Write small modules that each do one thing, and assemble them into other modules that do a bigger thing. You can't get into callback hell if you don't go there.

Even with this principle in mind, it can still sometimes be hard to reason about control flow in a complex asynchronous application. The async package is perfect for these situations. It has a clear [functional style](https://github.com/caolan/async#asyncjs) that helps lead to a coding style that follow's Node's convention of providing a single callback as the last argument of your async function.
