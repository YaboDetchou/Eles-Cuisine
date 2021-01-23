// cookie
const cookieContainer = document.querySelector('.cookie-container');
const cookieButton = document.querySelector('.cookie-btn');
const popContainer = document.querySelector('#main')
const popButton = document.querySelector('#pop-up');

cookieButton.addEventListener('click', () => {
    if(cookieContainer.style.display === 'none') {
      cookieContainer.style.display =  'block';
    } else {
        cookieContainer.style.display ='none'
        
    }

});

// show nav bar
const nav_items = document.getElementById("nav-bar").style.top="-50px";
const nav_items2 = document.getElementById("nav-bar").style.top ="0";

// style nav bar

function style_bar() {
  document.getElementById("nav-bar").style.backgroundColor = "#661a00";
  document.getElementsByClassName("itms")[0].style.color = "#fff";
  document.getElementsByClassName("itms")[1].style.color = "#fff";
  document.getElementsByClassName("itms")[2].style.color = "#fff";
  document.getElementsByClassName("itms")[3].style.color = "#fff";
  document.getElementsByClassName('reservations-info')[0].style.color='#fff'
  document.getElementById("nav-bar").style.width = "100%";
  document.getElementById("nav-bar").style.padding = "1.3rem";
  // document.getElementById("newnav").style.backgroundColor = "red";
  
// otheritmspage
}

style_bar();

