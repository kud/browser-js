# Browser.js

> A sugar for your browser.

## API

### visit( url, top )

Redirect to the url given. If top as true, it'll redirect the top window.

```
Browser.visit('http://example.com', true)
```

### newTab( url )

Open a new tab.

```
Browser.newTab('http://example.com')
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

## Changelog

- 09/01/2015 — 1.4.0
  + Now only CommonJS is supported.

- 09/01/2015 — 1.3.0
  + Replace `parentVisit()` by `visit( url, true )`
  + Replace `redirectParent()` by `redirectToOriginal()`
  + Add `newTab()` to open a new tab. Thank you captain obvious.

- 06/01/2015 — 1.2.0
  + Add `parentVisit()`


