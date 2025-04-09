import React from 'react';
import { useTable, useSortBy } from 'react-table';

export default function TableComponent({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    { columns, data },
    useSortBy
  );

  return (
    <table {...getTableProps()} style={{ border: '1px solid #ddd', width: '100%' }}>
      <thead style={{marginBottom:'20px'}}>
        {headerGroups.map(headerGroup => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                key={column.id}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                style={{
                  padding: '10px',
                  borderBottom: '2px solid #aaa',
                  background: 'white',
                  cursor: 'pointer'
                }}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()} style={{ borderBottom: '1px solid #ddd' }}>
              {row.cells.map(cell => (
                <td
                  key={cell.column.id}
                  {...cell.getCellProps()}
                  style={{ padding: '10px' }}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
