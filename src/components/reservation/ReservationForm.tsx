import { useState } from "react";

export default function ReservationForm() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      date,
      people,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Réservation</h2>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="number"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />

      <button type="submit">
        Réserver
      </button>
    </form>
  );
}