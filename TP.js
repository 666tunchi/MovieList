
$("#div11").hide();
$("#div21").hide();
$("#div31").hide();
$("#div41").hide();
$("#div51").hide();
$("#div61").hide();
$("#div71").hide();
$("#div81").hide();
$("#div91").hide();


$(document).ready(function(){
  $('#1').click(function(){
    $("#div1").animate({left: '250px'});
    $('#div1').hide(1000);
    $('#div11').show(1000);
    
               });});      
$(document).ready(function(){
  $('#11').click(function(){
    $('#div11').hide(1000);
    $('#div1').show(1000);
               });});
$(document).ready(function(){
  $('#2').click(function(){
    $('#div2').hide(1000);
    $('#div21').show(1000);
    
               });});      
$(document).ready(function(){
  $('#21').click(function(){
    $('#div21').hide(1000);
    $('#div2').show(1000);
               });});
$(document).ready(function(){
  $('#3').click(function(){
    $('#div3').hide(1000);
    $('#div31').show(1000);
    
               });});      
$(document).ready(function(){
  $('#31').click(function(){
    $('#div31').hide(1000);
    $('#div3').show(1000);
               });});
$(document).ready(function(){
  $('#4').click(function(){
    $('#div4').hide(1000);
    $('#div41').show(1000);
    
               });});      
$(document).ready(function(){
  $('#41').click(function(){
    $('#div41').hide(1000);
    $('#div4').show(1000);
               });});          
$(document).ready(function(){
  $('#5').click(function(){
    $('#div5').hide(1000);
    $('#div51').show(1000);
    
               });});      
$(document).ready(function(){
  $('#51').click(function(){
    $('#div51').hide(1000);
    $('#div5').show(1000);
               });});
$(document).ready(function(){
  $('#6').click(function(){
    $('#div6').hide(1000);
    $('#div61').show(1000);
    
               });});      
$(document).ready(function(){
  $('#61').click(function(){
    $('#div61').hide(1000);
    $('#div6').show(1000);
               });});
$(document).ready(function(){
  $('#7').click(function(){
    $('#div7').hide(1000);
    $('#div71').show(1000);
    
               });});      
$(document).ready(function(){
  $('#71').click(function(){
    $('#div71').hide(1000);
    $('#div7').show(1000);
               });});
$(document).ready(function(){
  $('#8').click(function(){
    $('#div8').hide(1000);
    $('#div81').show(1000);
    
               });});      
$(document).ready(function(){
  $('#81').click(function(){
    $('#div81').hide(1000);
    $('#div8').show(1000);
               });});
$(document).ready(function(){
  $('#9').click(function(){
    $('#div9').hide(1000);
    $('#div91').show(1000);
    
               });});      
$(document).ready(function(){
  $('#91').click(function(){
    $('#div91').hide(1000);
    $('#div9').show(1000);
               });});               

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
