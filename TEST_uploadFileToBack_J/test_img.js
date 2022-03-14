function doFirst(){
    // 先跟HTML產生關聯，再建事件聆聽功能
    // document.getElementById('theFile').onchange = fileChange;
    document.getElementById('theFile').onchange = function(e){
        //fileChange();
        fuc_getImg(e);
    }
    
};

fuc_getImg=(e)=>{
    // 重要: FormData()
    let form = new FormData();
    //formData.append(name, e.target.files[0], filename);
    //form.append("product[file][]", e.target.files[0])
    
    // **
    form.append('file', e.target.files[0]);
    console.log(form)
    axios({
        method: 'post',
        url: './test_img.php',
        data: form,
        headers: {'Content-Type': 'multipart/form-data' }
        })
        //`./test_img.php`,file)
        .then( (response) => { 
            console.log(response);
            console.log(response.data);
        
        })
        .catch( (error) => console.log(error))
}

window.addEventListener('load',doFirst);

// 參考網址:
// https://openhome.cc/Gossip/ECMAScript/FormData.html
// https://stackoverflow.com/questions/47630163/axios-post-request-to-send-form-data
// https://ithelp.ithome.com.tw/questions/10195628
// https://stackabuse.com/axios-multipart-form-data-sending-file-through-a-form-with-javascript/
// https://masteringjs.io/tutorials/axios/axios-multi-form-data
// https://blog.kalan.dev/2021-03-13-html-form-data/
// https://www.codegrepper.com/code-examples/javascript/axios+formdata+responsetype
// https://pjchender.dev/webapis/webapis-file-input/#keywords-formdata
