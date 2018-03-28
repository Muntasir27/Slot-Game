/**
 * @file main.js
 *
 * @author Muhammad Kaudeer - 100656085
 * @date 2018-02-05
 *
 * @version 1.0
 * @copyright Copyright © 2017 DC. All rights reserved.
 *
 * @description Slot game
 */



 (function(){

    var submarine = document.getElementById('Submarine');
    var bigBubbles01 = document.getElementById('bubble01');
    var bigBubbles02 = document.getElementById('bubble02');
    var bigBubbles03 = document.getElementById('bubble03');
    var bigBubbles04 = document.getElementById('bubble04');
    var myGame = document.getElementById('slotPage');
    var myLogo = document.getElementById('logo');

    var slot1= document.getElementById("slot01");
    var slot2= document.getElementById("slot02");
    var slot3 = document.getElementById("slot03");

    var symbol = [
            {
                // redCrabe
                image: "./assets/img/redCrabe.svg",
                type: "crabe",
                color: "red"
            },
            {
                // redOctopus
                image: "./assets/img/redOctopus.svg",
                type: "octopus",
                color: "red"
            },
            {
                // redStarfish
                image: "./assets/img/redStarfish.svg",
                type: "starfish",
                color: "red"
            },
            {
                // greenCrabe
                image: "./assets/img/greenCrabe.svg",
                type: "crabe",
                color: "green"
            },
            {
                // greenOctopus
                image: "./assets/img/greenOctopus.svg",
                type: "octopus",
                color: "green"
            },
            {
                // greenStarfish
                image: "./assets/img/greenStarfish.svg",
                type: "starfish",
                color: "green"
            },
            {
                // blueCrabe
                image: "./assets/img/blueCrabe.svg",
                type: "crabe",
                color: "blue"
            },
            {
                // blueOctopus
                image: "./assets/img/blueOctopus.svg",
                type: "octopus",
                color: "blue"
            },
            {
                // blueStarfish
                image: "./assets/img/blueStarfish.svg",
                type: "starfish",
                color: "blue"
            },
            {
                // Diamond
                image: "./assets/img/diamond.svg",
                type: "fish",
                color: "diamond"
            }
    ];

    // Creating constants for the payouts
	const oneDiamond = 1;
    const twoDiamonds = 25;
    const threeDiamonds = 100;
    const SAME_COLOR_TYPE = 10;
    const SAME_COLOR = 2;
    const SAME_TYPE = 2;

    var cycleImg;

    var cashOutSound = document.getElementById("cashSound");
    var winSound = document.getElementById("winSound");
    var activate = document.getElementById('activationSound');
    var roll = document.getElementById('rollSound');
    var gameOver = document.getElementById('creditOver');


 	window.onload = function (){


        t1 = new TimelineMax({repeat: -1});

            t1.to(submarine, 10, {
                ease: Power0.easeNone, x: -1400
            })

            t2 = new TimelineMax({repeat: -1});

            t2.to(bigBubbles02, 6, {
                ease: Power0.easeNone, y: -650, opacity :1,
            })
            t2.to(bigBubbles01, 6, {
                ease: Power0.easeNone, y: -20, opacity :1,
            })

            t4 = new TimelineMax({repeat: -1});

            t4.to(bigBubbles03, 4, {
                ease: Power0.easeNone, y: -650, opacity :1,
            })
            t4.to(bigBubbles04, 4, {
                ease: Power0.easeNone, y: -20, opacity :1,
            })

            t3 =new TimelineMax({repeat: 0});
            t3.to(myLogo, 2, {opacity :1,});
            t3.to(myLogo, 1, {
                ease: Power0.easeNone, y: 0, opacity :0,
            })
            t3.to(myGame, 1, {
               ease: Power0.easeNone, y: 20,opacity:1
            }, );







        // alert(localStorage.getItem("credits"))

        if ((localStorage.getItem("credits")) > 0) {
            document.getElementById('creditsNum').value = localStorage.getItem("credits");
            slot1.src = localStorage.getItem("slotOne");
            slot2.src = localStorage.getItem("slotTwo");
            slot3.src = localStorage.getItem("slotThree");
            document.getElementById('message').innerHTML = localStorage.getItem("myMessage");
            document.querySelector('input[name="Betting"]:checked').value = localStorage.getItem("myRadio");
            document.getElementById('playBtn').onclick = spin;
            document.getElementById('cashOut').onclick = cash;

            // alert(localStorage.getItem("myRadio"))
        } else {
            //Declaring the ID dropDownLIst and prevent the play button to function before spin() function
     		document.getElementById('dropDownList').onchange = startPlay;
        }



 	};

 		function startPlay(){

            activate.play();

 			// credit purchase drop down deactivated once credits are in play
 			document.getElementById('dropDownList').onchange = null;

 			document.getElementById("message").innerHTML = "Good Luck!!!";

 			document.getElementById('playBtn').onclick = spin;


            document.getElementById('cashOut').onclick = cash;

 			var creditScore = document.getElementById('dropDownList').value;

 			document.getElementById("creditsNum").value = creditScore;



            document.getElementById("playBtn").disabled = false;
            document.getElementById("cashOut").disabled = false;


 		};

 		function spin(){

            roll.play();



            // updateCredit();
            var creditScore = document.getElementById("creditsNum").value;





            var newCreditScore = document.getElementById('creditsNum').value;
            var bettingValue = document.querySelector('input[name="Betting"]:checked').value;

            document.getElementById("creditsNum").value = newCreditScore - bettingValue;

            cycleImg = setInterval(imgPick, 100);


            setTimeout(function(){



                clearInterval(cycleImg);

                document.getElementById("playBtn").disabled = false;
                document.getElementById("cashOut").disabled = false;

                var randomNum01 = Math.floor(Math.random() * 19) +1 ;
                var randomNum02 = Math.floor(Math.random() * 19) +1 ;
                var randomNum03 = Math.floor(Math.random() * 19) +1 ;

                // Randomizing the gems in slot01
                if ((randomNum01 === 1) || (randomNum01 === 2)) {
                    slot1.src = symbol[0].image;
                    pick01 = 0;
                } else if ((randomNum01 === 3) || (randomNum01 === 4)) {
                    slot1.src = symbol[1].image;
                    pick01 = 1;
                }  else if ((randomNum01 === 5) || (randomNum01 === 6)) {
                    slot1.src = symbol[2].image;
                    pick01 = 2;
                } else if ((randomNum01 === 7) || (randomNum01 === 8)) {
                    slot1.src = symbol[3].image;
                    pick01 = 3;
                } else if ((randomNum01 === 9) || (randomNum01 === 10)) {
                    slot1.src = symbol[4].image;
                    pick01 = 4;
                } else if ((randomNum01 === 11) || (randomNum01 === 12)) {
                    slot1.src = symbol[5].image;
                    pick01 = 5;
                } else if ((randomNum01 === 13) || (randomNum01 === 14)) {
                    slot1.src = symbol[6].image;
                    pick01 = 6;
                } else if ((randomNum01 === 15) || (randomNum01 === 16)) {
                    slot1.src = symbol[7].image;
                    pick01 = 7;
                } else if ((randomNum01 === 17) || (randomNum01 === 18)) {
                    slot1.src = symbol[8].image;
                    pick01 = 8;
                } else if (randomNum01 === 19) {
                    slot1.src = symbol[9].image;
                    pick01 = 9;
                }

                if ((randomNum02 === 1) || (randomNum02 === 2)) {
                    slot2.src = symbol[0].image;
                    pick02 = 0;
                } else if ((randomNum02 === 3) || (randomNum02 === 4)) {
                    slot2.src = symbol[1].image;
                    pick02 = 1;
                }  else if ((randomNum02 === 5) || (randomNum02 === 6)) {
                    slot2.src = symbol[2].image;
                    pick02 = 2;
                } else if ((randomNum02 === 7) || (randomNum02 === 8)) {
                    slot2.src = symbol[3].image;
                    pick02 = 3;
                } else if ((randomNum02 === 9) || (randomNum02 === 10)) {
                    slot2.src = symbol[4].image;
                    pick02 = 4;
                } else if ((randomNum02 === 11) || (randomNum02 === 12)) {
                    slot2.src = symbol[5].image;
                    pick02 = 5;
                } else if ((randomNum02 === 13) || (randomNum02 === 14)) {
                    slot2.src = symbol[6].image;
                    pick02 = 6;
                } else if ((randomNum02 === 15) || (randomNum02 === 16)) {
                    slot2.src = symbol[7].image;
                    pick02 = 7;
                } else if ((randomNum02 === 17) || (randomNum02 === 18)) {
                    slot2.src = symbol[8].image;
                    pick02 = 8;
                } else if (randomNum02 === 19) {
                    slot2.src = symbol[9].image;
                    pick02 = 9;
                }

                if ((randomNum03 === 1) || (randomNum03 === 2)) {
                    slot3.src = symbol[0].image;
                    pick03 = 0;
                } else if ((randomNum03 === 3) || (randomNum03 === 4)) {
                    slot3.src = symbol[1].image;
                    pick03 = 1;
                }  else if ((randomNum03 === 5) || (randomNum03 === 6)) {
                    slot3.src = symbol[2].image;
                    pick03 = 2;
                } else if ((randomNum03 === 7) || (randomNum03 === 8)) {
                    slot3.src = symbol[3].image;
                    pick03 = 3;
                } else if ((randomNum03 === 9) || (randomNum03 === 10)) {
                    slot3.src = symbol[4].image;
                    pick03 = 4;
                } else if ((randomNum03 === 11) || (randomNum03 === 12)) {
                    slot3.src = symbol[5].image;
                    pick03 = 5;
                } else if ((randomNum03 === 13) || (randomNum03 === 14)) {
                    slot3.src = symbol[6].image;
                    pick03 = 6;
                } else if ((randomNum03 === 15) || (randomNum03 === 16)) {
                    slot3.src = symbol[7].image;
                    pick03 = 7;
                } else if ((randomNum03 === 17) || (randomNum03 === 18)) {
                    slot3.src = symbol[8].image;
                    pick03 = 8;
                } else if (randomNum03 === 19) {
                    slot3.src = symbol[9].image;
                    pick03 = 9;
                }

                var newScore = document.getElementById('creditsNum').value

                // alert(newScore)

                if( newScore <= 0){
                    document.getElementById("message").innerHTML = "Buy Credits To Start Playing!!!!";

                    var dropDown = document.getElementById("dropDownList");
                    dropDown.selectedIndex = 0;
                    document.getElementById('dropDownList').onchange = startPlay;
                    slot1.src = "./assets/img/blackSquare.svg" ;
                    slot2.src = "./assets/img/blackSquare.svg" ;
                    slot3.src = "./assets/img/blackSquare.svg" ;

                    document.getElementById("playBtn").disabled = true;
                    document.getElementById("cashOut").disabled = true;
                    document.getElementById("bet01").checked = true;
                    document.getElementById('creditsNum').value = 0;

                    document.getElementById('dropDownList').onchange = startPlay;

                    gameOver.play();
                    // cash();

                } else {

                    if((randomNum01 === 19) && (randomNum02 === 19) && (randomNum03 === 19)) {
                        // 3 Diamond = 100
                        winSound.play();
                        document.getElementById("message").innerHTML = "YIPPEE! Three Fishes pay " + " " + threeDiamonds * bettingValue + " on a bet of" + " " + bettingValue ;
                        document.getElementById("creditsNum").value = parseInt(threeDiamonds * bettingValue) + parseInt(newCreditScore);
                    } else if ( (randomNum01 === 19 && randomNum02 === 19) || (randomNum01 === 19 && randomNum03 === 19) || (randomNum02 === 19 && randomNum03 === 19) ){
                        // 2 Diamond = 25
                        winSound.play();
                        document.getElementById("message").innerHTML = "Nice!!! Two Fishes pay " + " " + twoDiamonds * bettingValue + " on a bet of" + " " + bettingValue ;
                    	document.getElementById("creditsNum").value = parseInt(twoDiamonds * bettingValue) + parseInt(newCreditScore);
                    } else if((randomNum01 === 19) || (randomNum02 === 19) || (randomNum03 === 19)) {
                        // 1 Diamond = 1
                        winSound.play();
                    	document.getElementById("message").innerHTML = "One Fish pays " + " " + oneDiamond * bettingValue + " on a bet of" + " " + bettingValue ;
                    	document.getElementById("creditsNum").value = parseInt(oneDiamond * bettingValue) + parseInt(newCreditScore);
                    } else if(((symbol[pick01].type === symbol[pick02].type) &&  (symbol[pick02].type === symbol[pick03].type)) && ((symbol[pick01].color === symbol[pick02].color) &&  (symbol[pick02].color === symbol[pick03].color))){
                        // shape and color = 10
                        winSound.play();
                    	document.getElementById("message").innerHTML = "Same color and type pay " + " " + SAME_COLOR_TYPE * bettingValue + " on a bet of" + " " + bettingValue ;
                    	document.getElementById("creditsNum").value = parseInt(SAME_COLOR_TYPE * bettingValue) + parseInt(newCreditScore);
                    } else if((symbol[pick01].color === symbol[pick02].color) && (symbol[pick02].color === symbol[pick03].color)){
                        // color = 2
                        winSound.play();
                    	document.getElementById("message").innerHTML = "Same color pay " + " " + SAME_COLOR * bettingValue + " on a bet of" + " " + bettingValue ;
                    	document.getElementById("creditsNum").value = parseInt(SAME_COLOR * bettingValue) + parseInt(newCreditScore);
                    } else if((symbol[pick01].type === symbol[pick02].type) && (symbol[pick02].type === symbol[pick03].type)){
                        // type = 2
                        winSound.play();
                    	document.getElementById("message").innerHTML = "Same type pay " + " " + SAME_TYPE * bettingValue + " on a bet of" + " " + bettingValue ;
                    	document.getElementById("creditsNum").value = parseInt(SAME_TYPE * bettingValue) + parseInt(newCreditScore);
                    } else{
        				// if no combinations
        				document.getElementById("message").innerHTML = "Too bad. Loss of  " + bettingValue ;

        			};

                }

            }, 1000);




                var updatedCreditScore = document.getElementById('creditsNum').value;
                var myMsg = document.getElementById("message");

                var bettingValue = document.querySelector('input[name="Betting"]:checked').value;

                localStorage.setItem("credits", updatedCreditScore);
                localStorage.setItem("slotOne", slot1.src);
                localStorage.setItem("slotTwo", slot2.src);
                localStorage.setItem("slotThree", slot3.src);
                localStorage.setItem("myMessage", myMsg.innerHTML);
                localStorage.setItem("myRadio", bettingValue);

                // var radios = document.getElementsByName("Betting").value;

                if ( localStorage['bet3'] === "true" ) {
                    document.getElementById('bet03').checked = true;
                } else if ( localStorage['bet2'] === "true" ){
                    document.getElementById('bet02').checked = true;
                } else if ( localStorage['bet1'] === "true" ){
                    document.getElementById('bet01').checked = true;
                }

                // alert(bettingValue)


 		};

        function cash() {
            // alert(localStorage.getItem("credits"))
            localStorage.clear();
            document.getElementById("message").innerHTML = "Buy Credits To Start Playing!!!!";

            var dropDown = document.getElementById("dropDownList");
            dropDown.selectedIndex = 0;
            document.getElementById('dropDownList').onchange = startPlay;
            slot1.src = "./assets/img/blackSquare.svg" ;
            slot2.src = "./assets/img/blackSquare.svg" ;
            slot3.src = "./assets/img/blackSquare.svg" ;

            document.getElementById("playBtn").disabled = true;
            document.getElementById("cashOut").disabled = true;
            document.getElementById("bet01").checked = true;
            document.getElementById('creditsNum').value = 0;

            document.getElementById('dropDownList').onchange = startPlay;

            cashOutSound.play();
        }


        function imgPick(){

            document.getElementById("playBtn").disabled = true;
            document.getElementById("cashOut").disabled = true;



            var randomNum01 = Math.floor(Math.random() * 19) +1 ;
            var randomNum02 = Math.floor(Math.random() * 19) +1 ;
            var randomNum03 = Math.floor(Math.random() * 19) +1 ;



            // Randomizing the gems in slot01
            if ((randomNum01 === 1) || (randomNum01 === 2)) {
                slot1.src = symbol[0].image;
                pick01 = 0;
            } else if ((randomNum01 === 3) || (randomNum01 === 4)) {
                slot1.src = symbol[1].image;
                pick01 = 1;
            }  else if ((randomNum01 === 5) || (randomNum01 === 6)) {
                slot1.src = symbol[2].image;
                pick01 = 2;
            } else if ((randomNum01 === 7) || (randomNum01 === 8)) {
                slot1.src = symbol[3].image;
                pick01 = 3;
            } else if ((randomNum01 === 9) || (randomNum01 === 10)) {
                slot1.src = symbol[4].image;
                pick01 = 4;
            } else if ((randomNum01 === 11) || (randomNum01 === 12)) {
                slot1.src = symbol[5].image;
                pick01 = 5;
            } else if ((randomNum01 === 13) || (randomNum01 === 14)) {
                slot1.src = symbol[6].image;
                pick01 = 6;
            } else if ((randomNum01 === 15) || (randomNum01 === 16)) {
                slot1.src = symbol[7].image;
                pick01 = 7;
            } else if ((randomNum01 === 17) || (randomNum01 === 18)) {
                slot1.src = symbol[8].image;
                pick01 = 8;
            } else if (randomNum01 === 19) {
                slot1.src = symbol[9].image;
                pick01 = 9;
            }

            if ((randomNum02 === 1) || (randomNum02 === 2)) {
                slot2.src = symbol[0].image;
                pick02 = 0;
            } else if ((randomNum02 === 3) || (randomNum02 === 4)) {
                slot2.src = symbol[1].image;
                pick02 = 1;
            }  else if ((randomNum02 === 5) || (randomNum02 === 6)) {
                slot2.src = symbol[2].image;
                pick02 = 2;
            } else if ((randomNum02 === 7) || (randomNum02 === 8)) {
                slot2.src = symbol[3].image;
                pick02 = 3;
            } else if ((randomNum02 === 9) || (randomNum02 === 10)) {
                slot2.src = symbol[4].image;
                pick02 = 4;
            } else if ((randomNum02 === 11) || (randomNum02 === 12)) {
                slot2.src = symbol[5].image;
                pick02 = 5;
            } else if ((randomNum02 === 13) || (randomNum02 === 14)) {
                slot2.src = symbol[6].image;
                pick02 = 6;
            } else if ((randomNum02 === 15) || (randomNum02 === 16)) {
                slot2.src = symbol[7].image;
                pick02 = 7;
            } else if ((randomNum02 === 17) || (randomNum02 === 18)) {
                slot2.src = symbol[8].image;
                pick02 = 8;
            } else if (randomNum02 === 19) {
                slot2.src = symbol[9].image;
                pick02 = 9;
            }

            if ((randomNum03 === 1) || (randomNum03 === 2)) {
                slot3.src = symbol[0].image;
                pick03 = 0;
            } else if ((randomNum03 === 3) || (randomNum03 === 4)) {
                slot3.src = symbol[1].image;
                pick03 = 1;
            }  else if ((randomNum03 === 5) || (randomNum03 === 6)) {
                slot3.src = symbol[2].image;
                pick03 = 2;
            } else if ((randomNum03 === 7) || (randomNum03 === 8)) {
                slot3.src = symbol[3].image;
                pick03 = 3;
            } else if ((randomNum03 === 9) || (randomNum03 === 10)) {
                slot3.src = symbol[4].image;
                pick03 = 4;
            } else if ((randomNum03 === 11) || (randomNum03 === 12)) {
                slot3.src = symbol[5].image;
                pick03 = 5;
            } else if ((randomNum03 === 13) || (randomNum03 === 14)) {
                slot3.src = symbol[6].image;
                pick03 = 6;
            } else if ((randomNum03 === 15) || (randomNum03 === 16)) {
                slot3.src = symbol[7].image;
                pick03 = 7;
            } else if ((randomNum03 === 17) || (randomNum03 === 18)) {
                slot3.src = symbol[8].image;
                pick03 = 8;
            } else if (randomNum03 === 19) {
                slot3.src = symbol[9].image;
                pick03 = 9;
            }


        }

        // if(creditScore <= 0){
        //     localStorage.clear();
        //     document.getElementById("message").innerHTML = "Buy Credits To Start Playing!!!!";
        //
        //     var dropDown = document.getElementById("dropDownList");
        //     dropDown.selectedIndex = 0;
        //     document.getElementById('dropDownList').onchange = startPlay;
        //     slot1.src = "./assets/img/blackSquare.svg" ;
        //     slot2.src = "./assets/img/blackSquare.svg" ;
        //     slot3.src = "./assets/img/blackSquare.svg" ;
        //
        //     document.getElementById("playBtn").disabled = true;
        //     document.getElementById("cashOut").disabled = true;
        //     document.getElementById("bet01").checked = true;
        //     document.getElementById('creditsNum').value = 0;
        // }

 }());
