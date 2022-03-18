
window.addEventListener('load',function() {
    tourForm = document.querySelector('#tourForm');
    tourBuildName = document.querySelector('.tourBuild_name');
    tourBuildDay = document.querySelector('.tourBuild_days span');
    tourBuildDate = document.querySelector('.tourBuild_date');

    setBtn = document.querySelector('#checkSet');
    setBtn.addEventListener('click',reviseSet);

    searchSpot = this.document.querySelector('#searchSpot');
    searchSpot.addEventListener('keyup',searchPlace);

    sessionStorage.clear();

    fetchData();
    goBuildGroup();

})

window.addEventListener('hashchange',fetchData);

// 進來抓到該行程的編號並撈資料渲染
    // 點擊加入行程抓到這個行程的資料
function fetchData() {
  
  let curJour = getUrl();

  fetch(`./phps/fetchJour.php?find=${curJour}`).then(res => res.json())
  .then(data => {

      // 抓該行程的天數

      let dayArr = [];
      let dayNum = Math.max(...data.map(jour => +jour.journeySpotDay));
    

      for(let i = 1; i <= dayNum; i++ ) {
          let theData = data.filter(jour => jour.journeySpotDay == i);
          dayArr.push(theData);
      }

      
      // 寫入session storage
      sessionStorage.clear();
      dayArr.forEach((day,i) => {
          // 整理陣列裡物件順序
          day.sort((a,b) => +a.sequence - +b.sequence);
          sessionStorage.setItem(`day${i+1}`, JSON.stringify(day));
      });

      displaySide(curJour,dayNum);
      displayTab();
      // tourForm();
      // displayTheTour();
      
  })

}

// 景點資料(時間軸渲染)
function displaySide(no,num) {
  let timelineBox = document.querySelector('.timeline_box');
  let timelineList = document.querySelector('.timeline_list');
  timelineBox.innerHTML = '';


  let tabs = '';

  for(let i = 1; i <= num; i++) {


      let dayData = JSON.parse(sessionStorage.getItem(`day${i}`));

      // 新增行程天數page
      let timelinePage = document.createElement('div');
      timelinePage.className = `timeline_page timeline_page--${i} ${i == 1 ? 'timeline_page--active' : ''}`;
      timelineList.append(timelinePage);


      tabs += `<div class="timeline_tab timeline_tab--${i} ${i == 1 ? 'timeline_tab--active' : ''}" data-tab="${i}">第${i}天</div>`;
      
  
      let items = dayData.map(day => {
          let {spotNo,sequence,spotName,spotImg} = day;

          let spotItem = `
          <li class="timeline_item tourBuild_item" data-no="${spotNo}" drag-handle>
          <div class="timeline_text">
              <div class="timeline_num">${sequence}</div>
              <div class="timeline_name">${spotName}</div>
          </div>
          <div class="timeline_img">
              <img src="${spotImg}" alt="">
          </div>
          </li>
          `
          return spotItem;
      }).join('');


      timelinePage.innerHTML = items;
  }

  timelineBox.innerHTML = tabs;

  changeTab();
}

// 讓popup的資料為fetch回來的資料
function tourForm() {
  let data = JSON.parse(sessionStorage.getItem("day1"));
  let {journeyNo, journeyName,journeyStartDay,journeyEndDay} = data[0];

  tourName.textContent = journeyName;

  let diff = Math.abs(new Date(journeyEndDay) - new Date(journeyStartDay));
  let day = diff/(1000 * 3600 * 24) + 1;
  days.textContent = day;

  // goTourBuild.href = `tourbuild.html#/tour/${journeyNo}`;
  

  return {
    journeyNo,
    journeyName,
    journeyStartDay,
    journeyEndDay
  }

}

tourForm();


