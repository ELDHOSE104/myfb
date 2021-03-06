/**
 * Created by eldhose on 21/7/15.
 */

var ph = "search facebook",
    searchBar = $('#search'),
// placeholder loop counter
    phCount = 0;

// function to return random number between
// with min/max range
function randDelay(min, max) {
    return Math.floor(Math.random() * (max-min+1)+min);
}

// function to print placeholder text in a
// 'typing' effect
function printLetter(string, el) {
    // split string into character seperated array
    var arr = string.split(''),
        input = el,
    // store full placeholder
        origString = string,
    // get current placeholder value
        curPlace = $(input).attr("placeholder"),
    // append next letter to current placeholder
        placeholder = curPlace + arr[phCount];

    setTimeout(function(){
        // print placeholder text
        $(input).attr("placeholder", placeholder);
        // increase loop count
        phCount++;
        // run loop until placeholder is fully printed
        if (phCount < arr.length) {
            printLetter(origString, input);
        }
        // use random speed to simulate
        // 'human' typing
    }, randDelay(50, 90));
}

// function to init animation


//function to upload a file
function placeholder() {
    $(searchBar).attr("placeholder", "");
    printLetter(ph, searchBar);
}

placeholder();
$('.submit').click(function(e){
    phCount = 0;
    e.preventDefault();
    placeholder();
});

$(function(){
    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});


function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});