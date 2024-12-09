import Table from "../components/Table"; 
import sections from "../components/Sections";

const Endpoints = () => {
  return (
    <div>
      <h1>API Endpoints</h1>
      <Table sections={sections} />
    </div>
  );
};

export default Endpoints;
