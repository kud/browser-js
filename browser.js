;(function( win ) {

  win.Browser = {
    visit: function( url ) {
      window.location.href = url
    },

    preventEmbedded: function() {
      if ( this.isEmbedded() ) {
        window.top.location.href = window.location.href
      }
    },

    isEmbedded: function() {
      return window.top !== window.self
    }
  }

})( window, window.document )
