import { useState } from "react";

export default function TicketSelector({ tickets }) {
  const [data, setData] = useState(tickets);

  const handleClick = (id) => {
    setData((prev) =>
      prev.map((ticket) =>
        ticket.id === id && ticket.stock > 0
          ? { ...ticket, stock: ticket.stock - 1 }
          : ticket
      )
    );
  };

  return (
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      
      {data.map((ticket) => (
        <div
          key={ticket.id}
          className="rounded-2xl shadow-lg bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-6 flex flex-col gap-4"
        >
          <div>
            <h3 className="text-xl font-bold tracking-tight uppercase">
              {ticket.type}
            </h3>
            <p className="text-sm text-neutral-400">Nike Training Event</p>
          </div>

          <div className="flex items-center justify-between">
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${
                ticket.stock === 0
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
              }`}
            >
              {ticket.stock === 0 ? "Sold Out" : `${ticket.stock} spots left`}
            </span>

            <button
              disabled={ticket.stock === 0}
              onClick={() => handleClick(ticket.id)}
              className="rounded-full bg-white text-black px-5 py-2 font-semibold hover:bg-neutral-200 disabled:bg-neutral-600 disabled:text-neutral-400"
            >
              Reserve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
