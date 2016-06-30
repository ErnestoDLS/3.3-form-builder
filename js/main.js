(function(){

   var formDataXHR = new XMLHttpRequest();

   document.addEventListener("DOMContentLoaded", function(e){

     formDataXHR.addEventListener("load", function(e){
       console.log(e.target);

       var formDataArray = JSON.parse(e.target.responseText);
       var formElement = document.querySelector("[data-js='form--data']");

     })


   })
})
