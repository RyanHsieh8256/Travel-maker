const groData=[
    {"groNo":"1","groName":"台北3日遊","memNo":"1","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-28","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"2","groName":"南飄10日遊","memNo":"2","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-28","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"取消","groList":"0"},
    {"groNo":"3","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"4","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"5","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"6","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"7","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"8","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"},
    {"groNo":"9","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"}
    ,{"groNo":"10","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"}
    ,{"groNo":"11","groName":"北漂1日遊","memNo":"3","memName":"瘋狂麥斯","groStarDate":"2022-02-17","applyDate":"2022-02-30","applyDeadLine":"2022-03-02","applyNum":"99","groLimit":"100","groState":"正常","groList":"0"}
    ];

// Table
groData.forEach(gro => {
    const grotr = document.createElement("tr");
    
    const trContent = `
                            <td>${gro.groNo}</td>
                            <td>${gro.groName}</td>
                            <td>${gro.memName}</td>
                            <td>${gro.applyDate}</td>                            
                            <td>${gro.applyDeadLine}</td>
                            <td>${gro.groStarDate}</td>
                            <td>${gro.applyNum}</td>
                            <td>${gro.groLimit}</td>
                            <td><button class="corder-list" onclick =" fuc_spotContent('${gro.groList}')">詳細內容</button >
                            <td>${gro.groState}</td>
                            `;
        grotr.innerHTML = trContent ;
        document.querySelector(".grotable tbody").appendChild(grotr);
});

var editor;
    $(function () {
        $('.grotable').DataTable({
            "lengthMenu": [5, 10, 15, 20], //顯示筆數設定 預設為[10, 25, 50, 100]
            "pageLength":'8',
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