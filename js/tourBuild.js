window.addEventListener('load',function() {
    tourForm = document.querySelector('#tourForm');
    tourBuildName = document.querySelector('.tourBuild_name');
    tourBuildDay = document.querySelector('.tourBuild_days span');
    tourBuildDate = document.querySelector('.tourBuild_date');

    setBtn = document.querySelector('#checkSet');
    setBtn.addEventListener('click',reviseSet);

    addSpot = document.querySelectorAll('.addSpot');
    addSpot.forEach(add => add.addEventListener('click',displaytimeline));

})

let data = [
    {
        "spotNo": 1,
        "spotName": "水璉、牛山海岸",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/40/640x480",
        "spotPlace": "花蓮縣974壽豐鄉牛山39之5號",
        "soptLongitude": 121.56939697265625,
        "soptLatitude": 23.763439178466797,
        "spotInfo": "水璉位在花蓮縣壽豐鄉海濱，蒼翠的山丘環抱著寬廣的河谷盆地，水璉溪蜿蜒而過，沿著公路邊的小徑往下，水璉濕地牛山海岸彷彿一片臨海的秘密樂園。除了可以踏浪戲水、進行沙灘活動和悠閒的垂釣之外，這片海岸的生態資源也相當豐富，海岸植物林是觀察東海岸生態樣貌的好地點，健行、漫步、賞鳥、觀蝶都是很棒的選擇，徜徉在廣闊的海岸草坪上感受藍天，白雲和陽光，時間彷彿定格。 牛山呼庭的由來座落在水璉南方海灘的牛山，阿美族叫做：Huting（呼庭），意思為大片草地的牧場。牛山擁有特殊地形，最奇特的是南岸貌似梯田的山丘小階，曾是水牛的牧草區，春天滿山坡的台灣百合盛開，可謂野百合的原生勝地。牛山的植物群相豐富，幾乎是東部海岸植物相的縮影，西元1990年（民國79年）已列入台灣沿海保護區計畫中之自然保護區。冬天水璉牛山的海灘會唱歌-換膚海灘春夏，海灘柔細溫潤，赤足漫步在沙灘上，海風徐徐吹拂，彷彿置身「海角一樂園」，閒適自在悠遊自得；當東北季風一起，長長的沙灘，幾番吹送，細沙變成大大小小五顏六色的鵝卵石，依著一定的秩序排列在海灘上，海浪翻湧而來，鵝卵石被推著往岸上跑；當海浪退去，它們順著海灘的斜度，一顆顆滾下，發出高低抑揚不同頻率的聲音，當地人稱：冬天水璉牛山的海灘會唱歌。把心留在海岸線-星光露營牛山這裡也有小木屋提供簡單住宿，也可以選擇露營。躺在星空之下，在眼底刻滿星光，聽著潮水的聲音入眠，一不小心連心都會遺留在海岸線了。",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 2,
        "spotName": "石梯坪",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/28701/640x480",
        "spotPlace": "花蓮縣977豐濱鄉石梯坪52號",
        "soptLongitude": 121.51172637939453,
        "soptLatitude": 23.48525047302246,
        "spotInfo": "石梯坪擁有經風力和海水雕刻而成的特殊岩岸風景，潮間帶上豐富的自然生態資源：螃蟹、海星、海參、寄居蟹、色彩斑斕的魚群，等待觀察力敏銳的人來一探奧秘。夜晚在海蝕平台上方的石梯坪露營區搭營，隔天就能在營帳前迎接美麗的晨曦，看清晨的陽光破雲而出將海面映照得金黃燦爛。世界級的戶外地質教室石梯坪位在花蓮縣豐濱鄉石梯灣的南側尾端，整個區域是一個面積極大的海岸階地，海蝕地形十分發達，海蝕平台、隆起珊瑚礁、海蝕溝、海蝕崖等舉目皆是，尤其是壺穴景觀堪稱台灣第一。（&darr;觀海平台因施工封閉，自110年11月1日起至111年2月28日止）石梯坪海岸蘊藏著豐富的珊瑚礁群和熱帶魚群，潮間帶上與壺穴形成的潮池，生長著各式各樣的海藻、魚蝦、貝類等海洋生物，封閉其字110年11月1日起至111年2月28日止使石梯坪成為觀察潮間帶豐富生態和潛水、磯釣的絕佳場所。遊客可沿著風景區的環狀步道實地觀察，或是登上17公尺高的單面山，不僅可飽覽石梯坪的地質景觀，太平洋的壯闊浩瀚景象也能盡入眼底。來生態賞鯨吧石梯坪也是個充滿生命力的港口，漁船每日捕撈新鮮的漁獲上岸外，這裡也是台灣賞鯨的發源地，每年夏天鯨豚們總現身外海，吸引遊人們搭上賞鯨船追逐牠們優雅的身影，不妨搭上船一同來個生態賞鯨之旅吧！ 【石梯坪露營區】電話：0922-211336 呂先生網站：http://camping33.pgo.tw/相關資訊：點我",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 3,
        "spotName": "長虹橋",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/28957/640x480",
        "spotPlace": "花蓮縣977豐濱鄉台11線68公里處",
        "soptLongitude": 121.4890365600586,
        "soptLatitude": 23.46845054626465,
        "spotInfo": "長虹橋優雅的拱形橋身橫跨在秀姑巒溪出海口處兩岸，在山海交際之處形成一道美麗的虹影，成為東海岸的著名拍照地標，而這裡也是泛舟的終點站，一艘艘疲倦又滿足的泛舟筏在這裡靠岸。沿著步道在溪畔漫步，水鳥輕巧的在河床邊覓食，自行車來來往往，兩旁的植物隨季節變換風景，若是累了，不妨到附近的新太平洋1號店稍作休息，喝杯下午茶，度過悠閒的時光。出海口的奚卜蘭島，又稱作獅球嶼，綠意蒼蒼的小島是當地海岸阿美族的聖地，也是火山集塊岩構成的島嶼，由於溪流阻隔，保有相當天然的生態相貌，在河口覓食的鳥類、洄游魚類和蝦蟹都會在此聚集，是做生態觀察的好地點。",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 4,
        "spotName": "北回歸線",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/28952/640x480",
        "spotPlace": "花蓮縣977豐濱鄉台11線70.5公里處",
        "soptLongitude": 121.49617004394531,
        "soptLatitude": 23.4514102935791,
        "spotInfo": "台灣一共有三個北回歸線標，分別在嘉義水上鄉、花蓮舞鶴台地、豐濱鄉，而這座北回歸線標碑位於台11線70.5公里處。潔白的地標坐擁海岸山脈與太平洋的美景，常常吸引了許多遊客來此拍照、休憩，但是你知道為什麼這座北回歸線標碑中間會有一條細縫嗎？北回歸線就是指北緯23.5&deg;，象徵著熱帶以及溫帶的分界點，最明顯的就是台灣北回歸線以南主要種植的作物，為熱帶的鳳梨以及釋迦，以北主要的作物就是溫帶作物茶以及水稻，而夏至中午時陽光會正好射入北回歸線標的縫中，此刻，塔旁的遊客即可體驗太陽下無影子的奇觀！所以經過除了來此拍照做個紀念，也可以閱讀解說牌了解四季的奧妙！",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 5,
        "spotName": "花蓮遊客中心",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/28830/640x480",
        "spotPlace": "花蓮縣974壽豐鄉鹽寮村大坑5號",
        "soptLongitude": 121.60240936279297,
        "soptLatitude": 23.904550552368164,
        "spotInfo": "沿著台11線走，順著蜿蜒的道路來到東海岸風景區最北端的花蓮遊客中心，坐落於山坡上的遊客中心，內部設有全區自然、人文資源及東部海岸沿線旅遊據點的展示室，以及可容納81人的多媒體簡報室，在出發遊玩東海岸前，不妨來到這裡諮詢相關旅遊資訊。面向遼闊太平洋的花蓮遊客中心，擁有絕佳的視野，讓人能夠遠眺一望無際的蔚藍海洋，享受這番眼前的無敵海景，每到4-5月時，在遊客中心旁的水塘山坡開滿了鐵砲百合，沿著周邊景觀步道，縱覽花海在微風中搖曳波動，如畫般的景致令人相當陶醉。由遊客中心往北可到海岸山脈北界所在的嶺頂岬，在此可一覽花蓮溪與太平洋交會，所激起的「洄瀾」美景，因此花蓮港昔日又名「洄瀾港」。",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 6,
        "spotName": "秀姑巒溪遊客中心",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/2431/640x480",
        "spotPlace": "花蓮縣978瑞穗鄉中山路三段215號",
        "soptLongitude": 121.40119934082031,
        "soptLatitude": 23.488880157470703,
        "spotInfo": "秀姑巒溪遊客中心位於花東縱谷瑞穗大橋旁，是秀姑巒溪泛舟活動的起點，遊客中心建築外觀仿自原住民傳統建築，中心前廣場還有一巨大的原住民雕像，造型相當別緻；影片播放室播放泛舟安全影片，遊客中心並設有露營區，每逢泛舟季節，遊客如織。",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 7,
        "spotName": "奚卜蘭遊客中心(新太平洋一號店)",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/28982/640x480",
        "spotPlace": "花蓮縣977豐濱鄉靜浦村靜浦8-1號",
        "soptLongitude": 121.48854064941406,
        "soptLatitude": 23.466630935668945,
        "spotInfo": "秀姑巒溪溪床的石灰岩塊長年在溪水的沖蝕下，姿態各異、潔白如玉，因此有著「秀姑漱玉」的美名。外型潔白的奚卜蘭遊中心，便以秀姑漱玉作為設計理念，並在外牆上塗以純白的仿石塗料，用鋁格柵編織外型如秀姑漱玉的造型遮陽板，有別於過去傳統的斜屋頂樣式，亮眼的外型吸引旅人的目光。經過設計改造之後的奚卜蘭遊客中心，「新太平洋一號店」在原本奚卜蘭遊客中心隆重開幕，由在東海岸深耕多年的雅比斯團隊進駐，邀請了台東排灣族傑出青年設計師謝聖華取用部落元素發想，以溫暖的木造進行設計，不僅提供原有遊客中心功能，加入了書店與咖啡店，展售精緻細膩的部落工藝品，讓前來的遊客能愜意的喝一杯咖啡稍作休息，翻翻書或購買部落的工藝品。奚卜蘭遊客中心也陸續推出市集、好書閱讀、晚餐快閃計劃等活動，繼續挖掘東海岸的在地故事，激盪更多創意，作為東海岸面向世界的交流基地，傳達屬於東海岸部落的新太平洋式生活。這不僅是部落工作假期志工朋友的家，也是遊客一處好的休憩點，路過這裡，別忘了進來坐坐，感受東海岸部落的風情吧！",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 8,
        "spotName": "鹽寮",
        "spotImg": "https://www.eastcoast-nsa.gov.tw/image/28870/640x480",
        "spotPlace": "花蓮縣974壽豐鄉鹽寮村",
        "soptLongitude": 121.60379791259766,
        "soptLatitude": 23.90294075012207,
        "spotInfo": "鹽寮村位於花蓮縣壽豐鄉，擁有台灣最長的礫石沙灘，鹽寮名稱的由來為早期花蓮港附近食用鹽在此煮製，日治時期即有「鹽寮港」之名。在近年來，每當暑假來臨時，這裡聚集了來自各地的手作者、背包客，組成充滿異國風情的「海或．瘋市集」，不論是手作、塔羅占卜或議題討論，都在市集中出現。而鹽寮沿途有各具特色的民宿，在面海的窗邊喝一杯咖啡，就是個美好寧靜的下午，或是沿著濱海的腳踏車道漫遊，累了就到附近的店家，品嘗一頓新鮮豐盛的海鮮大餐吧！鹽寮部落鹽寮部落分為三個小部落：大坑、托邁（Tomay）以及橄仔樹腳。其中，Tomay是由里漏社的阿美族人所組成，其意思為「熊山」， 相傳過去里漏社的阿美人在此獵殺大熊，另外兩個小部落則是屬於秀姑巒阿美族。",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 9,
        "spotName": "新光兆豐休閒農場",
        "spotImg": "https://www.erv-nsa.gov.tw/image/10520/640x480",
        "spotPlace": "花蓮縣975鳳林鎮林榮里永福街20號",
        "soptLongitude": 121.46304321289062,
        "soptLatitude": 23.802000045776367,
        "spotInfo": "大眾運輸點此連結&gt;&gt;&gt;台灣好行-縱谷花蓮線資訊(時刻表/票價表)無障礙公車預約&gt;&gt;&gt;&gt;台灣好行無障礙預約資訊深受小朋友歡迎的新光兆豐休閒農場，設有多種遊樂設施、放牧區、生態鳥園、鸚鵡園等，來到這裡可看見孔雀在農場中漫步，並能夠近距離拿著奶瓶餵小牛，而廣大遼闊的青青草原可以讓人盡情跑跳，不僅如此，夏日還有開放戲水區，還能令大人小孩快樂地打水仗，度過歡樂的時光。被群山圍繞的兆豐農場，是一座水美草豐、生氣盎然的休閒渡假農場，鮮美的牧草生產出優質的鮮奶，製作出好吃的奶酪、鮮奶冰淇淋，廣受旅客的喜愛。除了吃鮮奶製作的甜點、看乳牛之外，這裡也有壯觀的歐式花園、一年四季皆呈現不同風情的花海，以及二子山溫泉，讓人享受多種的休閒活動。沿著農場中的步道騎著電動車或鐵馬，到動物區看討喜又可愛北美浣熊、台灣山羌，對植物有興趣的遊客，也可以在水生植物生態區、溫室、沙漠植物園及藥用植物園等區域，探尋頗具特色的各類植物，欣賞這裡迷人的風景，來趟精彩豐富的農場親子遊。",
        "cityName": "花蓮縣"
    },
    {
        "spotNo": 10,
        "spotName": "鳳凰山莊(賽斯村)",
        "spotImg": "https://www.erv-nsa.gov.tw/image/12697/640x480",
        "spotPlace": "花蓮縣975鳳林鎮鳳凰路300號",
        "soptLongitude": 121.4255599975586,
        "soptLatitude": 23.756689071655273,
        "spotInfo": "環境清幽的鳳凰山莊(賽斯村)，位在客家庄鳳林鎮西側鳳林溪上游地區，擁有露營區、烤肉場等設施，並也提供旅人住宿、購物、享用餐點，週邊青山環抱、溪水潺潺，臨近鳳凰瀑布與鳳林溪，十分適合來一趟自然生態旅遊。鳳凰山莊原本是鳳林地區的水源地，水質清澈甘甜，並擁有原始的自然風貌，伴著鳳林溪潺潺流水，跟著標示往山邊前進，可以看見秀麗的鳳凰瀑布，猶如一條銀絲帶般懸掛於10公尺高的山壁上，空氣間瀰漫著負離子，清淺的水潭冰涼透徹，是一處極富野趣的遊憩勝地，因此鳳林鎮公所早年將此區規劃為鳳凰瀑布風景區，為炎炎夏日帶來一絲沁涼。在花東縱谷國家風景區成立後，便將此地規劃為發展自然生態旅遊與心靈探索的遊憩區，利用鳳凰山莊原有的建築，增設露營區、烤肉場及其他相關設施，而賽斯村每月都有規劃各種的心靈探索活動，希望為造訪花東縱谷的旅人，提供另一種不同風格與型態的活動選擇。",
        "cityName": "花蓮縣"
    },
]

