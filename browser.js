;(function( win, dom ) {

  win.Browser = {
    visit: function( url ) {
      window.location.href = url
    },

    parentVisit: function( url ) {
      window.top.location.href = url
    },

    redirectParent: function() {
      window.top.location.href = window.location.href
    },

    preventEmbedded: function() {
      if ( this.isEmbedded() ) {
        this.redirectParent()
      }
    },

    isEmbedded: function() {
      return window.top !== window.self
    }
  }

})( window, window.document )
