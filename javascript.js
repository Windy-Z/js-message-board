window.onload = function() {
	var btn = document.querySelector(".btn");
	var ul = document.querySelector(".message");
	var inputMessage = document.querySelector(".inputMessage");
	btn.onclick = function() {
		if(inputMessage.value == '') {
			alert("留言不能为空！");
		} else {
			var insert_li = document.createElement("li");
			insert_li.innerHTML = inputMessage.value + "<a href='javascript:;' class='del'>×</a>";
			ul.insertBefore(insert_li, ul.children[0]);
			inputMessage.value = '';
			var del = document.querySelectorAll('.del');
			for(var i=0; i<del.length; i++) {
				del[i].onclick = function() {
					ul.removeChild(this.parentNode);
				}
			}
		}
		
	}
}