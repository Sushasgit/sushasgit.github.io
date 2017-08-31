document.addEventListener('DOMContentLoaded', function() {
    var gameBtn = document.querySelectorAll('button');
    for (var i=0; i<gameBtn.length; i++) {
        gameBtn[i].onclick = function () {
            var gameBtnData = this.dataset.game;
            createCards(gameBtnData,imgArray);
            shuffleArray(imgArray);
            createImg(imgArray);
            var card1 = undefined;
            var card = undefined;
            var count= 0;
            var tableCell = document.querySelectorAll('section');
            for (var i=0; i<tableCell.length;i++) {
                tableCell[i].onclick = function () {
                    if (this.className === "hidden") {
                        if (card1 === undefined) {
                            card1 = this;
                            showCards(card1);
                        } else {
                            card2 = this;
                            showCards(card2);
                            if (card1.dataset.name === card2.dataset.name) {
                                card1 = undefined;
                                card2 = undefined;
                                count++;
                                document.getElementById('numcount').innerHTML ='Score:'+count;

                            } else {
                                    card1 = hidePiecs(card1);
                                    card2 = hidePiecs(card2);
                                count--;

                                if (count < 0) {
                                    count = 0;
                                    document.getElementById('numcount').innerHTML ='Score:'+ 0;
                                } else {
                                    document.getElementById('numcount').innerHTML ='Score:'+ count;
                                }
                            }
                        }

                    } else alert("Please click on an empty card");

                };

            }
        }
    }

    var buttonClock = document.getElementById('clock_game');
    var time = document.getElementById('timer');

    buttonClock.onclick = function () {
        time.style.display = "inline-block";
        timer(60, function (s) {
            time.innerText = s + ' time remaining';
        }, function () {
            time.innerText = 'Time is up!';
            alert("Time is over!");
            location.reload();
        });
    };

});

