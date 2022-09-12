function baractive() {
    let a = document.getElementById("bar-list");
    let b = document.getElementById("nav-list-1");
    if(a.style.visibility === 'hidden'){
        a.style.visibility = 'visible';
        b.style.visibility = 'visible';
    }
    else{
        a.style.visibility = 'hidden';
        b.style.visibility = 'hidden';
    }
}