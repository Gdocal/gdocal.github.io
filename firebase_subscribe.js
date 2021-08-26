// firebase_subscribe.js
firebase.initializeApp({
 
  apiKey: "AIzaSyAYmw2WFzZRmiDWoglR-yohkDu873mDOXc",
  authDomain: "test-notitication.firebaseapp.com",
  projectId: "test-notitication",
  storageBucket: "test-notitication.appspot.com",
  messagingSenderId: "532209433002",
  appId: "1:532209433002:web:f1d1f7678d26954b4313d3",
  measurementId: "G-0WSN29YLRH"

});

// браузер поддерживает уведомления
// вообще, эту проверку должна делать библиотека Firebase, но она этого не делает
function Init(){
    if ('Notification' in window) {
        console.log("Notification in window")
        var messaging = firebase.messaging();

        // пользователь уже разрешил получение уведомлений
        // подписываем на уведомления если ещё не подписали
        if (Notification.permission === 'granted') {
            console.log("granted. subscribe")
            subscribe();
        }

        // по клику, запрашиваем у пользователя разрешение на уведомления
        // и подписываем его
        var b=$('#subscribe');
        console.log(b);
        b.on('click', function () {
            subscribe();
        });
    }
}

function subscribe() {
    console.log("subscribe")
    // запрашиваем разрешение на получение уведомлений
    messaging.requestPermission()
        .then(function () {
            // получаем ID устройства
            messaging.getToken()
                .then(function (currentToken) {
                    console.log(currentToken);

                    if (currentToken) {
                        sendTokenToServer(currentToken);
                    } else {
                        console.warn('Не удалось получить токен.');
                        setTokenSentToServer(false);
                    }
                })
                .catch(function (err) {
                    console.warn('При получении токена произошла ошибка.', err);
                    setTokenSentToServer(false);
                });
    })
    .catch(function (err) {
        console.warn('Не удалось получить разрешение на показ уведомлений.', err);
    });
}

// отправка ID на сервер
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer(currentToken)) {
        console.log('Отправка токена на сервер...');

        // var url = ''; // адрес скрипта на сервере который сохраняет ID устройства
        // $.post(url, {
        //     token: currentToken
        // });
        console.log("token to send: ",currentToken)
        setTokenSentToServer(currentToken);
    } else {
        console.log('Токен уже отправлен на сервер.');
    }
}

// используем localStorage для отметки того,
// что пользователь уже подписался на уведомления
function isTokenSentToServer(currentToken) {
    return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
}

function setTokenSentToServer(currentToken) {
    window.localStorage.setItem(
        'sentFirebaseMessagingToken',
        currentToken ? currentToken : ''
    );
}
