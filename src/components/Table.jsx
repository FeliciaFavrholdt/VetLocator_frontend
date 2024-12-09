import styled from "styled-components";

const TableContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #333;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
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

function Table({ sections }) {
  return (
    <TableContainer>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <SectionHeader>{section.title}</SectionHeader>
          <StyledTable>
            <thead>
              <TableRow>
                <TableHeader>Method</TableHeader>
                <TableHeader>URL</TableHeader>
                <TableHeader>Request Body (JSON)</TableHeader>
                <TableHeader>Response (JSON)</TableHeader>
                <TableHeader>Error (e)</TableHeader>
                <TableHeader>Notes</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {section.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableData>{row.method}</TableData>
                  <TableData>{row.url}</TableData>
                  <TableData>{row.requestBody || "N/A"}</TableData>
                  <TableData>{row.response || "N/A"}</TableData>
                  <TableData>{row.error || "N/A"}</TableData>
                  <TableData>{row.notes || "N/A"}</TableData>
                </TableRow>
              ))}
            </tbody>
          </StyledTable>
        </div>
      ))}
    </TableContainer>
  );
}

export default Table;