// // 地圖呈現
function mainMap() {
    // 取得用戶位置
    navigator.geolocation.getCurrentPosition(
    //   如果正確獲取
    function(pos) {
    // let {latitude,longitude} = pos.coords;
    },
    function() {
    alert('請開啟定位謝謝~');
    },
    {enableHighAccuracy: true,  timeout: 5000});


    map = L.map('map');
    map.setView([24.98921012878418, 121.31353759765625], 14);


    var Stadia_AlidadeSmooth = L.tileLayer('https://api.mapbox.com/styles/v1/joyce44528/cl0jxpac0001m14pkbomag45u/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam95Y2U0NDUyOCIsImEiOiJja3o0YnN0NWgwZjdpMm9uZjJ4NmptZzB0In0.DYwJjf7K_EZu08ajfWqW0w', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

}

mainMap();

 

// 搜尋結果的景點maker
function displayMaker(data) {

  let greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // 先清空原本有的marker
  // let markerArr = [];
 
  // 顯示地圖景點位置
  for(let i = 0; i < data.length; i++){
     
     let marker = L.marker([+data[i].spotLatitude, +data[i].spotLongitude], {icon: greenIcon});

     marker
      .addTo(map)
      .bindPopup(
        `<div class="spot_popup">
          <div class="spot_popup--header">
            <div class="spot_popup--img">
              <img src="${data[i].spotImg}">
            </div>
            <div class="spot_popup--text">
              <h4 class="spot_popup--name">
              ${data[i].spotName}
              </h4>
              <p class="spot_popup--place">
                ${data[i].spotPlace}
              </p>
            </div>
          </div>
          <div class="tourSearch_btnBox">
            <button class="btn btn--main addSpot">加入景點</button>
          </div>
      </div>`,
        L.popup(
          {
            autoClose: true,
            closeOnClick: false
          }
        )
      )
      .on('click',clickZoom)
      .openPopup();
  }


}

// 點擊maker會以他為地圖中心
function clickZoom(e) {
  map.setView(e.target.getLatLng(),15);
}

// 滑到新增景點頁面
function slideAdd() {
    // 滑動
    let newSpotBtn = document.querySelectorAll('.tourBuild_newSpot');
    let arrowBtn = document.querySelector('#arrowBtn');
    let container = document.querySelector('.tourBuild_container');

    newSpotBtn.forEach(btn => btn.addEventListener('click',() => {
      container.style.transform = `translateX(-100%)`;
    }))

    arrowBtn.addEventListener('click',() => {
      container.style.transform = `translateX(0%)`;
    })


}
slideAdd();


// 動態新增刪除tab和page
let stateArr = [];
function displayTab() {
  let tourBuildDay = document.querySelector('.tourBuild_days span');
  let totalDay = +tourBuildDay.textContent;

  stateArr.push(totalDay);
  if(stateArr.length > 2) {
    stateArr.shift();
  }
  
  let [prev, cur] = stateArr;
  let diff = cur - prev;
 
  console.log(stateArr);

  let timelineBox = document.querySelector('.timeline_box');
  let timelineList = document.querySelector('.timeline_list');
  
  if(diff >= 1) {
    let innHtml = '';
    let innPage = '';

    for(let i = prev + 1; i <= cur; i++) {
      innHtml += `<div class="timeline_tab timeline_tab--${i}" data-tab="${i}">第${i}天</div>`;

      innPage += ` <div class="timeline_page timeline_page--${i}"></div>`
    }

    timelineBox.insertAdjacentHTML('beforeend',innHtml);
    timelineList.insertAdjacentHTML('beforeend',innPage);

    changeTab();
  }

  if(diff < 0) {
    let tabs = document.querySelectorAll('.timeline_tab');
    let sliceArr = [...tabs].slice(cur);

    sliceArr.forEach(tab => tab.remove());
  }

}


// 切換行程天標籤
function changeTab() {
  tabs = document.querySelectorAll('.timeline_tab');
  pages = document.querySelectorAll('.timeline_page');
  tabs.forEach(tab => tab.addEventListener('click',changePage));

}
  changeTab();


//切換行程分頁 
function changePage(e) {
    tabs.forEach(tab => tab.classList.remove('timeline_tab--active'));
    pages.forEach(page => page.classList.remove('timeline_page--active'));

    let curPage = Number(e.target.dataset['tab']);
    let tab = document.querySelector(`.timeline_tab--${curPage}`);
    let page = document.querySelector(`.timeline_page--${curPage}`);

    if(!tab || !page) return;
    tab.classList.add('timeline_tab--active');
    page.classList.add('timeline_page--active');

    return curPage;
}

// 行程天標籤的拖動
const dragSlide = function() {

  const infoList = document.querySelector('.timeline_box');

  let clicked = false;
  let startX;
  let xoffest;


  const end = () => {
      clicked = false;
      
  }

  const start = (e) => {
      clicked = true;
      startX = e.pageX || e.touches[0].pageX - infoList.offsetLeft;
      xoffest = infoList.scrollLeft;	
  }

  const move = (e) => {
      if(!clicked) return;
      
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - infoList.offsetLeft;
    const dist = (x - startX);
    infoList.scrollLeft = xoffest - dist;
  }

  
  infoList.addEventListener('mousedown', start);
  infoList.addEventListener('touchstart', start);

  infoList.addEventListener('mousemove', move);
  infoList.addEventListener('touchmove', move);

  infoList.addEventListener('mouseleave', end);
  infoList.addEventListener('mouseup', end);
  infoList.addEventListener('touchend', end);
  
}

dragSlide();
  
// 景點資訊卡
function displayContent() {
  let tourBuildItems = document.querySelectorAll('.timeline_page--active .tourBuild_item');
  let toggleMap = document.querySelector('.toggleMap');
  let tourBuildBox = document.querySelector('.tourBuild_box');


  tourBuildItems.forEach(item => item.removeEventListener('click', clickHandler));
  tourBuildItems.forEach(item => item.addEventListener('click', clickHandler)); 
  

  toggleMap.addEventListener('click',() => {
    tourBuildBox.classList.toggle('is_active');
  })

}


function clickHandler(e) {
  let spot = document.querySelector('.tourSpot');
  let curPoint = +e.currentTarget.dataset["no"];
     
  let data = [...getData()];
  let [curData] = data.filter(spot => +spot.spotNo == curPoint);

  let {spotName,spotImg,spotPlace,spotInfo} = curData;

  
      
  let spotHtml = `
    <div class="tourSpot_wrap">
    <button class="btn btn--close tourSpot_close">
      <i class="bi bi-x"></i>
    </button>
    <div class="tourSpot_img">
      <img src="${spotImg}" alt="">
    </div>
    <div class="tourSpot_text">
      <h3 class="third-title">${spotName}</h3>
      <div class="tourSpot_info">
        <div class="tourSpot_btnBox">
          <button class="btn btn--main">加入景點</button>   
          <button class="btn btn--cancel">取消加入</button>
        </div>
        <p class="p-text tourSpot_addr">
          ${spotPlace}
        </p>
      </div>
      <p class="p-text tourSpot_bewrite">
        ${spotInfo}
      </p>
    </div>
  </div>
  `
    spot.innerHTML = spotHtml;
    spot.style.display = 'block';
}


  
// 行程景點列表
function displaytimeline(e) {
  let curTab = document.querySelector('.timeline_tab--active');
  let curPage = +curTab.dataset["tab"];

  let pageInsert = document.querySelector(`.timeline_page--${curPage}`);
  let allpageIndex = document.querySelectorAll(`.timeline_page--active .timeline_item`);

  let curSpot =  +e.target.parentNode.parentNode.dataset["spot"];

  // 找到data裡面的這個資料
  let data = [...getData()];
  let [curData] = data.filter(spot => +spot.spotNo == curSpot);

  let {spotNo,spotName,spotImg,cityName} = curData;

  // console.log(curSpot,curData);
 
  
  // 抓到這是第幾個景點
  let index = allpageIndex.length + 1;

  let spotItem = `
      <li class="timeline_item tourBuild_item" data-no="${spotNo}" drag-handle>
      <div class="timeline_text">
        <div class="timeline_num">${index}</div>
        <div class="timeline_name">${spotName}</div>
      </div>
      <div class="timeline_img">
        <img src="${spotImg}" alt="">
      </div>
    </li>
  `
  
  pageInsert.insertAdjacentHTML('beforeend',spotItem);

  displayContent();
}

// 更改行程景點的順序
// function dragSpot() {
//   const pages = document.querySelectorAll('.timeline_page');

//   pages.forEach(page => {
//     let handle = smoothDragOrder(page, 0.2);

//     page.addEventListener("change", (e) => {
//       console.log(Array.from(e.currentTarget.children).map((el) => el.dataset.my));

//     });
//   })
// }

// dragSpot();

// 搜尋結果
function displaySpot(data) {
    let spots = data.map(spot => {
        let {spotName, spotImg, spotNo, cityName} = spot;

        return `
        <div class="tourSearch_spot" data-spot="${spotNo}">
        <div class="tourSearch_ex">
          <div class="tourSearch_img">
            <img src="${spotImg}" alt="">
          </div>
          <div class="tourSearch_text">
            <h4>${spotName}</h4>
            <p>
              <span>
                <i class="bi bi-geo-alt"></i>
              </span>
              ${cityName}
            </p>
          </div>
        </div>
        <div class="tourSearch_btnBox">
          <button class="btn btn--main addSpot">加入景點</button>
          <button class="btn btn--cancel">取消加入</button>
        </div>
      </div>
        `
    }).join('');

    let tourContent = document.querySelector('.tourSearch_content');
    // tourContent.insertAdjacentHTML('beforeend', spots);
    tourContent.innerHTML = spots;

    addSpot = document.querySelectorAll('.addSpot');
    addSpot.forEach(add => add.addEventListener('click',displaytimeline));
}


function closePopup() {
  let closeBtn = document.querySelector('.tourSpot_close');
  let box = document.querySelector('.tourSpot');

  closeBtn.addEventListener('click',(e) => {
    console.log(e.currentTarget);
  })
    
}

closePopup();

// 修改形成設定
function reviseSet() {
    let tourName = tourForm.tourName.value;
    let startDate = tourForm["start-date"].value;
    let endDate = tourForm["end-date"].value;
    let popup = document.querySelector('.popup');

    let diff = Math.abs(new Date(endDate) - new Date(startDate));
    let days = diff/(1000 * 3600 * 24) + 1;

    let re = /-/gi;

    tourBuildName.textContent = tourName;
    tourBuildDate.textContent = `${startDate.replace(re,'.')} - ${endDate.replace(re,'.')}`;
    tourBuildDay.textContent = days;   

    popup.style.display = "none";

    // 更新這裡的天數
    displayTab();
}

// 行程設定燈箱
function setPopup() {
  let setBtn = document.querySelector('#setBtn');
  
  setBtn.addEventListener('click',() => {
    let popup = document.querySelector('.popup');
    popup.style.display = 'flex';
  })
}

setPopup();

// 搜尋後撈資料
function searchPlace(e) {
  if(e.key != 'Enter') return;
  let searchVal = e.currentTarget;
  
  fetch(`./phps/tourBuild.php?search=${searchVal.value}`).then(res => res.json())
  .then(response => {

    displaySpot(response);
    displayMaker(response);

    // 暫存response的資料
    sessionStorage.setItem('searchSpot',JSON.stringify(response));
    searchInfo(searchVal); 
  })
  .catch(err => console.log(err));

  
  displayClearBtn(searchVal);
 
  
}

// 清除搜尋內容按鈕的呈現
function displayClearBtn(search) {
  let clearBtn = document.querySelector('.tourForm_clear');
  
  if(search.value) {
    clearBtn.style.display = 'block';

    clearBtn.addEventListener('click',(e) => {
      search.value = '';
      searchInfo(search);
      e.currentTarget.style.display = 'none';
      
      // 刪除session storage所有暫存資料
      sessionStorage.clear();
    })

  }else {
    clearBtn.style.display = 'none';
  }

}

// 搜尋後呈現搜尋結果資訊
function searchInfo(search) {
  let searchInfo = document.querySelector('.tourSearch_info');
  
  infoPlace.textContent = search.value;
  infoNum.textContent = [...getData()].length;

  if(search.value) {
    searchInfo.style.opacity = 1;
  }else {
    searchInfo.style.opacity = 0;
  }
}

// 抓session storage資料
function getData() {
  let sessionData = JSON.parse(sessionStorage.getItem('searchSpot'));

  return sessionData;
}

// 共用
// 抓網址的行程編號
function getUrl() {
  let parseUrl = document.location.hash.toLowerCase();
  let no = +parseUrl.split('/')[2];

  return no;
}

function goBuildGroup() {
  let buildGroBtn = document.querySelector('#goBuildGroup a');
  buildGroBtn.href = `groupform.html?groupform=${getUrl()}`
}
