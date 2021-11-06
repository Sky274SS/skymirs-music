const $textButtons = document.querySelectorAll(".text_button")
const $projectWord = document.querySelectorAll(".project_word")
console.log($textButtons)
const viewText = (index)=>{
     if ($textButtons[index].textContent==="Скрыть текст"){
         $textButtons[index].textContent="Показать текст"
     }
     else{
         $textButtons[index].textContent="Скрыть текст"
     }
     if($projectWord[index].classList.contains("none")) {
         $projectWord[index].classList.remove("none")
     }
     else {
         $projectWord[index].classList.add("none")
     }
}


$textButtons[0].addEventListener("click",()=>{viewText(0)})
$textButtons[1].addEventListener("click",()=>{viewText(1)})
$textButtons[2].addEventListener("click",()=>{viewText(2)})
$textButtons[3].addEventListener("click",()=>{viewText(3)})

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});