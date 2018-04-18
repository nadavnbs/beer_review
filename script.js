
var beers = [];

var list = $('.beers-list');



function addBear(name, category) {

    name = $('.beer-input ').val();

    category = $('.category-input ').val();

    rating = $('.rate').val();

    obj = { beerName: name, beerCategory: category, beerRating: rating }



    beers.push(obj);

    console.log(beers)

    renderBeers();

}

$('.post-beer').on('click', addBear);



function renderBeers() {



    list.empty();

    for (let i = 0; i < beers.length; i++) {

        list.append('<li>' + beers[i].beerName + ' ' + beers[i].beerCategory + ' ' + beers[i].beerRating + '</li>')

    }

}



var counter = 0;

$('.btnSort').click(function() {

    counter++;

});



$('.btnSort').on('click', function() {



    list.empty();



    beers.sort(function(a, b) {

        if(counter % 2 === 0){ // the "?" is the end of the condition and the start of the action if the condition is TRUE

            return(a.beerRating) - (b.beerRating)  // the ':'is the 'ELSE' staitment .
    }else{
            return(b.beerRating) - (a.beerRating)
    }
    });



    for (let i = 0; i < beers.length; i++) {

        list.append('<li>' + beers[i].beerName + ' ' + beers[i].beerCategory + ' ' + beers[i].beerRating + '</li>')

    }



})