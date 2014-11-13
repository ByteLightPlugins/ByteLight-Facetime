
var jsNamespace = BL.getJavascriptNamespace(APP.appId);

if(BL.isTablet()) {
  $(jsNamespace + '.overlay').addClass('tablet')
}
else {
  $(jsNamespace + '.overlay').addClass('phone')
  $(jsNamespace + '.headline').addClass('phone-headline')
  $(jsNamespace + '.preview').addClass('phone-preview')
}
