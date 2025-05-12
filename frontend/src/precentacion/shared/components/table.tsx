import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  getFilteredRowModel,
} from "@tanstack/react-table";

interface PropsTable<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}
export const Table = <T extends object>({ data, columns }: PropsTable<T>) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [filterBy, setFilterBy] = useState<string | null>(null);

  const filteredData = filterBy
    ? data.filter((row) =>
        String(row[filterBy as keyof T])
          .toLowerCase()
          .includes(globalFilter.toLowerCase())
      )
    : data;

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  });

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGlobalFilter(event.target.value);
  };

  const handleFilterByChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterBy(event.target.value);
  };

  return (
    <section className="w-full h-full rounded-md overflow-hidden shadow-md p-4 bg-white">
      <h5 className="font-bold my-4 text-lg">Name Table</h5>
      <section className="border rounded-md">
        <article className="flex justify-between p-4">
          <button onClick={() => setGlobalFilter("")}>limpiar</button>

          <div className="border-2 flex justify-center items-center focus-within:border-primary rounded-md p-2 gap-2 hover:border-primary">
            iconos
            <input
              type="search"
              className="rounded-md placeholder:text-sm placeholder:font-light outline-none"
              placeholder="Buscar"
              value={globalFilter}
              onChange={handleFilterChange}
            />
            <select
              className="rounded-md p-1 outline-none"
              onChange={handleFilterByChange}
              value={filterBy || ""}
            >
              <option value="">Seleccionar columna</option>
              {columns.map((column) => (
                <option key={column.id} value={column.id}>
                  {String(column.header)}
                </option>
              ))}
            </select>
          </div>
        </article>
        <table className="w-full h-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-4 px-2 text-start text-sm border"
                  >
                    {header.isPlaceholder
                      ? null
                      : typeof header.column.columnDef.header === "function"
                        ? header.column.columnDef.header(header.getContext())
                        : header.column.columnDef.header}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="py-4 text-start px-2 border text-sm"
                  >
                    {String(cell.renderValue() ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};
