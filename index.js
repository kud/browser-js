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

    newPopup: function( opts ) {
      // mandatory parameters
      if ( typeof opts === 'undefined' || typeof opts.url == 'undefined' ) {
        throw new Error('You must define at least an url.')
      }

      // handle default parameters
      var options = {}

      options.url = opts.url
      options.name = opts.name || 'defaultPopup'

      options.options = opts.options || {}

      if ( typeof options.options.width === 'undefined' ) {
        options.options.width = 640
      }

      if ( typeof options.options.height === 'undefined' ) {
        options.options.height = 480
      }

      var str = ''

      for ( var property in options.options ) {
        if ( options.options.hasOwnProperty( property ) ) {
          str += property + '=' + options.options[property] + ','
        }
      }

      options.options = str.substr( 0, str.length-1 )

      return window.open( options.url, opts.name, options.options )
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
