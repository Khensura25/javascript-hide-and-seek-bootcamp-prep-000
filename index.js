function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(target, nested) {
  
return document.querySelector('.target','#nested');
  
}


function increaseRankBy(n) {
  
  
  const lis = document.getElementById('app').querySelectorAll('.ranked-list');
  
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + `${n}`).toString();  

  
}}


function deepestChild() {
  
 return document.getElementById('grand-node').querySelector('div div div div div')
  
  
}