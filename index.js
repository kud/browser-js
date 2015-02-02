;(function(root, factory) {

  // CommonJS
  if (typeof exports === 'object') {
    module.exports = factory(require('browser-js'))
  }
  // Global
  else {
    root.Browser = factory(root.Browser)
  }

}(this, function () {

  return {

    visit: function( url, top ) {
      var top = top || false

      if ( top ) window.top.location.href = url
      else window.location.href = url
    },

    reload: function( forced ) {
      var forced = forced || false
      document.location.reload( forced )
    },

    goBack: function() {
      history.back(-1)
    },

    newWindow: function( url ) {
      window.open(url, '_blank')
    },

    newTab: function( url ) {
      this.newWindow( url )
    },

    getParentUrl: function() {
      var url = undefined // should it return the url when it's not in an iframe

      if ( this.isEmbedded() ) {
        url = document.referrer
      }

      return url
    },

    getParentHostname: function() {
      var url = this.getParentUrl()
      var hostname = url

      if ( url !== undefined ) {
        var a = document.createElement('a')
        a.href = url
        hostname = a.hostname
      }

      return hostname
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
