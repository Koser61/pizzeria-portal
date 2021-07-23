import React from 'react';
import PropTypes from 'prop-types';
/*
import { Grid, Row, Col } from 'react-flexbox-grid';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import CheckIcon from '@material-ui/icons/Check';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  orderArticle: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  orderPaper: {
    padding: theme.spacing(1),
  },
  orderCard: {
    padding: theme.spacing(2),
  },
  cardMargin: {
    marginBottom: theme.spacing(0.5),
  },
  upperTextField: {
    width: 185,
    marginBlock: theme.spacing(2),
  },
  menuDivider: {
    marginBlock: theme.spacing(2),
  },
  blockMargin: {
    marginBlock: theme.spacing(2),
  },
  selectFormControl: {
    minWidth: 145,
    marginBlock: theme.spacing(2),
  },
  productTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  numberInput: {
    minWidth: 30,
    maxWidth: 35,
  },
  cartProductOptions: {
    marginInline: theme.spacing(1),
  },
  cartProductTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  cartProductPrice: {
    minWidth: 55,
    maxWidth: 80,
  },
  cartTotal: {
    marginInline: theme.spacing(2),
  }
}));
*/
class Order extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { loading: { active, error }, products } = this.props;

    const Wrapper = props => (
      <div>
        <h2>NewOrder view</h2>
        {props.children}
      </div>
    );

    if(active || !products.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if(error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ul>
            {products.map(({id, name, price}) => (
              <li key={id}>{name}, {price}</li>
            ))}
          </ul>
        </Wrapper>
      );
    }
  }
}
/*
const NewOrder = () => {
  const classes = useStyles();
  const [coffee, setCoffee] = React.useState('latte');
  const [sauce, setSauce] = React.useState('tomato');
  const [toppings, selectToppings] = React.useState({
    olives: true,
    redPeppers: true,
    greenPeppers: true,
    mushrooms: true,
    basil: true,
    salami: false,
  });
  const [crust, selectCrust] = React.useState('standard');
  const [ingredients, selectIngredients] = React.useState({
    cucumber: true,
    tomatoes: true,
    saladOlives: true,
    feta: false,
    cheese: false,
    herbs: true,
    pepper: false,
  });

  const handleCoffeeChange = (event) => {
    setCoffee(event.target.value);
  };
  const handleSauceChange = (event) => {
    setSauce(event.target.value);
  };
  const handleToppingsChange = (event) => {
    selectToppings({ ...toppings, [event.target.name]: event.target.checked });
  };
  const handleCrustChange = (event) => {
    selectCrust(event.target.value);
  };
  const handleIngredientsChange = (event) => {
    selectIngredients({ ...ingredients, [event.target.name]: event.target.checked });
  };

  const { olives, redPeppers, greenPeppers, mushrooms, basil, salami } = toppings;
  const { cucumber, tomatoes, saladOlives, feta, cheese, herbs, pepper } = ingredients;

  const amountInputProps = {
    min: 1,
    max: 9,
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
        <Paper elevation={1} className={classes.orderPaper}>
          <form>
            <Card elevation={2} className={classes.orderCard + ' ' + classes.cardMargin}>
              <Grid fluid>
                <Row>
                  <Col xs={12} sm={6}>
                    <Box display="flex" width="100%" justifyContent="center">
                      <TextField
                        select
                        id="selectTable"
                        label="Table"
                        className={classes.upperTextField}
                      >
                        <MenuItem value="table-1">Table 1</MenuItem>
                        <MenuItem value="table-2">Table 2</MenuItem>
                        <MenuItem value="table-3">Table 3</MenuItem>
                      </TextField>
                    </Box>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Box display="flex" width="100%" justifyContent="center">
                      <TextField
                        id="orderTime"
                        label="Order time"
                        type="datetime-local"
                        defaultValue="2021-07-19T16:00"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className={classes.upperTextField}
                      />
                    </Box>
                  </Col>
                </Row>
              </Grid>
            </Card>
            <Card elevation={2} className={classes.orderCard + ' ' + classes.cardMargin}>
              <Grid fluid>
                <Row>
                  <Col xs={9} sm={10}>
                    <Box
                    display="flex"
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    >
                      <Typography variant="h5" className={classes.productTitle + ' ' + classes.blockMargin}>
                        Zio Stefano's Doughnut
                      </Typography>
                    </Box>
                  </Col>
                  <Col xs={3} sm={2}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        display="flex"
                        height="fit-content"
                        width="fit-content"
                        alignItems="center"
                        flexDirection="row"
                        className={classes.blockMargin}
                      >
                        <TextField
                          id="amount"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={amountInputProps}
                          className={classes.numberInput}
                        />
                        <IconButton>
                          <ShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Col>
                </Row>
              </Grid>
              <Divider className={classes.menuDivider} />
              <Grid fluid>
                <Row>
                  <Col xs={9} sm={10}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="h5" className={classes.productTitle + ' ' + classes.blockMargin}>
                        Zia Giulia's Breakfast
                      </Typography>
                    </Box>
                  </Col>
                  <Col xs={3} sm={2}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        display="flex"
                        height="fit-content"
                        width="fit-content"
                        alignItems="center"
                        flexDirection="row"
                        className={classes.blockMargin}
                      >
                        <TextField
                          id="amount"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={amountInputProps}
                          className={classes.numberInput}
                        />
                        <IconButton>
                          <ShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Coffee</FormLabel>
                        <RadioGroup aria-label="coffee type" name="coffee" value={coffee} onChange={handleCoffeeChange}>
                          <FormControlLabel value="latte" control={<Radio />} label="Latte" />
                          <FormControlLabel value="cappuccino" control={<Radio />} label="Cappuccino" />
                          <FormControlLabel value="espresso" control={<Radio />} label="Espresso" />
                          <FormControlLabel value="macchiato" control={<Radio />} label="Macchiato" />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Col>
                </Row>
              </Grid>
              <Divider className={classes.menuDivider} />
              <Grid fluid>
                <Row>
                  <Col xs={9} sm={10}>
                    <Box
                    display="flex"
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    >
                      <Typography variant="h5" className={classes.productTitle + ' ' + classes.blockMargin}>
                        Nonna Alba's Pizza
                      </Typography>
                    </Box>
                  </Col>
                  <Col xs={3} sm={2}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        display="flex"
                        height="fit-content"
                        width="fit-content"
                        alignItems="center"
                        flexDirection="row"
                        className={classes.blockMargin}
                      >
                        <TextField
                          id="amount"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={amountInputProps}
                          className={classes.numberInput}
                        />
                        <IconButton>
                          <ShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormControl component="fieldset" className={classes.blockMargin}>
                        <FormLabel component="legend">Sauce</FormLabel>
                        <RadioGroup aria-label="pizza sauce" name="sauce" value={sauce} onChange={handleSauceChange}>
                          <FormControlLabel value="tomato" control={<Radio />} label="Tomato" />
                          <FormControlLabel value="cream" control={<Radio />} label="Sour cream" />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormControl component="fieldset" className={classes.blockMargin}>
                        <FormLabel component="legend">Toppings</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={olives} onChange={handleToppingsChange} name="olives" />}
                            label="Olives"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={redPeppers} onChange={handleToppingsChange} name="redPeppers" />}
                            label="Red peppers"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={greenPeppers} onChange={handleToppingsChange} name="greenPeppers" />}
                            label="Olives"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={mushrooms} onChange={handleToppingsChange} name="mushrooms" />}
                            label="Mushrooms"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={basil} onChange={handleToppingsChange} name="basil" />}
                            label="Fresh basil"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={salami} onChange={handleToppingsChange} name="salami" />}
                            label="Salami"
                          />
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormControl className={classes.selectFormControl}>
                        <InputLabel id="crust-label">pizza crust</InputLabel>
                        <Select
                          labelId="crust-label"
                          id="crust"
                          value={crust}
                          onChange={handleCrustChange}
                        >
                          <MenuItem value={'standard'}>standard</MenuItem>
                          <MenuItem value={'thin'}>thin</MenuItem>
                          <MenuItem value={'thick'}>thick</MenuItem>
                          <MenuItem value={'cheese'}>cheese in edges</MenuItem>
                          <MenuItem value={'wholewheat'}>wholewheat</MenuItem>
                          <MenuItem value={'gluten'}>with extra gluten</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Col>
                </Row>
              </Grid>
              <Divider className={classes.menuDivider} />
              <Grid fluid>
                <Row>
                  <Col xs={9} sm={10}>
                    <Box
                    display="flex"
                    width="100%"
                    height="100%"
                    justifyContent="center"
                    alignItems="center"
                    >
                      <Typography variant="h5" className={classes.productTitle + ' ' + classes.blockMargin}>
                        Nonno Alberto's Salad
                      </Typography>
                    </Box>
                  </Col>
                  <Col xs={3} sm={2}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box
                        display="flex"
                        height="fit-content"
                        width="fit-content"
                        alignItems="center"
                        flexDirection="row"
                        className={classes.blockMargin}
                      >
                        <TextField
                          id="amount"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={amountInputProps}
                          className={classes.numberInput}
                        />
                        <IconButton>
                          <ShoppingCartIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Ingredients</FormLabel>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox checked={cucumber} onChange={handleIngredientsChange} name="cucumber" />}
                            label="Cucumber"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={tomatoes} onChange={handleIngredientsChange} name="tomatoes" />}
                            label="Tomatoes"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={saladOlives} onChange={handleIngredientsChange} name="saladOlives" />}
                            label="Olives"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={feta} onChange={handleIngredientsChange} name="feta" />}
                            label="Feta cheese"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={cheese} onChange={handleIngredientsChange} name="cheese" />}
                            label="Cheese"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={herbs} onChange={handleIngredientsChange} name="herbs" />}
                            label="Fresh herbs"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={pepper} onChange={handleIngredientsChange} name="pepper" />}
                            label="Black pepper"
                          />
                        </FormGroup>
                      </FormControl>
                    </Box>
                  </Col>
                </Row>
              </Grid>
              <Divider className={classes.menuDivider} />
              <TextField
                id="orderNote"
                label="Optional notes"
                multiline
                rows={6}
                variant="outlined"
                fullWidth
              />
            </Card>
            <Card raised className={classes.orderCard}>
              <Grid fluid className={classes.cartGrid}>
                <Row >
                  <Col xs={10} sm={12}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                      marginBottom={2}
                    >
                      <Typography variant="h6" className={classes.cartProductTitle}>
                        Nonna Alba's Pizza
                      </Typography>
                    </Box>
                  </Col>
                  <Col xs={2} sm={1}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="button" display="block">
                        1
                      </Typography>
                    </Box>
                  </Col>
                  <Col xs={9} sm={8}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      flexDirection="column"
                      className={classes.cartProductOptions}
                    >
                      <Typography component="p" variant="body2">
                        <strong>sauce: </strong>tomato
                      </Typography>
                      <Typography component="p" variant="body2">
                        <strong>toppings: </strong>olives, red peppers, green peppers, mushrooms, fresh basil
                      </Typography>
                      <Typography component="p" variant="body2">
                        <strong>pizza crust: </strong>standard
                        </Typography>
                    </Box>
                  </Col>
                  <Col xs={3} sm={3}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="button" display="block">
                        $<span>20</span>
                      </Typography>
                      <IconButton>
                        <DeleteForeverIcon />
                      </IconButton>
                    </Box>
                  </Col>
                </Row>
              </Grid>
              <Divider className={classes.menuDivider} />
              <Box display="inline-flex" width="100%" justifyContent="flex-end">
                <Typography variant="h5" className={classes.cartTotal}>
                  Total: <span>$20</span>
                  </Typography>
              </Box>
            </Card>
          </form>
        </Paper>
      </article>
    </Container>
  );
};
*/
export default Order;