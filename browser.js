module.exports = {

  visit: function( url, top ) {
    var top = top || false

    if ( top ) window.top.location.href = url
    else window.location.href = url
  },

  newTab: function( url ) {
    window.open(url,'_blank')
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
