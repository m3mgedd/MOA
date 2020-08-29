var input = document.querySelector(".search input");




var results = document.querySelectorAll(".result .info h2");
var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var searchResults = document.querySelector(".search-results");
            for(i = 0; i < results.length; i++) {
                var resultsInnerHtml = results[i].innerHTML;
                searchResults.innerHTML += "<li class='result-li'>" + resultsInnerHtml + "</li>";
            }
        }
    };
})();


var li = document.querySelector(".search-results");

if(input !== null) {
    input.addEventListener('focus', () => {
        for(i = 0; i < results.length; i++) {
            li.style.display = "block";
        }
    });
    
    input.addEventListener('blur', () => {
        for(i = 0; i < results.length; i++) {
            li.style.display = "none";
        }
    });

}




function search() {
    var input = document.querySelector(".search input");
    var filter = input.value.toUpperCase();
    var results = document.querySelectorAll(".result .info h2");
    var searchResults = document.querySelectorAll(".search-results li");

    for(i = 0; i < results.length; i++) {
        resultValue = results[i].innerText;
        if (resultValue.toUpperCase().indexOf(filter) > -1) {
            searchResults[i].style.display = "block";
        } else {
            searchResults[i].style.display = "none";
        }
    }
}