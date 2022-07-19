var apiKey = '10843e07344512f50a28c66bda197ed9';

function fetchProducts() {
	fetch(`https://dummyjson.com/products`)
		.then((response) => response.json())
		.then((datas) => {
			var containers = document.getElementById('container');
			console.log(datas);
			let vav = datas.products;
			console.log(vav.length);
			for (let i = 0; i < vav.length; i++) {
				let cardContainer = document.createElement('div');
				let cardTitle = document.createElement('div');
				let cardBody = document.createElement('div');
				let image = document.createElement('img');
				let btn = document.createElement('a');
				let column = document.createElement('div');
				column.classList.add('col-md-3', 'my-4');
				cardContainer.classList.add('card', 'mx-3', 'my-3', 'h-100');
				cardTitle.classList.add('card-title', 'text-center', 'my-2');
				image.classList.add('card-image-top', 'mx-auto');
				image.style.width = '200px';
				btn.classList.add('btn', 'btn-primary', 'mx-auto', 'my-3');
				image.style.src = '	200px';
				cardBody.classList.add('card-body', 'text-center');
				cardTitle.innerHTML = datas.products[i].title;
				cardBody.innerHTML = datas.products[i].description;
				btn.innerHTML = '$' + datas.products[i].price;
				image.src = datas.products[i].images[0];
				containers.appendChild(column);
				column.appendChild(cardContainer);
				cardContainer.appendChild(cardTitle);
				cardContainer.appendChild(image);
				cardContainer.appendChild(cardBody);
				cardContainer.appendChild(btn);
			}
		});
}
