Template.header.rendered = function(){
  (function(){
   //Get saved layout type from LocalStorage
   var layoutStatus = localStorage.getItem('ma-layout-status');
   if (layoutStatus == 1) {
       $('body').addClass('sw-toggled');
       $('#tw-switch').prop('checked', true);
   }

   $('body').on('change', '#toggle-width input:checkbox', function(){
       if ($(this).is(':checked')) {
     $('body').addClass('toggled sw-toggled');
     localStorage.setItem('ma-layout-status', 1);
       }
       else {
     $('body').removeClass('toggled sw-toggled');
     localStorage.setItem('ma-layout-status', 0);
       }
   });
})();
}
