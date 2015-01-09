;(function( win, dom ) {

  win.Browser = {
    visit: function( url, parent ) {
      var parent = parent || false

      if ( parent ) window.top.location.href = url
      else window.location.href = url
    },

    newTab: function( url ) {
      window.open(url,'_blank')
    }

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
    }
  }

})( window, window.document )
