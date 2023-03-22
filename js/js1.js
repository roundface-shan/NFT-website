var flag = true;
function show_menu(argument) {
	var menu1 = document.getElementById("menu_1");
	if(flag){
		menu1.style.display="block";
	}else{
		menu1.style.display="none";
	}
	flag = !flag;
}

function show_menu_1(){
	var menu1 = document.getElementById("menu_1");
	menu1.style.display="none";
	flag = true;
}