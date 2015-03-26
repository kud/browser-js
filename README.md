# Browser.js

> A sugar to handle your browser.

## Installation

```console
$ npm install browser-js (--save)
```

## Usage

### CommonJS

```javascript
var browser = require('browser-js')

browser.visit('https://github.com/kud/browser-js')
```

### Global

```javascript
window.Browser.visit('https://github.com/kud/browser-js')
```

## API

### visit( url, top )

Redirect to the url given. If top as true, it'll redirect the top window.

```
Browser.visit('http://example.com', true)
```

### reload( forced )

Reload the page. If forced is true, so it will reload without using caches.

```
Browser.reload('http://example.com')
```

### goBack()

Go to the previous page.

```
Browser.goBack()
```

### newWindow( url )

Open a new window.

```
Browser.newWindow('http://example.com')
```

### newTab( url )

Alias of `newWindow()`.

### newPopup( opts )

Open a new popup.

```
Browser.newPopup({ url: 'http://example.com', options: { height: '758', width: '1024' } })
```

### getParentUrl()

Returns the parent url. `undefined` if not in an iframe.

```
Browser.getParentUrl()
```

### getParentHostname()

Returns the parent hostname. `undefined` if not in an iframe.

```
Browser.getParentHostname()
```

### redirectToOriginal()

Redirect the main window to the url of the iframe.

```
Browser.redirectToOriginal()
```

### preventEmbedded()

Avoid the website as iframe.

```
Browser.preventEmbedded()
```

### isEmbedded()

Check if your website is embedded (iframe) or not.

```
Browser.isEmbedded()
```

### isPoppedUp()

Check if your website is in a popup or not.

```
Browser.isPoppedUp()
```

## Changelog

- 26/03/2015 — 1.10.0
  + Add `newPopup()`. Also add some tests.

- 02/02/2015 — 1.9.0
  + Add `getParentUrl()`, `getParentHostname()`.

- 01/02/2015 — 1.8.0
  + Add `goBack()` to go to the previous page.

- 30/01/2015 — 1.7.0
  + Add `newWindow()`, `newTab()` is now its alias.

- 16/01/2015 — 1.6.0
  + Add `reload()` to reload the page.

- 13/01/2015 — 1.5.0
  + Add `isPoppedUp()` to check if your website is in a popup or not.

- 09/01/2015 — 1.4.0
  + Now only CommonJS is supported.

- 09/01/2015 — 1.3.0
  + Replace `parentVisit()` by `visit( url, true )`
  + Replace `redirectParent()` by `redirectToOriginal()`
  + Add `newTab()` to open a new tab. Thank you captain obvious.

- 06/01/2015 — 1.2.0
  + Add `parentVisit()`


