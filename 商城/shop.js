$(document).ready(function(){
 //slide
 var one = $("#one");
 var two = $("#two");

 one.owlCarousel({
    items: 1,
    autoplay: true,
    loop:true,
    nav:true,


    
});

two.owlCarousel({
  center: true,
  items:1,
  loop:true,
  margin:10,
  responsive:{
      600:{
          items:1
      }
  },
  dots:false,
  nav:true,
  navText: ["<img src='images/left-arrow.png'>","<img src='images/right-arrow.png'>"]
});

    
//favorite
    let heart;
    function switchFavorite(){
        if(heart.title == "加入收藏"){
            heart.src = "images/heart_red.png";
            heart.title = "取消收藏";
        }else{
            heart.src = "images/heart_white.png";
            heart.title = "加入收藏";
        }
    }
  
    function init(){
        heart = document.getElementById("heart");
        heart.onclick = switchFavorite;
    }
    window.addEventListener("load", init, false);
  
    

//shopspot/shophotel月曆
    let month_olympic = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let month_normal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let month_name = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    
    const holder = document.getElementById("days");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const ctitle = document.getElementById("calendar-title");
    const cyear = document.getElementById("calendar-year");
    const dayUL = document.getElementById('days')
    
    let my_date = new Date();
    let my_year = my_date.getFullYear();
    let my_month = my_date.getMonth();
    let my_day = my_date.getDate();
    
    
    //某年某月的第一天是星期幾
    function dayStart(month, year) {
      let tmpDate = new Date(year, month, 1);
      return (tmpDate.getDay());
    }
    
    //計算是不是閏年，年/4的餘數
    function daysMonth(month, year) {
      let tmp = year % 4;
      if (tmp == 0) {
        return (month_olympic[month]);
      } else {
        return (month_normal[month]);
      }
    }
    
    function refreshDate() {
      let str = ``;
      let totalDay = daysMonth(my_month, my_year);
      let firstDay = dayStart(my_month, my_year);
      let myclass;
      for (let i = 1; i < firstDay; i++) {
        str += `<li></li>`;
      }
      for (let i = 1; i <= totalDay; i++) {
        if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
          myclass = ` class='lightgrey'`;
        } else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
          myclass = `class='blackborder focus'`;
        } else {
          myclass = `class='darkgrey focus'`;
        }
    
        // 補0
        let dayI = i;
        if (dayI.toString().length == 1) {
          dayI = "0" + dayI;
        }
        let monthI = my_month + 1;
        if (monthI.toString().length == 1) {
          monthI = '0' + monthI;
        }
        // 渲染 ＋ 綁ID
        str += `<li ${myclass} data-id='${my_year}${monthI}${dayI} ' onclick='focus()'> ${i} </li>`; // 日期節點
    
      }
      holder.innerHTML = str;
      ctitle.innerHTML = month_name[my_month];
      cyear.innerHTML = my_year;
    }
    refreshDate();
    
    prev.onclick = function (e) {
      e.preventDefault();
      my_month--;
      if (my_month < 0) {
        my_year--;
        my_month = 11;
      }
      refreshDate();
    }
    next.onclick = function (e) {
      e.preventDefault();
      my_month++;
      if (my_month > 11) {
        my_year++;
        my_month = 0;
      }
      refreshDate();
    }
    
    // 監聽 ul
    function getDay() {
      let dayID = '';
      dayUL.addEventListener('click', function (e) {
        dayID = e.target.dataset.id;
        e.target.classList.toggle('checked')
        let y = dayID.slice(0, 4);
        let m = dayID.slice(4, 6);
        let d = dayID.slice(6);
        let dayString = `${y}-${m}-${d}`;
        console.log(dayString)
      })
    }
    getDay();
    
    // const focusBG = document.querySelector('.focus')
    // function focus(){
      
    // }

    //shoppingcart
    // -----------------for-Shopping-cart-------------
$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e) {
        update_amounts();
    });
});
function update_amounts(){
  var sum = 0.0;
        $('#myTable > tbody  > tr').each(function() {
          var qty = $(this).find('.qty').val();
            var price = $(this).find('.price').val();
            var amount = (qty*price)
            sum+=amount;
            $(this).find('.amount').text(''+amount);
        });
  $('.total').text(sum);
}



//----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
var incrementQty = plusBtn.click(function() {
  var $n = $(this)
      .parent(".button-container")
      .find(".qty");
  $n.val(Number($n.val())+1 );
  update_amounts();
});

var decrementQty = minusBtn.click(function() {
      var $n = $(this)
      .parent(".button-container")
      .find(".qty");
  var QtyVal = Number($n.val());
  if (QtyVal > 0) {
      $n.val(QtyVal-1);
  }
  update_amounts();
});
  });