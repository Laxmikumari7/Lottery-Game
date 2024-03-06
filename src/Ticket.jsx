import TicketNo from "./TicketNo.jsx";
import "./Ticket.css";
export default function Ticket({ ticket }) {
    return (
        <div className="ticket">
            {ticket.map((num, idx) => {
                return <TicketNo num={num} key={idx} />
            })}
        </div>
    )
}