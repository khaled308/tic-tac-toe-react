import Square from "./Square"
import data from './data'
import {useState , useEffect} from 'react'

function Game() {
    const [text,setText] = useState(['','','','','','','','',''])
    const [oPlayer,setOPlayer] = useState([])
    const [xPlayer,setXPlayer] = useState([])
    const [turn,setTurn] = useState(true)
    let newText = [...text]
    function handelClick(e){
        if(e.target.textContent) return
        const id = +e.target.getAttribute('data-id')
        if(turn){
            setOPlayer([...oPlayer,id].sort())
            newText[id - 1] = 'O'
            setTurn(false)
        }
        else{
            setXPlayer([...xPlayer,id].sort())
            newText[id - 1] = 'X'
            setTurn(true)
        }
        setText(newText)
    }

    useEffect(()=>{
        if(oPlayer.length + xPlayer.length >= 9){
            setOPlayer([])
            setXPlayer([])
            alert('no one win; play again')
            setText(['','','','','','','','',''])
        }
        if(whoWin(oPlayer)){
            alert('Player O win')
            setText(['','','','','','','','',''])
            setOPlayer([])
            setXPlayer([])
        }
        if(whoWin(xPlayer)){
            alert('Player X win')
            setText(['','','','','','','','',''])
            setOPlayer([])
            setXPlayer([])
        }
        console.log(oPlayer,xPlayer)
    },[oPlayer,xPlayer])

    function whoWin(player){
        for(let el of data){
            let index = 0
            for(let item of player){
                if(el[index] === item) index += 1
                
                if(index > 2) return true
            }
        }
        return false
    }

    return (
        <div className="game">
            <Square id={1} text={text[0]} handelClick={handelClick} />
            <Square id={2} text={text[1]} handelClick={handelClick} />
            <Square id={3} text={text[2]} handelClick={handelClick} />
            <Square id={4} text={text[3]} handelClick={handelClick} />
            <Square id={5} text={text[4]} handelClick={handelClick} />
            <Square id={6} text={text[5]} handelClick={handelClick} />
            <Square id={7} text={text[6]} handelClick={handelClick} />
            <Square id={8} text={text[7]} handelClick={handelClick} />
            <Square id={9} text={text[8]} handelClick={handelClick} />
        </div>
    )
}

export default Game