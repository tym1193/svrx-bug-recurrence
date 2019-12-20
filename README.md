# svrx-bug-recurrence

Bug recurrence of [Server-X](https://github.com/svrxjs/svrx)'s livereload feature.

## Requirement

- `node@8.16.0LTS`

- `svrx@1.1.3`

## Install

> `npm install`

## Run `Server-X` via `node.js` API

> `node index`

## Recurrence

1. Ensure `Server-X` running correctly at port `8000` `[default port]`

2. Open `http://localhost:8000/test.html` in browser

  - > It will display a text of `"test from mock server"`.

3. Edit `config/route.js` and try to **save multiple times**

4. Refresh browser with the same url `http://localhost:8000/test.html` while trying `step 3`.

  - > `livereload` feature seems to be broken then display a `404 Not Found` page
