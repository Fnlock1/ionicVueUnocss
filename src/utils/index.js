// 根据时间 返回 内容
function checkTimeReturnMsg() {
    let timer = new Date().getHours();
    let msgArr = [
        'Good morning 🏆',
        'Good afternoon 🎉',
        'Good evening 🎨',
        'Good night 😪'
    ]

    if (timer >= 6 && timer < 12) {
        return msgArr[0];
    } else if (timer >= 12 && timer < 18) {
        return msgArr[1];
    } else if (timer >= 18 && timer < 22) {
        return msgArr[2];
    }else {
        return msgArr[3];
    }
}

function getUserName(){
    return 'xiangyupress';
}


export {
    checkTimeReturnMsg,
    getUserName
}