function mainMap() {
    // 取得用戶位置
    navigator.geolocation.getCurrentPosition(
    //   如果正確獲取
    function(pos) {
    let {latitude,longitude} = pos.coords;
    },
    function() {
    alert('請開啟定位謝謝~');
    },
    {enableHighAccuracy: true,  timeout: 5000});


    var map = L.map('map');
    map.setView([24.98921012878418, 121.31353759765625], 10);


    var Stadia_AlidadeSmooth = L.tileLayer('https://api.mapbox.com/styles/v1/joyce44528/cl086trvf000y14r19x8wub1d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam95Y2U0NDUyOCIsImEiOiJja3o0YnN0NWgwZjdpMm9uZjJ4NmptZzB0In0.DYwJjf7K_EZu08ajfWqW0w', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(map);

    var greenIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    for(var i =0;data.length>i;i++){
      L.marker([data[i].soptLatitude,data[i].soptLongitude], {icon: greenIcon}).addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 300,
            minWidth:100,
            autoClose: true,
            closeOnClick: false,
            className: 'tourBuild_popup'
          })
        )
        .setPopupContent(`景點: ${data[i].spotName}`)
        .openPopup();
    }
}
mainMap();

function slideAdd() {
    // 滑動
    let newSpotBtn = document.querySelector('.tourBuild_newSpot');
    let arrowBtn = document.querySelector('#arrowBtn');
    let container = document.querySelector('.tourBuild_container');

    newSpotBtn.addEventListener('click',() => {
      container.style.transform = `translateX(-100%)`;
    })

    arrowBtn.addEventListener('click',() => {
      container.style.transform = `translateX(0%)`;
    })


}
slideAdd();

  function changeTab() {
  tabs = document.querySelectorAll('.timeline_tab');
  pages = document.querySelectorAll('.timeline_page');
  tabs.forEach(tab => tab.addEventListener('click',changePage));

}
  changeTab();

  
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
     

  let {spotImg, spotName,spotPlace,spotInfo} = data[curPoint - 1];
      
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

