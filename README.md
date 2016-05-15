## es2015

### How to run?
```
gulp build
json-server server/db.json
open index.html
```
To test xss detection
```
json-server server/db.with.xss.json
```

TODO: Convert ^ commands to npm scripts

Note: Downgrade lowdb to 0.13.0-beta.2 if json-server crashes.

Built with help of CodeSchool Build with us.
