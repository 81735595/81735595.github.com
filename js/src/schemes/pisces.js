$(document).ready(function () {
	if (~window.navigator.userAgent.toLowerCase().indexOf('mobile')) {
		return;
	}
  var $headerInner = $('.header-inner');
  var $sidebar = $('#sidebar');
  var getSidebarTop = function(){
    return $headerInner.height() + 10;
  };
  var setSidebarMarginTop = function(sidebarTop){
    return $sidebar.css({ 'margin-top': 0 });
  }
  var mql = window.matchMedia('(min-width: 991px)');

  setSidebarMarginTop(getSidebarTop()).show();
  mql.addListener(function(e){
    if(e.matches){
      setSidebarMarginTop(getSidebarTop());
    }
  });
});
