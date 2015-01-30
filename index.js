;(function (root, factory) {
  if (typeof exports === 'object') {
    module.exports = factory(require('browser-js'))
  } else {
    // root.returnExportsGlobal = factory(root.Browser) // sorry kids, I don't know how it really works so I added 'root.Browser'
    root.Browser = root.returnExportsGlobal = factory(root.Browser)
  }
}(this, function () {

  return {

    visit: function( url, top ) {
      var top = top || false

      if ( top ) window.top.location.href = url
      else window.location.href = url
    },

    newTab: function( url ) {
      window.open(url,'_blank')
    },

    reload: function( forced ) {
      var forced = forced || false
      document.location.reload( forced )
    },

    redirectToOriginal: function() {
      window.top.location.href = window.location.href
    },

    preventEmbedded: function() {
      if ( this.isEmbedded() ) {
        this.redirectToOriginal()
      }
    },

    isEmbedded: function() {
      return window.top !== window.self
    },

    isPoppedUp: function() {
      return !(window.opener === null || window.opener === undefined)
    }

  }

}))
