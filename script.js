$(document).ready(function() {
	$.getJSON
	('https://opensheet.vercel.app/1iFBckR99x7hO6UOj8dC7TRZPJ3Ac4JiSLekOHLXO2yc/Лист1', 
	function(data) {
		data.forEach(function(itemLi) {
			let item = document.createElement('li');
			item.innerText = (itemLi['PLU'] + ' ' + itemLi['Наименование товар']).toLowerCase();
			console.log(data);
			$('.elastic').append(item);
		})
		
	});
});


document.querySelector('#elastic').oninput = function() {
	let val = this.value.trim().toLowerCase();
	let elastcItems = document.querySelectorAll('.elastic li');
	if (val != '') {
		elastcItems.forEach(function(elem) {
			if (elem.innerText.search(val) == -1) {
				elem.classList.add('hide');
				elem.innerHTML = elem.innerText.toLowerCase();
			} else {
				elem.classList.remove('hide');
				let str = elem.innerText;
				elem.innerHTML = innerMark(str, elem.innerText.search(val), val.length);
			}
		});	
	} else {
		elastcItems.forEach(function(elem) {
			elem.classList.remove('hide');
			elem.innerHTML = elem.innerText.toLowerCase();

		});
	}
}

function innerMark(string, pos, len) {

	return string.slice(0, pos)+'<mark>'+string.slice(pos, pos + len)+'</mark>'+string.slice(pos + len);
}
