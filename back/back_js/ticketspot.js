const ticketData=[
    {"ticketNo":"1","ticketName":"台北101","cityArea":"台北市","ticketMainImg":"ticket-main-img-01.jpg","upperImg1":"upperImg-001-jpg","ticketSpotIntro":"lorem I am cry! QAQ ","fullFarePrice":"200","halfFarePrice":"100","conTicketPrice":"60","launchDate":"2022-02-30","ticketState":"正常","ticketDesc":"台灣風景好傷好水 宛如阿里山的姑娘"},
    {"ticketNo":"2","ticketName":"象山","cityArea":"台北市","ticketMainImg":"ticket-main-img-02.jpg","upperImg1":"upperImg-001-jpg","ticketSpotIntro":"lorem I am cry! QAQ ","fullFarePrice":"300","halfFarePrice":"100","conTicketPrice":"60","launchDate":"2022-02-30","ticketState":"下架","ticketDesc":"台灣風景好傷好水 宛如阿里山的姑娘"},
    {"ticketNo":"3","ticketName":"西門町","cityArea":"台北市","ticketMainImg":"ticket-main-img-03.jpg","upperImg1":"upperImg-001-jpg","ticketSpotIntro":"lorem I am cry! QAQ ","fullFarePrice":"999","halfFarePrice":"100","conTicketPrice":"60","launchDate":"2022-02-30","ticketState":"正常","ticketDesc":"台灣風景好傷好水 宛如阿里山的姑娘"}
    ];

    // Table
    ticketData.forEach(ticket => {
        const tickettr = document.createElement("tr");
        
        const trContent = `
                                <td>${ticket.ticketNo}</td>
                                <td>${ticket.ticketName}</td>
                                <td>${ticket.cityArea}</td>
                                
                                <td>${ticket.fullFarePrice}</td>
                                <td>${ticket.halfFarePrice}</td>
                                <td>${ticket.conTicketPrice}</td>
                                <td><button class="content-info">詳細內容</button >
                                <td>${ticket.launchDate}</td>
                                <td>${ticket.ticketState}</td>
                                <td><button class="btn btn-warning btn-sm">編輯</button></td>
                            `;
                            tickettr.innerHTML = trContent ;
            document.querySelector(".tickettable tbody").appendChild(tickettr);
    });

    // onclick =" fuc_ticketContent('${ticket.ticketInfo}')"
    var editor;
    $(function () {
        $('.tickettable').DataTable({
            
            language: {
                "emptyTable": "無資料...",
                "processing": "處理中...",
                "loadingRecords": "載入中...",
                "lengthMenu": "每頁 _MENU_ 筆資料",
                "zeroRecords": "無搜尋結果",
                "info": "_START_ 至 _END_ / 共 _TOTAL_ 筆",
                "infoEmpty": "尚無資料",
                "infoFiltered": "(從 _MAX_ 筆資料過濾)",
                "infoPostFix": "",
                "search": "關鍵字搜尋:",
                "paginate": {
                    "first": "首頁",
                    "last": "末頁",
                    "next": "下頁",
                    "previous": "前頁"
                },
                "aria": {
                    "sortAscending": ": 升冪",
                    "sortDescending": ": 降冪"
                }
            },
            buttons:[
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor }] 
        });
    });
    //============================================

// contentbox 編輯內容按鍵之開關
// 新增登相關閉
var ticketAddLightbox = document.querySelector(".ticket-add-lightbox");
// 修改燈箱關閉
// var spotLightbox =document.querySelector(".spot-lightbox");
// 詳細內容小視窗
// var spotInfoWindow =document.querySelector(".spot-info-item");

// 先將燈箱關閉
ticketAddLightbox.style.display ='none';
// spotLightbox.style.display ='none';
// spotInfoWindow.style.display ='none';

//close 
fuc_closeBtn=()=>{
    ticketAddLightbox.style.display ='none';
    // spotAddLightbox.style.display='none'
};
 //call-fuc
let closeBoxBtn = document.querySelectorAll(".close-box-btn");
closeBoxBtn.forEach(closebtn => {
    closebtn.onclick = fuc_closeBtn;
    
});
// closeBoxBtn.onclick = fuc_closeBtn;

// 新增燈箱開啟
let ticketAddBtn = document.querySelector(".ticket-add-btn");
fuc_spotAddLighth =()=>{
    ticketAddLightbox.style.display ='';
};
ticketAddBtn.onclick = fuc_spotAddLighth;

// // open search-Box
// fuc_excuteBtn=()=>{
//     spotLightbox.style.display ='';
    
// };
// // 修改
// let editBtn =document.querySelectorAll(".btn-warning");
// editBtn.forEach(btn => {
//     btn.onclick = fuc_excuteBtn;
    
// });
// // 詳細內容 按鍵關閉
// fuc_spotCloseBtn=()=>{
//     spotInfoWindow.style.display ='none';
// };
// let closeInfoBtn = document.querySelector(".close-info-box-btn");
// closeInfoBtn.onclick = fuc_spotCloseBtn;
// // 詳細內容 按鍵開啟


// // 詳細內容
// let spotInfoBox = document.querySelector(".spot-info-item p");
// let spotInfoBtn = document.querySelectorAll(".content-info");

// fuc_spotContent =(e)=>{
//     spotInfoBox.innerHTML = e;
//     console.log(e);
//     spotInfoWindow.style.display='';
// };




// spotInfoBtn.forEach(infoBtn=>{
//     infoBtn.onclick = fuc_spotContent;
// });