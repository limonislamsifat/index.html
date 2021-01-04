const hamburger = document.queryselector('.header .navbar .nav-list .hamburger');
const mobile_manu = document.queryselector('.header .navbar .nav-list ul');
const header = document.queryselector('.header .container');

hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active');
mobile_manu.classList.toggle('active');
});