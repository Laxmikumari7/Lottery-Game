import { useState } from "react";
import "./Lottery.css"
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket.jsx";
export default function Lottery({ n = 3, WinningSum = 15 }) {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1> Lottery Game !</h1>
            <Ticket ticket={ticket} />

            <button onClick={buyTicket}> buy new ticket </button>
            <h3> {isWinning && "congratulations you won !"}</h3>
        </div >
    )
}