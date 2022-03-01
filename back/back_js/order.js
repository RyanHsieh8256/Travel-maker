const orderData=[
    {"orderNo":"1","orderName":"黃曉明","orderId":"1","orderTotal":"800","orderList":"訂單明細在此","orderDate":"2022-02-28"},
    {"orderNo":"2","orderName":"林小明","orderId":"2","orderTotal":"800","orderList":"訂單明細在此","orderDate":"2022-02-28"},
    {"orderNo":"3","orderName":"黃綠紅","orderId":"3","orderTotal":"800","orderList":"訂單明細在此","orderDate":"2022-02-30"}
    ];

// Table
orderData.forEach(order => {
    const ordertr = document.createElement("tr");
    
    const trContent = `
                            <td>${order.orderNo}</td>
                            <td>${order.orderId}</td>
                            <td>${order.orderName}</td>
                            <td>${order.orderTotal}</td>
                            <td><button class="corder-list" onclick =" fuc_spotContent('${order.orderList}')">詳細內容</button >
                            
                            <td>${order.orderDate}</td>
                        `;
                        ordertr.innerHTML = trContent ;
        document.querySelector(".ordertable tbody").appendChild(ordertr);
});

var editor;
    $(function () {
        $('.ordertable').DataTable({
            
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