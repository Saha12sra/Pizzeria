pizza_array=["Olive Pizza", "Veggie Pizza", "Cheese Pizza", "Chicken Pizza","Mushroom Pizza"];

function getmenu(){

    var ordered_list="<ol class='menulist'>";
    pizza_array.sort();

    for(var i=0; i<pizza_array.length; i++){
     ordered_list=ordered_list+"<li>"+pizza_array[i]+"</li>";
    }
ordered_list+="</ol>";
document.getElementById("display_menu").innerHTML=ordered_list;

}

function add_item(){
    var item=document.getElementById("add_item").value;
    pizza_array.push(item);
    pizza_array.sort();

    var ordered_list="<section class='card'>";
    for(var i=0; i<pizza_array.length; i++){
        ordered_list=ordered_list+"<div class='card'><img src='pizzaImg.png'>"+pizza_array[i]+"</div>";
       }
   ordered_list+="</section>";
   document.getElementById("display_addedmenu").innerHTML=ordered_list;
}