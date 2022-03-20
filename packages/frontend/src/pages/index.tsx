import React from "react";
import { message, Alert } from "antd";
import axios from "axios";

function Home() {
  const [article, setArticle] = React.useState([]);
  const handleChange = async () => {
    const res = await axios.get("http://localhost:8001/articles");
    // setArticle(res);
    console.log(res);
  };

  React.useEffect(() => {
    handleChange();
  }, []);
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <Alert message="Selected Date" />
    </div>
  );
}

export default Home;
