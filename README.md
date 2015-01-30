# Browser.js

> A sugar to handle your browser.

## API

### visit( url, top )

Redirect to the url given. If top as true, it'll redirect the top window.

```
Browser.visit('http://example.com', true)
```

### newWindow( url )

Open a new window.

```
Browser.newWindow('http://example.com')
```

### newTab( url )

Alias of `newWindow()`.

### reload( forced )

Reload the page. If forced is true, so it will reload without using caches.

```
Browser.reload('http://example.com')
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


