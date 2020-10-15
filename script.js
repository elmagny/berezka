$(document).ready(function() {
	$.getJSON
	('https://spreadsheets.google.com/feeds/list/1iFBckR99x7hO6UOj8dC7TRZPJ3Ac4JiSLekOHLXO2yc/od6/public/values?alt=json', 
	function(data) {
		data = data['feed']['entry'];
		//console.log(data);
		//console.log(data[0].gsx$наименованиетовар.$t);
		//console.log(data[0].gsx$plu.$t);


		data.forEach(function(itemLi) {
			let item = document.createElement('li');
			item.innerText = (itemLi.gsx$plu.$t + ' ' + itemLi.gsx$наименованиетовар.$t).toLowerCase();
			
			//document.body.append(item);
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