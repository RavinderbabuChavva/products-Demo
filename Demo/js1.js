function myFunction() {
	var totalProducts = a.productList.length;

	var htmlString = '';
	for (var i = 0; i < totalProducts; i++) {
		htmlString += '<div class="insideDiv div2"><div class="product"><img class="productImg" onmouseover="changeHeroArea('
				+ i
				+ ')" src="'
				+ a.productList[i].imageUrls.sm
				+ '"><br><br><div style="font-size: 14px;padding-left: 21px;padding-right: 21px;font-family: sans-serif;"><span>'
				+ a.productList[i].description
				+ '</span></div><div style="font-size: 17px;padding: 21px;font-family: sans-serif;"><span>$ '
				+ a.productList[i].networkPrice
				+ '</span></div><div class="viewMore">View More</div></div></div>';
	}
	document.getElementById("allProducts").innerHTML = htmlString;
	var htmlString1 = '';
	var mb = a.productList[0].marketingBullets.toString();
	var str_array = mb.split(',');
	var bulletPoints = '<ul style="font-size: 15px;">';
	var length = 0;
	if (str_array.length < 5) {
		length = str_array.length;
	} else {
		length = 5;
	}
	for (var i = 0; i < length; i++) {
		bulletPoints += '<li>' + str_array[i] + '</li>';
	}
	bulletPoints += '</ul>';
	htmlString1 += '<div class="insideDiv1"><img class="" style="padding: 18px;" src="'
			+ a.productList[0].imageUrls.md
			+ '"></div><div class="insideDiv2" style="text-align: left;"><div style="font-size: 16px;padding-left: 21px;padding-right: 21px;font-family: sans-serif;padding-top: 28px;"><span>'
			+ a.productList[0].description
			+ '</span><br>'
			+ bulletPoints
			+ '</div></div><div class="insideDiv1"><div class="viewMore" style="margin-top: 56px;" onclick="showPrice(0);">Add To Cart</div><br> <div style="font-size: 17px;padding: 21px;font-family: sans-serif;"><span>$ '
			+ a.productList[0].networkPrice + '</span></div></div>';
	document.getElementById("selectedProduct").innerHTML = htmlString1;
}

function changeHeroArea(b) {
	var htmlString1 = '';
	var mb = a.productList[b].marketingBullets.toString();
	var str_array = mb.split(',');
	var bulletPoints = '<ul style="font-size: 15px;">';
	var length = 0;
	if (str_array.length < 5) {
		length = str_array.length;
	} else {
		length = 5;
	}
	for (var i = 0; i < length; i++) {
		bulletPoints += '<li>' + str_array[i] + '</li>';
	}
	bulletPoints += '</ul>';
	htmlString1 += '<div class="insideDiv1"><img class="" style="padding: 18px;" src="'
			+ a.productList[b].imageUrls.md
			+ '"></div><div class="insideDiv2" style="text-align: left;"><div style="font-size: 16px;padding-left: 21px;padding-right: 21px;font-family: sans-serif;padding-top: 28px;"><span>'
			+ a.productList[b].description
			+ '</span><br>'
			+ bulletPoints
			+ '</div></div><div class="insideDiv1"><div class="viewMore" style="margin-top: 56px;" onclick="showPrice('
			+ b
			+ ');">Add To Cart</div><br> <div style="font-size: 17px;padding: 21px;font-family: sans-serif;"><span>$ '
			+ a.productList[b].networkPrice + '</span></div></div>';
	document.getElementById("selectedProduct").innerHTML = htmlString1;
}

function showPrice(b) {
	alert("Price of the selected Item is [" + a.productList[b].networkPrice
			+ "]");
}