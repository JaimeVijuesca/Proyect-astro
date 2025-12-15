import { useState } from "react";

export default function TicketSelector({ tickets }) {
  const [data, setData] = useState(tickets);

  const handleClick = (id) => {
    setData((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, stock: ticket.stock - 1 } : ticket
      )
    );
  };

  return (
    <div className="flex flex-wrap gap-4 m-4">
      {data.map((ticket) => (
        <button
          key={ticket.id}
          disabled={ticket.stock === 0}
          onClick={() => handleClick(ticket.id)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors 
            ${ticket.stock === 0 ? "bg-red-300 text-red-600 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          {ticket.type} ({ticket.stock})
        </button>
      ))}
    </div>
  );
}
