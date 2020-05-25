  var d = {
                language:"",
                age:""
            };
  $(document).ready(function(){
            /* Question 1 */
             $("#answer11").hide();
             $("#loader11").hide();
             $("#submitbtn").hide();
             $("#option11").click(function(){
               document.getElementById("answer11").innerText = document.getElementById("option11").innerText;
                $("#loader11").show();
               setTimeout(function() {
                   $("#loader11").hide();
                   $("#answer11").show();
                   if(d.language!=""&&d.age!=""){
                       $("#submitbtn").show();
                   }
               }, 1000);
                $("#option11").hide();
                $("#option12").hide();
                $("#option13").hide();
                d.language = document.getElementById("answer11").innerText;
                console.log(d);
            });
            $("#option12").click(function(){
                document.getElementById("answer11").innerText = document.getElementById("option12").innerText;
                 $("#loader11").show();
               setTimeout(function() {
                   $("#loader11").hide();
                   $("#answer11").show();
                   if(d.language!=""&&d.age!=""){
                       $("#submitbtn").show();
                   }
               }, 1000);
                $("#option11").hide();
                $("#option12").hide();
                $("#option13").hide();
                d.language = document.getElementById("answer11").innerText;
                console.log(d);
            });
            $("#option13").click(function(){
                document.getElementById("answer11").innerText = document.getElementById("option13").innerText;
                 $("#loader11").show();
               setTimeout(function() {
                   $("#loader11").hide();
                   $("#answer11").show();
                   if(d.language!=""&&d.age!=""){
                       $("#submitbtn").show();
                   }
               }, 1000);
                $("#option11").hide();
                $("#option12").hide();
                $("#option13").hide();
                d.language = document.getElementById("answer11").innerText;
                console.log(d);
            });

             /* Question 2 */
             $("#answer22").hide();
             $("#loader22").hide();
             $("#option21").click(function(){
               document.getElementById("answer22").innerText = document.getElementById("option21").innerText;
                 $("#loader22").show();
               setTimeout(function() {
                   $("#loader22").hide();
                   $("#answer22").show();
                   if(d.language!=""&&d.age!=""){
                       $("#submitbtn").show();
                   }
               }, 1000);
                $("#option21").hide();
                $("#option22").hide(); 
                $("#option23").hide();
                d.age = document.getElementById("answer22").innerText;
                console.log(d);
            });
            $("#option22").click(function(){
                document.getElementById("answer22").innerText = document.getElementById("option22").innerText;
                $("#loader22").show();
               setTimeout(function() {
                   $("#loader22").hide();
                   $("#answer22").show();
                   if(d.language!=""&&d.age!=""){
                       $("#submitbtn").show();
                   }
               }, 1000);
                $("#option21").hide();
                $("#option22").hide();
                $("#option23").hide();
                d.age = document.getElementById("answer22").innerText;
                console.log(d);
            });
            $("#option23").click(function(){
                document.getElementById("answer22").innerText = document.getElementById("option23").innerText;
                $("#loader22").show();
               setTimeout(function() {
                   $("#loader22").hide();
                   $("#answer22").show();
                   if(d.language!=""&&d.age!=""){
                       $("#submitbtn").show();
                   }
               }, 1000);
                $("#option21").hide();
                $("#option22").hide();
                $("#option23").hide();
                d.age = document.getElementById("answer22").innerText;
                 console.log(d);
            });
            
               
});
       