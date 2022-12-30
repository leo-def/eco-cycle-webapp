import React from 'react';
import { Card, CardActions, CardContent, CardHeader, Grid, IconButton } from '@mui/material';
import {
  Save as SaveIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';
import { SignupFieldset } from './SignupFieldset';
/**
 * SignupBody
 *   SignupBody component
 * @param {any}  props Properties
 * @return {React.Component} SignupBody Component
 */
export const SignupBody = (props: any) => {

  return (
    <Card sx={{ maxWidth: 645 }}>
      <CardHeader title="Cadastro" />

      <CardContent>
        <Grid container >
          <Grid item xs={12}>
            <SignupFieldset {...props} />
          </Grid>

        </Grid>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="salvar">
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="cancelar">
          <CancelIcon />
        </IconButton>
      </CardActions>
    </Card>);
}
export default SignupBody;
