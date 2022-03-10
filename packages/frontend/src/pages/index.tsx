import React from "react";
import { DatePicker, message, Alert } from "antd";
function Home() {
  const [date, setDate] = React.useState<any>(null);
  const handleChange = (value: any) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );

    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>
      <Alert
        message="Selected Date"
        description={date ? date.format("YYYY-MM-DD") : "None"}
      />
    </div>
  );
}

export default Home;
