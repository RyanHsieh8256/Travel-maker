// 燈箱關閉

var lightbox =document.querySelector(".lightbox");

// 先將燈箱關閉
lightbox.style.display ='none';

//close 
fuc_closeBtn=()=>{
    lightbox.style.display ='none';
};
 //call-fuc
let closeBoxBtn = document.querySelector(".close-box-btn");
closeBoxBtn.onclick = fuc_closeBtn;
let updateBtn = document.querySelector('.update-btn');

// open search-Box
fuc_excuteBtn=()=>{
    lightbox.style.display ='';
    
};

let searchBtn =document.querySelectorAll(".excute-btn");
searchBtn.forEach(btn => {
    btn.onclick = fuc_excuteBtn;
    
});


// mgrlightbox.onclick =fuc_excuteBtn;
//
// fuc_closeBtn=(clssName)=>{
//     clssName.style.display ='none';
// }

// closeBtn.onclick = (e,)=>{
//                         fuc_closeBtn(e,closeBoxBtn);
//                         console.log(e);
// }; //call-fuc