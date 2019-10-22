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

    function whenMouseIsOver(child) {
        child.classList.add("hover");
    }

    function whenMouseIsNotOver(child) {
        child.classList.remove("hover");
    }

    function checkWinnerX() {
        for (let i = 0; i < 3; i++) {
            if (system_Status[i] === "X" && system_Status[i + 3] === "X" && system_Status[i + 6] === "X") {
                return true;
            }
        }

        for (let i = 0; i < 7; i += 3) {
            if (system_Status[i] === "X" && system_Status[i + 1] === "X" && system_Status[i + 2] === "X") {
                return true;
            }
        }

        if (system_Status[0] === "X" && system_Status[4] === "X" && system_Status[8] === "X") {
            return true;
        } else if (system_Status[2] === "X" && system_Status[4] === "X" && system_Status[6] === "X") {
            return true;
        }

        return false;

    }

    function checkWinnerO() {
        for (let i = 0; i < 3; i++) {
            if (system_Status[i] === "O" && system_Status[i + 3] === "O" && system_Status[i + 6] === "O") {
                return true;
            }
        }

        for (let i = 0; i < 7; i += 3) {
            if (system_Status[i] === "O" && system_Status[i + 1] === "O" && system_Status[i + 2] === "O") {
                return true;
            }
        }

        if (system_Status[0] === "O" && system_Status[4] === "O" && system_Status[8] === "O") {
            return true;
        } else if (system_Status[2] === "O" && system_Status[4] === "O" && system_Status[6] === "O") {
            return true;
        }

        return false;
    }

    function newGame() {

        for (let i = 0; i < system_sub.length; i++) {
            system_sub[i].innerHTML = "";
            system_sub[i].classList.remove("X");
            system_sub[i].classList.remove("O");
            system_sub[i].onclick = function() { whenClicked(system_sub[i], i) };
            system_Status[i] = "";
        }
        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
    }



};