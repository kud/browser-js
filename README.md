# Browser.js

> A sugar for your browser.

## API

### visit( url )

Type: `String`

Redirect to the url given.

```
Browser.visit('http://example.com')
return false
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

