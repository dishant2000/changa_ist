import React,{useEffect} from 'react'
import '../css/board.css'
import Squares from './squares'
import Piece from '../../model/piecesModel.js'

function Board() {

    
    useEffect(()=>{
        let pq = new Piece(1,"red",0,0);
        Piece.iniComp(pq);
        let chu = document.querySelector(".test-w");
        chu.appendChild(pq.domCom); 
    },[])
    return (
        <div className="board-wrapper">
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares enableGoti/>
                <Squares />
                <Squares />
            </div>
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares />
                <Squares />
                <Squares />
            </div>
            <div className="board-row">
                <Squares enableGoti/>
                <Squares />
                <Squares enableGoti/>
                <Squares />
                <Squares enableGoti/>
            </div>
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares />
                <Squares />
                <Squares />
            </div>
            <div className="board-row">
                <Squares />
                <Squares />
                <Squares enableGoti/>
                <Squares />
                <Squares />
            </div>
            <div className = "test-w">
            </div>
        </div>
    )
}

export default Board
