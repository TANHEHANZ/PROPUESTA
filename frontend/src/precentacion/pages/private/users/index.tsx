import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../../shared/components/table";
const data = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Smith", age: 34 },
  // ... more data
];

const columns: ColumnDef<(typeof data)[0]>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
  },
  {
    id: "age",
    header: "Age",
    accessorKey: "age",
  },
  // ... more columns
];
export const Users = () => {
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  );
};
