import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function DatePicker() {
  const [selected, setSelected] = React.useState(new Date());

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "P")}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      // className="hidden"
    />
  );
}
