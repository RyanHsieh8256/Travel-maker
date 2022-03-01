//會員表格
const memberData=[
    {"memNo":"1","memName":"Admin","memEmail":"abc001@gmail.com","memImg":"img.jpg","memPsw":"123456","memCreateDate":"2022-02-25","memeState":"正常","memPhone":"090512346"},
    {"memNo":"2","memName":"James","memEmail":"abc002@gmail.com","memImg":"img.jpg","memPsw":"123456","memCreateDate":"2022-02-25","memeState":"停權","memPhone":"090512346"},
    {"memNo":"3","memName":"Sara","memEmail":"abc003@gmail.com","memImg":"img.jpg","memPsw":"123456","memCreateDate":"2022-02-25","memeState":"正常","memPhone":"090512346"}
    ];

    memberData.forEach(mem => {
    const membertr = document.createElement("tr");
    var toggle_btn_class = "";
    if(mem.memeState == "正常"){
        toggle_btn_class = "";
    }else{
        toggle_btn_class = "active";
    }
    const trContent = `
                            <td>${mem.memNo}</td>
                            <td>${mem.memName}</td>
                            <td>${mem.memEmail}</td>
                            <td>${mem.memPhone}</td>
                            <td>${mem.memImg}</td>
                            <td>${mem.memCreateDate}</td>
                            <td><div class="toggle-btn ${toggle_btn_class}">
                            <input type="checkbox" class="cb-value" />
                            <span class="round-btn"></span></div>
                            </td>
                            
                        `;
        membertr.innerHTML = trContent ;
        document.querySelector(".membertable tbody").appendChild(membertr);
});
var editor;
$(function () {
    $('.membertable').DataTable({
        
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
document.querySelector('.membertable tbody').classList.add();
// state
$('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
        $(mainParent).addClass('active');
    } else {
        $(mainParent).removeClass('active');
    }

})
// ====================================================
