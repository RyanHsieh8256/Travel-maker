//* *** 通用 *** */
// ---側邊欄顯示和隱藏---
let sideMenu = document.querySelector("aside");
let menuBtn = document.querySelector("#menu-btn");
let closeBtn = document.querySelector("#closeBtn");

//show sideber
fuc_menuBtn=()=>{
    sideMenu.style.display ='block';
};
//close sideber
fuc_closeBtn=()=>{
    sideMenu.style.display ='none';
}
menuBtn.addEventListener('click', fuc_menuBtn ,false);//call-fuc
closeBtn.onclick = fuc_closeBtn; //call-fuc

//===============================================================

// ---change theme 背景色彩---
const themeToggler = document.querySelector(".theme-toggler");

fuc_themeToggler=()=>{
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
};
themeToggler.addEventListener('click',fuc_themeToggler);
//===============================================================


//===============================================================

// ---DATE()---
const today = new Date();
document.querySelector(".date span").innerHTML =today.toLocaleDateString();


//===============================================================


// 
//=====================================================
// 
// let manager = document.querySelector('#manager');
// let insights = document.querySelector('main .insights');
// fuc_manager=()=>{
//     // insights.style.display ='none';
//     // document.querySelector('.recent-orders  div').style.display='none'
// }
// manager.onclick = fuc_manager; //call-fuc

//
// $(function(){
//     $('#manager').on('click',function(){
//         var r= $('<input type="button" value="查詢2"/>');
//         $(".recent-orders").append(r);
//     });
// });
