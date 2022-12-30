import React from 'react';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { LoginForm } from '../../../components/Public/Login/LoginForm';
import './Login.css';
import { useDispatch } from 'react-redux';
import { AuthEnum } from '../../../enums/Action/Auth.enum';

/**
 * Login
 *   Authenticate page
 * @param {any}  props Properties
 * @return {React.Component} Login Component
 */
export const Login = () => {

  const formId = 'login-form';
  const dispatch = useDispatch();

  const login = (values) => {
    dispatch({
      type: AuthEnum.AUTH,
      payload: values
    });
  }

  const handleSubmit = (values) => {
    login(values);
  }

  return (<React.Fragment>
    <Grid
      container
      direction="row"
      justifyContent="center"
      className="full-height"
    >
      <Grid item container
        direction="column"
        xs={12} sm={10} md={6}>

        <Grid item xs={2}></Grid>

        <Grid item xs={10}>
          <Card>
            <CardContent>

              <Typography gutterBottom variant="h5" component="div">
                Login
              </Typography>
              <Grid
                container>
                <Grid item xs={12}>
                  <LoginForm id={formId} onSubmit={handleSubmit} />
                </Grid>
              </Grid>
            </CardContent>

            <CardActions>
              <Button type="submit" form={formId} >Login</Button>
              <Button component={Link} to="/home" >Voltar</Button>
              <Button component={Link} to="/signup" >Criar Conta</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>)
}
export default Login
