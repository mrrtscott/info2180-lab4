window.onload = function() {
    var n = document.getElementById("board"),
        t = document.getElementsByClassName("btn")[0],
        e = n.children,
        o = !0,
        s = ["", "", "", "", "", "", "", "", ""];
    for (let n = 0; n < e.length; n++) e[n].classList.add("square"), e[n].onclick = function() {
        i(e[n], n)
    }, e[n].onmouseover = function() {
        e[n].classList.add("hover")
    }, e[n].onmouseout = function() {
        e[n].classList.remove("hover")
    };

    function i(n, t) {
        if ("" === s[t])
            if (!0 === o) {
                if (n.innerHTML = "X", n.classList.add("X"), s[t] = "X", o = !1, function() {
                        for (let n = 0; n < 3; n++)
                            if ("X" === s[n] && "X" === s[n + 3] && "X" === s[n + 6]) return !0;
                        for (let n = 0; n < 7; n += 3)
                            if ("X" === s[n] && "X" === s[n + 1] && "X" === s[n + 2]) return !0;
                        if ("X" === s[0] && "X" === s[4] && "X" === s[8]) return !0;
                        if ("X" === s[2] && "X" === s[4] && "X" === s[6]) return !0;
                        return !1
                    }()) {
                    document.getElementById("status").innerHTML = "Congratulations! X is the Winner!", document.getElementById("status").classList.add("you-won");
                    for (let n = 0; n < e.length; n++) e[n].onclick = function() {}
                }
            } else if (0 == o && (n.innerHTML = "O", n.classList.add("O"), s[t] = "O", o = !0, function() {
                for (let n = 0; n < 3; n++)
                    if ("O" === s[n] && "O" === s[n + 3] && "O" === s[n + 6]) return !0;
                for (let n = 0; n < 7; n += 3)
                    if ("O" === s[n] && "O" === s[n + 1] && "O" === s[n + 2]) return !0;
                if ("O" === s[0] && "O" === s[4] && "O" === s[8]) return !0;
                if ("O" === s[2] && "O" === s[4] && "O" === s[6]) return !0;
                return !1
            }())) {
            document.getElementById("status").innerHTML = "Congratulations! O is the Winner!", document.getElementById("status").classList.add("you-won");
            for (let n = 0; n < e.length; n++) e[n].onclick = function() {}
        }
    }
    t.onclick = function() {
        ! function() {
            for (let n = 0; n < e.length; n++) e[n].innerHTML = "", e[n].classList.remove("X"), e[n].classList.remove("O"), e[n].onclick = function() {
                i(e[n], n)
            }, s[n] = "";
            document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.", document.getElementById("status").classList.remove("you-won")
        }()
    }
};