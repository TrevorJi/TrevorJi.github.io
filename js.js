function shuffle(){
    var liblist = document.querySelector('#libList');
    for (var i = liblist.children.length; i >= 0; i--) {
        liblist.appendChild(liblist.children[Math.random() * i | 0]);
        }

    var jourlist = document.querySelector('#jourList');
    for (var i = jourlist.children.length; i >= 0; i--) {
        jourlist.appendChild(jourlist.children[Math.random() * i | 0]);
        }
}

function encode(){
        var text = document.querySelector('.journal').innerText;
        var a = text.split("");
        var n = a.length;
    
        for(var i = n - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        document.querySelector('.journal').innerText = a.join("");
}

function hexCopy(){
        var hexP = document.querySelector('p.hex');
        navigator.clipboard.writeText(hexP.textContent);
        alert("Hex Coordinate Copied");
}

function hide(){
        var div = document.querySelector('#hint');
        div.style.opacity = 0;
}

function showTheseus() {
        var div = document.querySelector('#hint');
        div.innerHTML = '<p>Theseus is <span style="color:white; font-weight:bold;">winning</span>.</p>';
        div.style.opacity = 1;
}

function showAsterion() {
        var div = document.querySelector('#hint');
        div.innerHTML = '<p>Asterion is <span style="color:white; font-weight:bold;">losing</span>.</p>';
        div.style.opacity = 1;
}

function showAriadne() {
        var div = document.querySelector('#hint');
        div.innerHTML = '<p>Ariadne is <span style="color:red; font-weight:bold;">smiling</span>.</p>';
        div.style.opacity = 1;
}

function isShe(event) {
    var input = document.querySelector('#firstquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'maimai'){
        document.getElementById('q1').style.display = "none";
        document.getElementById('q2').style.display = "grid";
        event.preventDefault();
    } else {
        window.location.replace("/404.html");
        event.preventDefault();
    }
}

function isMe(event) {
    var input = document.querySelector('#secondquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'talanvantus'){
        window.location.replace("/welcome.html");
        event.preventDefault();
    } else {
        window.location.replace("/404.html");
        event.preventDefault();
    }
}

function whatIsHeCalled(event) {
    var input = document.querySelector('#thirdquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'minotaur'){
        event.preventDefault();
        document.getElementById('q3').style.display = "none";
        document.getElementById('q4').style.display = "grid";
    } else {
        event.preventDefault();
        var path = "/journal@y4191pi1klx0jjgn2a9nipjs2s916yldbrlr9qdy4q...-w1-s1-v10.html";
        turnPages(path);
    }
}

function whatIsHisRealName(event) {
    var input = document.querySelector('#fourthquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'asterion'){
        event.preventDefault();
        var path = "/journalOnAsterion.html";
        turnPages(path);
    } else {
        event.preventDefault();
        var path = "/journal@y4191pi1klx0jjgn2a9nipjs2s916yldbrlr9qdy4q...-w1-s1-v10.html";
        turnPages(path);
    }

}

function whatIsHisName(event) {
    var input = document.querySelector('#lastquestion');
    var answer = input.value.toLowerCase();
    if(answer === 'talanvantus'){
        event.preventDefault();
        var path = "/findthelastjournal.html";
        turnPages(path);
    } else {
        event.preventDefault();
        var path = "/journal@2uiujmssc603m7gfxnx0p1xpiffle2grvskbi1f...-w2-s3-v27.html";
        turnPages(path);
    }

}

function turnPages(path){
    var audio = new Audio('/resources/turning_pages.mp3');
    audio.addEventListener("canplaythrough", function(){
        var duration = audio.duration;
        audio.play();
        setTimeout(function(){location.replace(path);}, duration*1000 + 300);
    });
}