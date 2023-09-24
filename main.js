const myContent = [
   {
       img:'motorimage2.jpeg',
       item:'Logicghone Avenbador',
       description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
   },
   {
    img:'item2.jpg',
    item:'Luis Donsidar',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
{
    img:'item2.jpg',
    item:'Luis Donsidar',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
   {
    img:'item3.jpeg',
    item:'La Feraotin',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
{
    img:'item4.jpg',
    item:'RKD series',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
{
    img:'item5.jpg',
    item:'Land Midder',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
{
    img:'item6.jpg',
    item:'Dugavvi',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
{
    img:'item7.jpg',
    item:'Royal Trigger',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
{
    img:'item8.jpg',
    item:'Gentdy M series',
    description: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit.Rerum rem temporibus saepe eaque fugit labore sequi! Repudiandae quisquam tempora tenetur'
},
];
const Purchase = document.querySelector('.purchase-image-and-text');
const images = document.getElementById('motoimage');
const Title = document.getElementById('title');
const Innertext = document.getElementById('innertext');

let currentItems = 0;
 window.addEventListener('DOMContentLoaded', function () {
     showData(currentItems);
      });

      function showData(){
     const Content = myContent[currentItems];
     images.src = Content.img;
     Title.textContent = Content.item;
     Innertext.textContent = Content.description;
    

     currentItems = (currentItems + 1) % myContent.length;
 };


 const ArrowRight = document.querySelector('.arrow-right');
 const RightBtn = document.getElementById('btn-right');

    RightBtn.addEventListener('click', function () {
    currentItems++;
    if (currentItems > myContent.length) {
       currentItems = 0;
    }  
    showData(currentItems);
}); 




//nav code 
document.addEventListener('DOMContentLoaded', function () {
    const iconNav = document.querySelector(".icon");
    iconNav.addEventListener('click',function() {
    const  navBar = document.querySelector('.nav-bar');
    navBar.classList.add("active");
    
    });
    
    const cancelNav = document.querySelector(".icon-cancel");
    cancelNav.addEventListener('click',function () {
    const  navBar = document.querySelector('.nav-bar');
     navBar.classList.remove("active");
    });
    });   



















ScrollReveal({ distance: '120px' });
ScrollReveal().reveal('.container', { origin: 'top', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.car-logo-section,.motor-image-section,.purchase-luxurious-section,.news-event-section,.footer-section',
 { origin: 'bottom', delay:100, interval:200,
duration:3000 });
ScrollReveal().reveal('.logo,li,i', { origin: 'top', delay:100, interval:200,
duration:3000 });
ScrollReveal().reveal('.slide', { origin: 'bottom', delay:100, interval:300,
duration:3000 });
ScrollReveal().reveal('.heading-content,.logo-purchase,.contact-section', { origin: 'left', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.view,.purchase-image-and-text', { origin: 'right', delay:200, interval:200,
duration:3000 });
ScrollReveal().reveal('.purchase-text p,.footer-content', { origin: 'left', delay:100, interval:200,
duration:3000 });
ScrollReveal().reveal('.first p,.seccond p,.third p', { origin: 'bottom', delay:100, interval:200,
duration:3000 });
