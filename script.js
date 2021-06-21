"use strict";
// 1. declare the universal variable

// this is the money variable
let money1 = Number(document.querySelector(".money1").textContent); //money of player 1
let money2 = Number(document.querySelector(".money2").textContent); //money of player 2
let money3 = Number(document.querySelector(".money3").textContent); //money of player 3
let money4 = Number(document.querySelector(".money4").textContent); //money of player 4
let player1 = 1;
let player2 = 1;
let player3 = 1;
let player4 = 1;

// this is the bet variable
// let bet1 = document.querySelector(".bet1").value; //bet of player 1
// let bet2 = document.querySelector(".bet2").value; //bet of player 2
// let bet3 = document.querySelector(".bet3").value; //bet of player 3
// let bet4 = document.querySelector(".bet4").value; //bet of player 4

//game state
let playing = true; // while true play the game
let counter = 4;
// count variable are used to count how many players are still eligible to play the game
// player 1 starting condition

// player 2 starting condition

// player 3 starting condition

// player 4 starting condition

// console.log(counter) // use this to test how many player are playing

// 2. check if player have money else they will lose
// 3. check if more than 2players have money else the player left will be declared as the winner -END GAME
// while(playing){ //while playing execute this block of code

// console.log("pogi si ronald");
// 4. check if all player has choose a different color else the dice wont roll
// console.log("gumagana"); // use this to check is the condition for each player having different dice are working
// 5. roll the dice
// this is the command use to roll the dice
document.querySelector(".btnRoll").addEventListener("click", function () {
  let bet1 = Number(document.querySelector(".bet1").value); //bet of player 1
  let bet2 = Number(document.querySelector(".bet2").value); //bet of player 2
  let bet3 = Number(document.querySelector(".bet3").value); //bet of player 3
  let bet4 = Number(document.querySelector(".bet4").value); //bet of player 4
  if (counter >= 2) {
    if (
      bet1 !== bet2 &&
      bet1 !== bet3 &&
      bet1 !== bet4 &&
      bet2 !== bet3 &&
      bet2 !== bet4 &&
      bet4 !== bet3
    ) {
      let roll = Math.trunc(Math.random() * 6 + 1);

      console.log(roll);
      document.querySelector(".picture").src = `color--${roll}.png`;

      // 5.1 --player 1 (if dice = player 1, then other player money -1 then add 3 to player 1)
      if (roll === bet1) {
        if (money1 > 0) {
          if (money2 > 0) {
            let newMoney2 = (document.querySelector(".money2").textContent =
              money2 - 1);
            money2 = newMoney2;
          }
          if (money3 > 0) {
            let newMoney3 = (document.querySelector(".money3").textContent =
              money3 - 1);
            money3 = newMoney3;
          }
          if (money4 > 0) {
            let newMoney4 = (document.querySelector(".money4").textContent =
              money4 - 1);
            money4 = newMoney4;
          }
          let newMoney1 = (document.querySelector(".money1").textContent =
            money1 + player2 + player3 + player4);
          money1 = newMoney1;
          document.querySelector(".winnerText").textContent =
            "Player 1 wins the round";
        }
        // 5.2 --player 2 (if dice = player 2, then other player money -1 then add 3 to player 2)
      } else if (roll === bet2) {
        if (money2 > 0) {
          if (money1 > 0) {
            let newMoney1 = (document.querySelector(".money1").textContent =
              money1 - 1);
            money1 = newMoney1;
          }
          if (money3 > 0) {
            let newMoney3 = (document.querySelector(".money3").textContent =
              money3 - 1);
            money3 = newMoney3;
          }
          if (money4 > 0) {
            let newMoney4 = (document.querySelector(".money4").textContent =
              money4 - 1);
            money4 = newMoney4;
          }
          let newMoney2 = (document.querySelector(".money2").textContent =
            money2 + player1 + player3 + player4);
          money2 = newMoney2;
          document.querySelector(".winnerText").textContent =
            "Player 2 wins the round";
        }

        // 5.3 --player 1 (if dice = player 1, then other player money -1 then add 3 to player 3)
      } else if (roll === bet3) {
        if (money3 > 0) {
          if (money1 > 0) {
            let newMoney1 = (document.querySelector(".money1").textContent =
              money1 - 1);
            money1 = newMoney1;
          }
          if (money2 > 0) {
            let newMoney2 = (document.querySelector(".money2").textContent =
              money2 - 1);
            money2 = newMoney2;
          }
          if (money4 > 0) {
            let newMoney4 = (document.querySelector(".money4").textContent =
              money4 - 1);
            money4 = newMoney4;
          }
          let newMoney3 = (document.querySelector(".money3").textContent =
            money3 + +player2 + player1 + player4);
          money3 = newMoney3;
          document.querySelector(".winnerText").textContent =
            "Player 3 wins the round";
        }

        // 5.4 --player 1 (if dice = player 1, then other player money -1 then add 3 to player 2)
      } else if (roll === bet4) {
        if (money4 > 0) {
          if (money1 > 0) {
            let newMoney1 = (document.querySelector(".money1").textContent =
              money1 - 1);
            money1 = newMoney1;
          }
          if (money2 > 0) {
            let newMoney2 = (document.querySelector(".money2").textContent =
              money2 - 1);
            money2 = newMoney2;
          }
          if (money3 > 0) {
            let newMoney3 = (document.querySelector(".money3").textContent =
              money3 - 1);
            money3 = newMoney3;
          }
          let newMoney4 = (document.querySelector(".money4").textContent =
            money4 + +player2 + player3 + player1);
          money4 = newMoney4;
          document.querySelector(".winnerText").textContent =
            "Player 3 wins the round";
        }
      } else {
        document.querySelector(".winnerText").textContent =
          "No one wins the round please try again";
      }
    } else {
      document.querySelector(".winnerText").textContent =
        "Same guess are not allowed";
    }

    // losing condition
    if (player1 > 0) {
      if (money1 <= 0) {
        document.querySelector(".player1").textContent = "YOU LOSE";
        player1 = player1 - 1;
        counter = counter - 1;
        console.log(counter, "money1");
      }
    }

    if (player2 > 0) {
      if (money2 <= 0) {
        document.querySelector(".player2").textContent = "YOU LOSE";
        player2 = player2 - 1;
        counter = counter - 1;
        console.log(counter, "money2");
      }
    }
    if (player3 > 0) {
      if (money3 <= 0) {
        document.querySelector(".player3").textContent = "YOU LOSE";
        player3 = player3 - 1;
        counter = counter - 1;
        console.log(counter, "money3");
      }
    }
    if (player4 > 0) {
      if (money4 <= 0) {
        document.querySelector(".player4").textContent = "YOU LOSE";
        player4 = player4 - 1;
        counter = counter - 1;
        console.log(counter, "money4");
      }
    }
  } else {
    if (money1 > money2 && money1 > money3 && money1 > money4) {
      document.querySelector(".winnerText").textContent = "Player 1 Wins";
    } else if (money2 > money1 && money2 > money3 && money2 > money4) {
      document.querySelector(".winnerText").textContent = "Player 2 Wins";
    } else if (money3 > money1 && money3 > money2 && money3 > money4) {
      document.querySelector(".winnerText").textContent = "Player 3 Wins";
    } else if (money4 > money1 && money4 > money2 && money4 > money3) {
      document.querySelector(".winnerText").textContent = "Player 4 Wins";
    }
  }
});

// }

// this is the reset button
document.querySelector(".btnNew").addEventListener("click", function () {
  console.log("nagana ang reset button");
  document.querySelector(".player1").textContent = "Player 1";
  document.querySelector(".player2").textContent = "Player 2";
  document.querySelector(".player3").textContent = "Player 3";
  document.querySelector(".player4").textContent = "Player 4";
  money1 = document.querySelector(".money1").textContent = 5;
  money2 = document.querySelector(".money2").textContent = 5;
  money3 = document.querySelector(".money3").textContent = 5;
  money4 = document.querySelector(".money4").textContent = 5;
  player1 = 1;
  player2 = 1;
  player3 = 1;
  player4 = 1;
  document.querySelector(".winnerText").textContent = "----------------";
  document.querySelector(".picture").src = "";
  counter = 4;
});

// AFTER ADDING THE MONEY GO BACK TO STEP 1

// Lagyan ng lose function
// winner text
// fix bugs
