import React, { useEffect, useState } from "react"

const TicTacToe = (props) => {
    const { ticTacToe, increment } = props;
    const [newPlace, setnewPlace] = useState([])

    useEffect(() => {
        setnewPlace([...props.ticTacToe]);
    }, [])
    const clickHandler = (val, id) => {
        let valId = document.getElementById(id);
        valId.innerHTML = "<span style='color:blue'}}>O</span>";
        if (winCheck("O")) {
            alert("User Wins")
            setnewPlace(ticTacToe)
            ticTacToe.map((val) => {
                document.getElementById(val).innerText = ""
            })
            increment("score2")
            return;
        }
        if (newPlace.length === 0) {
            alert("Match Drawn")
            ticTacToe.map((val) => {
                document.getElementById(val).innerText = ""
            })
            setnewPlace(ticTacToe)
            return;
        }
        let arrPop = newPlace.filter((val) => val != id)
        let newVal = arrPop[Math.floor(Math.random() * arrPop.length)]
        arrPop = newPlace.filter((val) => val != newVal && val != id)
        setnewPlace(arrPop)
        let newValId = document.getElementById(newVal)
        if (newValId) newValId.innerHTML = "<span style='color:red'}}>X</span>";
        if (winCheck("X")) {
            alert("Computer Wins")
            setnewPlace(ticTacToe)
            ticTacToe.map((val) => {
                document.getElementById(val).innerText = ""
            })
            increment("score1")
            return;
        }
        if (arrPop.length === 0) {
            alert("Match Drawn")
            ticTacToe.map((val) => {
                document.getElementById(val).innerText = ""
            })
            setnewPlace(ticTacToe)
            return;
        }
    }

    const resetHandler = () => {
        ticTacToe.map((val) => {
            document.getElementById(val).innerText = ""
        })
        increment("reset")
        setnewPlace(ticTacToe)
    }

    const winCheck = (val) => {
        if (document.getElementById("1").innerText === val && document.getElementById("2").innerText === val && document.getElementById("3").innerText === val) {
            return true
        }
        else if (document.getElementById("1").innerText === val && document.getElementById("5").innerText === val && document.getElementById("9").innerText === val) {
            return true;
        }
        else if (document.getElementById("1").innerText === val && document.getElementById("4").innerText === val && document.getElementById("7").innerText === val) {
            return true;
        }
        else if (document.getElementById("2").innerText === val && document.getElementById("5").innerText === val && document.getElementById("8").innerText === val) {
            return true;
        }
        else if (document.getElementById("3").innerText === val && document.getElementById("5").innerText === val && document.getElementById("7").innerText === val) {
            return true;
        }
        else if (document.getElementById("3").innerText === val && document.getElementById("6").innerText === val && document.getElementById("9").innerText === val) {
            return true;
        }
        else if (document.getElementById("4").innerText === val && document.getElementById("5").innerText === val && document.getElementById("6").innerText === val) {
            return true;
        }
        else if (document.getElementById("7").innerText === val && document.getElementById("8").innerText === val && document.getElementById("9").innerText === val) {
            return true;
        }
        return false;
    }

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
                {ticTacToe.map((val) => {
                    return (
                        <>
                            <div id={val} style={{ backgroundColor: "white", margin: "20px", width: "100px", height: "100px", textAlign: "center", fontSize: "42px", display: "grid", alignItems: "center" }} onClick={(e) => clickHandler(e, val)}></div>
                        </>
                    )
                })}
            </div>
            <button onClick={() => resetHandler()} style={{ cursor: "pointer", marginTop: "20px", width: "auto", height: "50px", backgroundColor: "blue", fontWeight: "bolder", fontSize: "28px", color: "white", border: "none", borderRadius: "20px", padding: "0px 20px" }}>RESET</button>
        </>
    )
}

export default TicTacToe;