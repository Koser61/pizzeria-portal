import React from 'react';
import PropTypes from 'prop-types';
//import { DateTime } from 'luxon';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterLuxon';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
//import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import FormLabel from '@mui/material/FormLabel';
//import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import SaveIcon from '@mui/icons-material/Save';

const Reservation = ({ type, id }) => {
  /* Date Picker */
  const [date, setDate] = React.useState(null);
  /* Time Picker */
  const [time, setTime] = React.useState(null);

  /* Table Select */
  const [table, setTable] = React.useState('');
  const handleTableChange = (event) => {
    setTable(event.target.value);
  };

  /* Repeat Select */
  const [repeat, setRepeat] = React.useState('');
  const handleRepeatChange = (event) => {
    setRepeat(event.target.value);
  };

  /* Duration Amount Widget */
  const [duration, changeDuration] = React.useState(1);
  const handleDurationDecrement = (currentDuration) => {
    if (currentDuration > 1) {
      changeDuration(--currentDuration);
    } else {
      return;
    }
  };
  const handleDurationIncrement = (currentDuration) => {
    if (currentDuration < 12) {
      changeDuration(++currentDuration);
    } else {
      return;
    }
  };

  /* People Amount Widget */
  const [peopleAmount, changePeopleAmount] = React.useState(1);
  const handlePeopleDecrement = (currentPeopleAmount) => {
    if (currentPeopleAmount > 1) {
      changePeopleAmount(--currentPeopleAmount);
    } else {
      return;
    }
  };
  const handlePeopleIncrement = (currentPeopleAmount) => {
    if (currentPeopleAmount < 4) {
      changePeopleAmount(++currentPeopleAmount);
    } else {
      return;
    }
  };

  /* Starters Checkboxes */
  const [starters, setStarters] = React.useState({
    bread: false,
    lemonWater: false,
  });
  const handleChange = (event) => {
    setStarters({
      ...starters,
      [event.target.name]: event.target.checked,
    });
  };
  const { bread, lemonWater } = starters;

  return (
    <Container sx={{ my: 2 }}>
      <Box maxWidth={900} mx='auto'>
        <Card elevation={6} sx={{ p: 1 }}>
          <Card variant='outlined' sx={{ p: 2 }}>
            <Grid container>
              <Grid container item xs={12} sm={6} justifyContent='center'>
                <Grid item mx={1}>
                  {/* Date Picker */}
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <DatePicker
                      label='Date'
                      value={date}
                      onChange={(newValue) => {
                        setDate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={6} justifyContent='center'>
                <Grid item sx={{ mt: { xs: 2, sm: 0 } }} marginTop={2} mx={1}>
                  {/* Time Picker */}
                  <LocalizationProvider dateAdapter={DateAdapter}>
                    <TimePicker
                      label='Hour'
                      value={time}
                      onChange={(newValue) => {
                        setTime(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Card variant='outlined' sx={{ mt: 1, p: 2}}>
            <Grid container>
              <Grid item xs={12} sm={6} md={9}>
                <Box
                  width={1/1}
                  display='flex'
                  sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    mt: { xs: 0, md: 0.75 },
                  }}
                >
                  {/* Table Select */}
                  <Box width={1/1} maxWidth={246} mx='auto'>
                    <FormControl fullWidth>
                      <InputLabel id='table-select-label'>Table</InputLabel>
                      <Select
                        labelId='table-select-label'
                        id='table-select'
                        value={table}
                        label='Table'
                        onChange={handleTableChange}
                      >
                        <MenuItem value={1}>Table 1</MenuItem>
                        <MenuItem value={2}>Table 2</MenuItem>
                        <MenuItem value={3}>Table 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {/* Repeat Select */}
                  <Box width={1/1} maxWidth={246} mx='auto' sx={{ mt: {xs: 3, md: 0} }}>
                    <FormControl fullWidth>
                      <InputLabel id='repeat-select-label'>Repeat</InputLabel>
                      <Select
                        labelId='repeat-select-label'
                        id='repeat-select'
                        value={repeat}
                        label='Repeat'
                        onChange={handleRepeatChange}
                      >
                        <MenuItem value={false}>No repeat</MenuItem>
                        <MenuItem value={'daily'}>Daily</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              {/* Duration Amount Widget */}
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    height: {xs: 90, sm: '100%'},
                    alignItems: {xs: 'flex-end', sm: 'center'}
                  }}
                  display='flex'
                  justifyContent='center'
                >
                  <Box width={130}>
                    <Typography
                      textAlign='center'
                      sx={{
                        color: 'text.secondary',
                        mb: 0.5
                      }}
                    >
                      Duration (h):
                    </Typography>
                    <Box
                      width={1/1}
                      display='inline-flex'
                      justifyContent='space-evenly'
                      alignItems='center'
                    >
                      <IconButton onClick={() => handleDurationDecrement(duration)}>
                        <RemoveIcon />
                      </IconButton>
                      <Card
                        variant='outlined'
                        sx={{
                          height: '2rem',
                          width: '2rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                          lineHeight: '2rem',
                          margin: '0.1rem',
                          minWidth: '2rem',
                        }}
                      >
                        {duration}
                      </Card>
                      <IconButton onClick={() => handleDurationIncrement(duration)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Card variant='outlined' sx={{ mt: 1, p: 2 }}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Box height={1/1} display='flex' justifyContent='center' alignItems='center'>
                  {/* People Amount Widget */}
                  <Box width={130} m={2}>
                    <Typography
                      textAlign='center'
                      sx={{
                        color: 'text.secondary',
                        mb: 0.5
                      }}
                    >
                      People:
                    </Typography>
                    <Box
                      width={1/1}
                      display='inline-flex'
                      justifyContent='space-evenly'
                      alignItems='center'
                    >
                      <IconButton onClick={() => handlePeopleDecrement(peopleAmount)}>
                        <RemoveIcon />
                      </IconButton>
                      <Card
                        variant='outlined'
                        sx={{
                          height: '2rem',
                          width: '2rem',
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                          lineHeight: '2rem',
                          margin: '0.1rem',
                          minWidth: '2rem',
                        }}
                      >
                        {peopleAmount}
                      </Card>
                      <IconButton onClick={() => handlePeopleIncrement(peopleAmount)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  {/* Starters Checkboxes */}
                  <FormControl sx={{ m: 2 }} component='fieldset' variant='standard'>
                    <FormLabel sx={{ml: 1}} component='legend'>Starters:</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={bread}
                            onChange={handleChange}
                            name='bread'
                          />
                        }
                        label='Bread'
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={lemonWater}
                            onChange={handleChange}
                            name='lemonWater'
                          />
                        }
                        label='Lemon water'
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Card>
          <Divider sx={{ my: 2 }} />
          <Box width={1/1} display='inline-flex' justifyContent='flex-end'>
            <Button sx={{mb: 1, mr: 1}} variant="contained" endIcon={<SaveIcon />}>
              Save
            </Button>
          </Box>
        </Card>
      </Box>
    </Container>
  );
};

Reservation.propTypes = {
  type: PropTypes.oneOf(['event', 'booking']).isRequired, // used to conditionally: get event or booking data, changeView in navRedux
  id: PropTypes.number.isRequired,
};

export default Reservation;
