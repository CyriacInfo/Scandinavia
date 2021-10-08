const paysIdBtnFin = document.getElementById('btnPays1');
const paysIdBtnSue = document.getElementById('btnPays2');
const paysIdBtnNor = document.getElementById('btnPays3');
const paysIdBtnIsl = document.getElementById('btnPays4');
const paysIdBtnReset = document.getElementById('btnPaysRes');


const finIdPanel = document.getElementById('finlandePanel');
const sueIdPanel = document.getElementById('suedePanel');
const norIdPanel = document.getElementById('norvegePanel');
const islIdPanel = document.getElementById('islandePanel');



paysIdBtnFin.addEventListener('click', function(){
    finIdPanel.classList.add('paysBlock');
    finIdPanel.classList.remove('paysNone');
    sueIdPanel.classList.add('paysNone');
    sueIdPanel.classList.remove('paysBlock');
    norIdPanel.classList.add('paysNone');
    norIdPanel.classList.remove('paysBlock');
    islIdPanel.classList.add('paysNone');
    islIdPanel.classList.remove('paysBlock');
})

paysIdBtnSue.addEventListener('click', function(){
    sueIdPanel.classList.add('paysBlock');
    sueIdPanel.classList.remove('paysNone');
    finIdPanel.classList.add('paysNone');
    finIdPanel.classList.remove('paysBlock');
    norIdPanel.classList.add('paysNone');
    norIdPanel.classList.remove('paysBlock');
    islIdPanel.classList.add('paysNone');
    islIdPanel.classList.remove('paysBlock');
})


paysIdBtnNor.addEventListener('click', function(){
    norIdPanel.classList.add('paysBlock');
    norIdPanel.classList.remove('paysNone');
    finIdPanel.classList.add('paysNone');
    finIdPanel.classList.remove('paysBlock');
    sueIdPanel.classList.add('paysNone');
    sueIdPanel.classList.remove('paysBlock');
    islIdPanel.classList.add('paysNone');
    islIdPanel.classList.remove('paysBlock');
})

paysIdBtnIsl.addEventListener('click', function(){
    islIdPanel.classList.add('paysBlock');
    islIdPanel.classList.remove('paysNone');
    finIdPanel.classList.add('paysNone');
    finIdPanel.classList.remove('paysBlock');
    sueIdPanel.classList.add('paysNone');
    sueIdPanel.classList.remove('paysBlock');
    norIdPanel.classList.add('paysNone');
    norIdPanel.classList.remove('paysBlock');
})

paysIdBtnReset.addEventListener('click', function(){
    finIdPanel.classList.add('paysBlock');
    finIdPanel.classList.remove('paysNone');
    sueIdPanel.classList.add('paysBlock');
    sueIdPanel.classList.remove('paysNone');
    norIdPanel.classList.add('paysBlock');
    norIdPanel.classList.remove('paysNone');
    islIdPanel.classList.add('paysBlock');
    islIdPanel.classList.remove('paysNone');
})

var menuBtn = document.querySelector('#menuBtn');
var nav = document.querySelector('#navigatorMobile');

// show or hide
  menuBtn.addEventListener('click',function(){
    nav.classList.toggle('openNav');
  menuBtn.classList.toggle('closeNav');
});