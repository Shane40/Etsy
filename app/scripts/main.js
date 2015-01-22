// .etsyitems.results[0].price;
// console.log();
console.log ('It works!');

	// $(‘.container button’).children().on(‘click’, function () {
	// alert($(this).text());
	// }); // targets buttons as well

console.log(etsy_items.results);
	//returns all the objects within the array called "results"


console.log(etsy_items.results.materials[0]);






// etsy_items.path.forEach( function (item){
// 	console.log(item.category_path);
// });


etsy_items.results.forEach( function (item){
	console.log(item.price);
});

etsy_items.results.forEach( function (item){
	console.log(item.Images[0].url_fullxfull);

});



etsy_items.results.forEach( function (item){
	console.log(item.Images[0].url_fullxfull);

});

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