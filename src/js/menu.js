function openNav(x) {
  if (x.matches) {
      document.getElementById("mySidenav").style.width = "290px";
  } else {
  document.getElementById("mySidenav").style.width = "220px";
}
}

var x = window.matchMedia("(min-width: 768px)")
openNav(x) 
x.addListener(openNav) 


function closeNav(x) {
  document.getElementById("mySidenav").style.width = "0";
}
