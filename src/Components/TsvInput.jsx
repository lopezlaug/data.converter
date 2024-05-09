import React, { useState } from "react";

// Define a variable to store the JSON data
let localData = [];

function App() {
  const [tsvData, setTsvData] = useState("");

  const handleTsvData = (event) => {
    const tsv = event.target.value;
    setTsvData(tsv);
    // Convert TSV to JSON and store it in the localData variable
    localData = convertTsvToJson(tsv);
  };

  const convertTsvToJson = (tsv) => {
    const rows = tsv.split("\n").map((row) => row.split("\t"));
    const headers = rows[0];
    const jsonData = [];

    for (let i = 1; i < rows.length; i++) {
      const obj = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = rows[i][j];
      }
      jsonData.push(obj);
    }

    return jsonData;
  };

  // You can use localData elsewhere in your component as needed

  return (
    <div>
      <h1>TSV to CSV Converter</h1>
      <textarea
        rows="10"
        cols="50"
        value={tsvData}
        onChange={handleTsvData}
        placeholder="Paste your TSV data here..."
      />
      {/* The localData is not rendered here */}
    </div>
  );
}

export default App;
