import styled from "styled-components";

const TableContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`
  background-color: #f9f9f9;
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
  font-weight: bold;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

function Table() {
  const rows = [
    { method: "GET", url: "/api/users", requestBody: "", response: "[user, user, …] (1)", error: "" },
    { method: "GET", url: "/api/users/{id}", requestBody: "", response: "user (1)", error: "(e1)" },
    { method: "POST", url: "/api/users", requestBody: "user(1) without id", response: "", error: "(e2)" },
    { method: "UPDATE", url: "/api/users/{id}", requestBody: "user(1) without id", response: "user (1)", error: "" },
  ];

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>Method</TableHeader>
            <TableHeader>URL</TableHeader>
            <TableHeader>Request Body (JSON)</TableHeader>
            <TableHeader>Response (JSON)</TableHeader>
            <TableHeader>Error (e)</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableData>{row.method}</TableData>
              <TableData>{row.url}</TableData>
              <TableData>{row.requestBody}</TableData>
              <TableData>{row.response}</TableData>
              <TableData>{row.error}</TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

export default Table;