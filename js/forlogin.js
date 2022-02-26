// 登入表單組件
Vue.component('login',{
    template: `
        <form action="" class="froLoginForm">
            <h4 class='froLoginFormTitle'>請輸入帳號密碼</h4>
            <table>
                <tr class="froLoginFormItem">
                    <th>電子信箱:</th><td><input type="email"></td>
                </tr>
                <tr class="froLoginFormItem">
                    <th>密碼:</th><td><input type="password"></td>
                </tr>
            </table>
            <div class="froLoginBtn">
                <input id='loginBtn' type="submit" name="" value="登入">
            </div>
        </form>
    `,
});
// 註冊表單組件
Vue.component('signin',{
    template: `
        <form action="" class="froLoginForm">
            <h4 class='froLoginFormTitle'>請填寫您的基本資料</h4>
            <table>
                <tr class="froLoginFormItem">
                    <th>電子信箱:</th><td><input type="email"></td>
                </tr>
                <tr class="froLoginFormItem">
                    <th>密碼:</th><td><input type="password"></td>
                </tr>
                <tr class="froLoginFormItem">
                    <th>確認密碼:</th><td><input type="password"></td>
                </tr>
                <tr class="froLoginFormItem">
                    <th>電話:</th><td><input type="tel"></td>
                </tr>
                <tr class="froLoginFormItem">
                    <th>生日:</th><td><input type="date"></td>
                </tr>
            </table>
            <div class="froLoginBtn">
                <input type="submit" id='signinBtn' name="" value="註冊">
            </div>
        </form>
    `,
});

Vue.component('loginbear',{
    template:`
    <div class="froLoginMascot">
        <label for="loginBtn">
            <img src="images/mascot/loginBear.svg" alt="">
        </label>
    </div>
    `,
})
Vue.component('singinbear',{
    template:`
    <div class="froLoginMascot">
        <label for="signinBtn">
            <img src="images/mascot/signinBear.svg" alt="">
        </label>
    </div>
    `,
})

new Vue({
    el: '#froLoginBlock',
    data: {
        content: 'login',
        content2: 'loginbear',
        isShow: true
    },
});



let froLoginSwitch_btn = document.querySelectorAll('.froLoginSwitch_btn');
let froLoginCancel = document.querySelectorAll('.froLoginCancel');
let froLoginBG = document.getElementById('froLoginBG');
let loginBoxBtn = document.getElementById('loginBoxBtn');
// 註冊事件
function loginBox_doFirst(){
    for(i=0;i<froLoginSwitch_btn.length;i++){
        froLoginSwitch_btn[i].addEventListener('click',switchBtnColor)
    };
    froLoginCancel[0].addEventListener('click',closeLoginBox);
    loginBoxBtn.addEventListener('click',openLoginBox)
}


// 開啟登入燈箱
function openLoginBox(){
    froLoginBG.style.display = 'block';
}

// 登入/註冊顏色切換
function switchBtnColor(){
    $('.froLoginSwitch_btn').removeClass('froLoginSwitch_active');
    $(this).addClass('froLoginSwitch_active');
}

// 關閉登入燈箱
function closeLoginBox(){
    froLoginBG.style.display = 'none';
}
window.addEventListener('load',loginBox_doFirst)