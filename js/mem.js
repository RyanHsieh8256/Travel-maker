if(memData){
    let member = JSON.parse(memData);
    $('.memberAccountName h3').text(member.memName);
    $('.memberAccountPhto img').attr('src', `images/memIcon/${member.memIcon}`);
}

