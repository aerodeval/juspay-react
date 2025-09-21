import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FlexibleTable({ 
  data = [], 
  columns = [], 
  title = "Data Table",
  minWidth = 650,
  showBorders = true,
  dense = false 
}) {

  const tableColumns = columns.length > 0 ? columns : 
    data.length > 0 ? Object.keys(data[0]).map(key => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      align: typeof data[0][key] === 'number' ? 'right' : 'left'
    })) : [];

  return (
    <TableContainer >
      <Table 
        sx={{ minWidth }} 
        aria-label={title}
        size={dense ? "small" : "medium"}
      >
        <TableHead>
          <TableRow>
            {tableColumns.map((column) => (
              <TableCell 
                key={column.key} 
                align={column.align || 'left'}
                sx={{ fontWeight: 'bold',  padding:"8px 12px",
                  "&:first-of-type": {
                    padding: "8px 12px 8px 0px",  // different padding for first cell
                  },
                 }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.id || row.name || index}
              sx={{ 
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              {tableColumns.map((column) => (
                <TableCell 
                  key={column.key}
                  align={column.align || 'left'}
                  component={column.key === tableColumns[0].key ? "th" : "td"}
                  scope={column.key === tableColumns[0].key ? "row" : undefined}
                  sx={{
                    borderBottom: "none",
                    padding:"8px 12px",
                    "&.MuiTableCell-head, &[scope=row]": {
                      padding: "8px 12px 8px 0px",
                    },

                  }}
                >
                  {column.format ? column.format(row[column.key]) : row[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}