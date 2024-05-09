import exportFromJSON from "export-from-json";
import TsvInput from "./Components/TsvInput";

import "./App.css";

function App() {
  const data = [
    {
      barcode: 8436599562957,
      title: "Lanyard charm Blossom",
      sku: 39960713921,
      price: 9.95,
    },
    {
      barcode: 8436599563886,
      title: "Libreta B5 Educa",
      sku: 39950615318,
      price: 10.95,
    },
    {
      barcode: 8436599564302,
      title: "Libreta mini con anillas Blossom",
      sku: 39950615326,
      price: 4.95,
    },
    {
      barcode: 8436599564340,
      title: "Bolso Educa",
      sku: 39960203493,
      price: 20.95,
    },
  ];
  const exportToCSV = () => {
    const fileName = "datos.csv";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, exportType });
  };

  const exportToTXT = () => {
    const fileName = "datos.txt";
    const exportType = exportFromJSON.types.txt;
    exportFromJSON({ data, fileName, exportType });
  };

  const exportProductName = () => {
    const fileName = "products.csv";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data, fileName, fields: ["title"], exportType });
  };

  return (
    <>
      <div>
        <TsvInput />

        <button onClick={exportToCSV}>Export local data to .CSV</button>
        <button onClick={exportToTXT}>Export local data to .TXT</button>
        <button onClick={exportProductName}>Export Products .CSV</button>
      </div>
    </>
  );
}

export default App;
