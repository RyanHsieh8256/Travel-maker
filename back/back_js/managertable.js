//管理員表格
// test data
const mgrData=[
    {"mgrNo":"1","mgrName":"Admin","mgrAccount":"abcd123456","mgrPsw":"123456","mgrAuz":"root"},
    {"mgrNo":"2","mgrName":"James","mgrAccount":"abcd1234567","mgrPsw":"123456","mgrAuz":"normal"}
    ];
    
// ---table use js---
//這裡參考董懂得 創造節點元素
// let tableName = document.createElement("h2");
// document.querySelector('.recent-orders').appendChild(tableName).innerText = 123;

mgrData.forEach(mgr => {
    const mgrtr = document.createElement("tr");
    const trContent1 = `
                            <td>${mgr.mgrNo}</td>
                            <td>${mgr.mgrName}</td>
                            <td>${mgr.mgrAccount}</td>
                            <td>${mgr.mgrAuz}</td>
                            
                        `;
        mgrtr.innerHTML = trContent1;
        document.querySelector(".managertable tbody").appendChild(mgrtr);
});