document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{
card.style.opacity="0";
card.style.transform="translateY(30px)";

setTimeout(()=>{
card.style.transition="0.6s";
card.style.opacity="1";
card.style.transform="translateY(0)";
},index*200);

});

const button=document.querySelector(".btn");

if(button){

button.addEventListener("mouseover",()=>{
button.style.transform="scale(1.08)";
});

button.addEventListener("mouseout",()=>{
button.style.transform="scale(1)";
});

}
<script>
window.addEventListener("load", function(){
    document.getElementById("loader").style.display = "none";
});
</script>
});