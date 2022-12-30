import React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon
} from '@mui/icons-material';

/**
 * PlaceTable
 *   PlaceTable component
 * @param {any}  props Properties
 * @return {React.Component} PlaceTable Component
 */
export const PlaceTable = (props: any) => {
  const {
    rows,
    show,
    create,
    edit,
    remove
  } = props

  return (<Grid container justifyContent="center">
    <Grid item xs={12} lg={10}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="table">
          {
            rows && rows.length > 0 ? null : (
              <caption>Sem itens na tabela{/* // i18n */}</caption>
            )
          }
          <TableHead>
            <TableRow>
              <TableCell>
                ID{/* // i18n */}
              </TableCell>
              <TableCell>
                Title{/* // i18n */}
              </TableCell>
              <TableCell>
                Rua{/* // i18n */}
              </TableCell>
              <TableCell>
                Tipo{/* // i18n */}
              </TableCell>
              <TableCell align="right">
                Ações{/* // i18n */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.length > 0 ? rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell>
                  {row.title}
                </TableCell>
                <TableCell>
                  {row?.address?.street || ''}
                </TableCell>
                <TableCell>
                  {row.type}
                </TableCell>

                <TableCell align="right">

                  <IconButton
                    color="primary"
                    aria-label="show"
                    component="span"
                    onClick={() => show ? show(row) : null}>
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="edit"
                    component="span"
                    onClick={() => edit ? edit(row) : null}>
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    aria-label="remove"
                    component="span"
                    onClick={() => remove ? remove(row) : null}>
                    <DeleteIcon />
                  </IconButton>

                </TableCell>
              </TableRow>
            )) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    <Grid item xs={12} lg={10}>
      {create
        ? (<Fab color="primary" aria-label="add" onClick={() => create()}>
          <AddIcon />
        </Fab>)
        : null}
    </Grid>
  </Grid>);
}
export default PlaceTable;