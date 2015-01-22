// .etsyitems.results[0].price;
// console.log();
console.log ('It works!');

	// $(‘.container button’).children().on(‘click’, function () {
	// alert($(this).text());
	// }); // targets buttons as well

console.log(etsy_items.results);
	//returns all the objects within the array called "results"


console.log(etsy_items.results[0]);

function getproduct() {
var productboxHTML = "";
etsy_items.results.forEach ( function (listing){
	console.log(listing.price);
	console.log(listing.title);
	console.log(listing.Images[0].url_fullxfull);
	console.log(listing.Shop.shop_name);

productboxHTML +=
'<div class="productbox">' +
	'<img src= "'+listing.Images[0].url_fullxfull+'"/> ' +
	'<h3>'+ listing.title+' </h3>' +
	'<span> <h4>'+ listing.Shop.shop_name+' </h4> </span>' +
	'<span> <h5>'+ listing.price+' '+ listing.currency_code+'</h5> </span>' +
'</div>'

console.log (productboxHTML);

//give the function a name that represents a concept.
});
return productboxHTML;
};

$(document).ready(function(){
	$(".rightbox").append(getproduct());

});

// WHAT HE DID IN CLASS
// (".rightbox").addClass("productbox");
// itemContent = '<div class="item">';
// itemContent += '<h4>' + itemName + '</h4>'


// etsy_items.path.forEach( function (item){
// 	console.log(item.category_path);
// });
// text-overflow: ellipsis;
// white-space: no wrap;

// set max-height on images

// etsy_items.results.forEach( function (item){
// 	console.log(item.price);
// });

// etsy_items.results.forEach( function (item){
// 	console.log(item.Images[0].url_fullxfull);

// });



// etsy_items.results.forEach( function (item){
// 	console.log(item.Images[0].url_fullxfull);

// });

// etsy_items.results.forEach( function (item){
// $('.hero-unit').append('<img src=" + item.Images[0].url.fullxfull + '">");
// });


// $('.container1').on('click', function () {
// 	$('.content1').addClass('open1');
// });

// $('.container2').on('click', function () {
// 	$('.content1').removeClass('open1');
// 	$('.content2').addClass('open2');
// });

// $('.container3').on('click', function () {
// 	$('.content2').removeClass('open2');
// 	$('.content3').addClass('open3');
	
// });