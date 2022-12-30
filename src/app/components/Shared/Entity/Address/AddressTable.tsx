import React from 'react';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton
}  from '@mui/material';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon
}  from '@mui/icons-material'  
/*

/**
 * AddressTable
 *   AddressTable component
 * @param {any}  props Properties
 * @return {React.Component} AddressTable Component
 */
export const AddressTable = (props: any) => {
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
                Usuário{/* // i18n */}
              </TableCell>
              <TableCell>
                Nome{/* // i18n */}
              </TableCell>
              <TableCell align="right">
                Ações{/* // i18n */}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows && rows.length > 0 ? rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.username} 
                </TableCell>
                <TableCell>
                  {row.media ? row.media.name : ''}
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
export default AddressTable;