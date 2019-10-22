window.onload = function() {

    var system_Status = ["", "", "", "", "", "", "", "", ""];
    var system_Plane = document.getElementById("board");
    var primary_Button = document.getElementsByClassName("btn")[0];
    var system_sub = system_Plane.system_sub;
    var system_system_system_Flag = true;




    for (let i = 0; i < system_sub.length; i++) {
        system_sub[i].classList.add("square");
        system_sub[i].onclick = function() { whenClicked(system_sub[i], i) };
        system_sub[i].onmouseover = function() { whenMouseIsOver(system_sub[i]) };
        system_sub[i].onmouseout = function() { whenMouseIsNotOver(system_sub[i]) };
    }

    primary_Button.onclick = function() { newGame() };

    function whenClicked(child, index) {
        if (system_Status[index] === "") {

            if (system_system_system_Flag === true) {
                child.innerHTML = "X";
                child.classList.add("X");
                system_Status[index] = "X";
                system_system_system_Flag = false;
                if (checkWinnerX()) {
                    document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                    document.getElementById("status").classList.add("you-won");
                    for (let i = 0; i < system_sub.length; i++) {
                        system_sub[i].onclick = function() {};
                    }
                }
            } else if (system_system_system_Flag == false) {
                child.innerHTML = "O";
                child.classList.add("O");
                system_Status[index] = "O";
                system_system_system_Flag = true;
                if (checkWinnerO()) {
                    document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                    document.getElementById("status").classList.add("you-won");
                    for (let i = 0; i < system_sub.length; i++) {
                        system_sub[i].onclick = function() {};
                    }
                }
            }

        }

    }





};