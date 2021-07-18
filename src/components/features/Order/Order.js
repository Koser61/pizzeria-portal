import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  orderArticle: {
    margin: 12,
  },
  title: {
    flexGrow: 1,
  },
  orderForm: {
    padding: 6,
  },
  orderInfo: {
    padding: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Order = () => {
  const classes = useStyles();
  const [table, setTable] = React.useState('');

  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  return (
    <Container>
      <article className={classes.orderArticle}>
        <AppBar position="relative" elevation={3}>
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              New Order
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="Accept order">
              <CheckIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Paper className={classes.orderForm}>
          <Card elevation={2} className={classes.orderInfo}>
            <Grid container>
              <Grid container item xs={12} sm={4} justifyContent="center">
                xxx
              </Grid>
              <Grid container item xs={6} sm={4} justifyContent="center">
                <FormControl className={classes.formControl}>
                  <InputLabel id="tableLabel">Table</InputLabel>
                  <Select
                    labelId="tableLabel"
                    id="tableSelect"
                    value={table}
                    onChange={handleTableChange}
                  >
                    <MenuItem value={"table-1"}>Table 1</MenuItem>
                    <MenuItem value={"table-2"}>Table 2</MenuItem>
                    <MenuItem value={"table-3"}>Table 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid container item xs={6} sm={4} justifyContent="center">
                
              </Grid>
            </Grid>
          </Card>
        </Paper>
      </article>
    </Container>
  );
};

export default Order;