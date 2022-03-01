const spotData=[
    {"spotNo":"1","spotName":"台北101","spotPlace":"台北市","spotImg":"spot-img-01.jpg","spotLongitude":"N12315","spotLatitude":"S123456","spotInfo":"xxxxxxxxxxx123","spoteState":"正常","spotPhone":"090512346"},
    {"spotNo":"2","spotName":"象山","spotPlace":"台北市","spotImg":"spot-img-02.jpg","spotLongitude":"N12315","spotLatitude":"S123456","spotInfo":"xxxxxxxxxxx123zzz","spoteState":"下架","spotPhone":"090512346"},
    {"spotNo":"3","spotName":"西門町","spotPlace":"台北市","spotImg":"spot-img-03.jpg","spotLongitude":"N12315","spotLatitude":"S123456","spotInfo":"xxxxxxxxxxx123999999","spoteState":"正常","spotPhone":"090512346"}
    ];

    // Table
    spotData.forEach(spot => {
        const spottr = document.createElement("tr");
        
        const trContent = `
                                <td>${spot.spotNo}</td>
                                <td>${spot.spotName}</td>
                                <td>${spot.spotPlace}</td>
                                <td>${spot.spotImg}</td>
                                <td>${spot.spotLongitude}</td>
                                <td>${spot.spotLatitude}</td>
                                <td><button class="content-info" onclick =" fuc_spotContent('${spot.spotInfo}')">詳細內容</button >
                                <td>${spot.spoteState}</td>
                                <td><button class="btn btn-warning btn-sm">編輯</button></td>
                            `;
            spottr.innerHTML = trContent ;
            document.querySelector(".spottable tbody").appendChild(spottr);
    });

    var editor;
    $(function () {
        $('.spottable').DataTable({
            
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
var spotAddLightbox = document.querySelector(".spot-add-lightbox");
// 修改燈箱關閉
var spotLightbox =document.querySelector(".spot-lightbox");
// 詳細內容小視窗
var spotInfoWindow =document.querySelector(".spot-info-item");
// 先將燈箱關閉
spotLightbox.style.display ='none';
spotAddLightbox.style.display ='none';
spotInfoWindow.style.display ='none';
//close 
fuc_closeBtn=()=>{
    spotLightbox.style.display ='none';
    spotAddLightbox.style.display='none'
};
 //call-fuc
let closeBoxBtn = document.querySelectorAll(".close-box-btn");
closeBoxBtn.forEach(closebtn => {
    closebtn.onclick = fuc_closeBtn;
    
});
// closeBoxBtn.onclick = fuc_closeBtn;

// 新增燈箱開啟
let spotAddBtn = document.querySelector(".spot-add-btn");
fuc_spotAddLighth =()=>{
    spotAddLightbox.style.display ='';
};
spotAddBtn.onclick = fuc_spotAddLighth;

// open search-Box
fuc_excuteBtn=()=>{
    spotLightbox.style.display ='';
    
};
// 修改
let editBtn =document.querySelectorAll(".btn-warning");
editBtn.forEach(btn => {
    btn.onclick = fuc_excuteBtn;
    
});
// 詳細內容 按鍵關閉
fuc_spotCloseBtn=()=>{
    spotInfoWindow.style.display ='none';
};
let closeInfoBtn = document.querySelector(".close-info-box-btn");
closeInfoBtn.onclick = fuc_spotCloseBtn;
// 詳細內容 按鍵開啟


// 詳細內容
let spotInfoBox = document.querySelector(".spot-info-item p");
let spotInfoBtn = document.querySelectorAll(".content-info");

fuc_spotContent =(e)=>{
    spotInfoBox.innerHTML = e;
    console.log(e);
    spotInfoWindow.style.display='';
};




// spotInfoBtn.forEach(infoBtn=>{
//     infoBtn.onclick = fuc_spotContent;
// });