# Browser.js

> A sugar for your browser.

## API

### visit( url )

Type: `String`

Redirect to the url given.

```
Browser.visit('http://example.com')
```

### parentVisit( url )

Type: `String`

Parent redirect to the url given

```
Browser.parentVisit('http://example.com')
```

### redirectParent()

Redirect the parent to the right url.

```
Browser.redirectParent()
```

### preventEmbedded()

Redirect to the right page if embedded.

```
Browser.preventEmbedded()
```

### isEmbedded()

Tell you if the page is embedded (iframe) or not.

```
Browser.isEmbedded()
```

## Changelog

- 06/01/2015
  + Add `parentVisit()`


