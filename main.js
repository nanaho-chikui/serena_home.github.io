(function () {
    'use strict';


    const  nameInput= document.getElementById('name');
    const  mailInput= document.getElementById('mail');
    const  msgInput= document.getElementById('msg');
    


    const sendButton = document.getElementById('s_button');

    
// mailto リンクで外部メーラを起動しない
user_pref("network.protocol-handler.external.mailto", false);

sendButton.onclick = () => {
    

    console.log('Sendボタンを押しました');

    const name = nameInput.value;
    const mail = mailInput.value;
    const msg = msgInput.value;

    if (name.length === 0) { // 名前が空の時アラートを出し処理を終了する
        console.log('名前を入力していません');

  alert('名前を入力してください')
    return;
}

if (mail.length === 0) { // メールアドレスが空の時アラートを出し処理を終了する
    console.log('メールアドレスを入力していません');

alert('メールアドレスを入力してください')
return;
}

if (msg.length === 0) { // メッセージが空の時アラートを出し処理を終了する
    console.log('メッセージを入力していません');

alert('メッセージを入力してください')
return;
}



}

})();