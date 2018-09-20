
function getFirstSelector(selector) {
  return document.querySelector('selector');
  
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('div.target');
  //document.querySelector('#nested.target');
}

function increaseRankBy(n) {
 var  result = document.querySelectorAll("ul.ranked-list li");
 for (var i = 0; i <result.length; i++) {
   result[i].innerHTML = parseInt(result[i].innerHTML) + n;
   }
   
}

function deepestChild () {
  var result = document.getElementById("grand-node").querySelectorAll('div');
  var deep = [];
  
  
}