function getData(el) {
  let curSpot =  +el.parentNode.parentNode.dataset["spot"];
  return data[curSpot - 1];
};
  
// 行程景點列表
function displaytimeline(e) {
  let curTab = document.querySelector('.timeline_tab--active');
  let curPage = +curTab.dataset["tab"];

  let pageInsert = document.querySelector(`.timeline_page--${curPage}`);
  let allpageIndex = document.querySelectorAll(`.timeline_page--active .timeline_item`);

  let curSpot =  +e.target.parentNode.parentNode.dataset["spot"];
  // 找到data裡面的這個資料
  let curData = data[curSpot - 1];
  let {spotNo,spotName,spotImg,cityName} = curData;
 
  
  // 抓到這是第幾個景點
  let index = allpageIndex.length + 1;

  let spotItem = `
      <li class="timeline_item tourBuild_item" data-no="${spotNo}">
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

// 搜尋結果
function displaySpot() {
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
    tourContent.insertAdjacentHTML('beforeend', spots);
}

displaySpot();

function closePopup() {
  let closeBtn = document.querySelector('.tourSpot_close');
  let box = document.querySelector('.tourSpot');

  closeBtn.addEventListener('click',(e) => {
    console.log(e.currentTarget);
  })
    
}

closePopup();


function reviseSet() {
    let tourName = tourForm.tourName.value;
    let startDate = tourForm["start-date"].value;
    let endDate = tourForm["end-date"].value;
    let popup = document.querySelector('.popup');

    let diff = Math.abs(new Date(endDate) - new Date(startDate));
    let days = diff/(1000 * 3600 * 24);

    tourBuildName.value = tourName;
    tourBuildDate.textContent = startDate;
    tourBuildDay.textContent = days;   

    popup.style.display = "none";
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