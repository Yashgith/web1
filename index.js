let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () => {

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();



let icon= document.getElementById("icon");

icon.onclick= ()  => {

 document.body.classList.toggle("dark-mode"); 

 if(document.body.classList.contains("dark-mode")) {
   icon.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiNABGEXzOnO6NbVbHQNG4guQgT64K4ltWgQhKxXuakHhY_q9b2Tx6J_o4hAqUYN9o_lA&usqp=CAU"
 }

   else{
     icon.src="https://previews.123rf.com/images/draganae/draganae1612/draganae161200106/69145569-moon-and-stars-moon-icon-vector.jpg"
   }

}


 