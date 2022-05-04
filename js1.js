"use strict"
var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var messages; // элемент массива - {name:'Иванов',check:'Привет'};
var updatePassword;
var stringName = 'DUBINCHYK_BREIKAUT_REZULTAT';
// получает сообщения с сервера и потом показывает
function refreshMessages() {
    $.ajax( {
            url : ajaxHandlerScript,
            type : 'POST', dataType:'json',
            data : { f : 'READ', n : stringName },
            cache : false,
            success : readReady,
            
        }
    );
   console.log(messages)
}

function readReady(callresult) { // сообщения получены - показывает
   if ( callresult.error!=undefined )
        alert(callresult.error);
    else {
        messages=[];
        if ( callresult.result!="" ) { // либо строка пустая - сообщений нет
            // либо в строке - JSON-представление массива сообщений
            messages=JSON.parse(callresult.result);
            // вдруг кто-то сохранил мусор вместо LOKTEV_CHAT_MESSAGES?
            if ( !Array.isArray(messages) ){
                messages=[];
        }
        console.log(messages)
   }
}
}
