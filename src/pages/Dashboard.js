import './App.css';

import BorderlessLogo from "../assets/borderless-logo.png"
import dayjs from 'dayjs';
import TextField from "@mui/material/TextField";
import * as React from 'react';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export function getCurrentDate(separator = '/') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

function Dashboard() {


    const [value, setValue] = React.useState(dayjs(getCurrentDate()));

    return (<div className="App">

            <div className="navbar">
                <img className="logo"
                     src={BorderlessLogo} alt="Matrix Telematics Ltd"/>

                <h3 className="title">
                    Expenses Tracker
                </h3>
            </div>


        <div className="main">
            <div className="card-view">

                <div className="card">


                    <h2 className="title">
                        Income
                    </h2>

                    <h3>
                        KSh 30,000
                    </h3>

                </div>

                <div className="card">
                    <h2 className="title">
                        Expenses
                    </h2>

                    <h3>
                        KSh 30,000
                    </h3>

                </div>

                <div className="card">
                    <h2 className="title">
                        Spent
                    </h2>

                    <h3>
                        KSh 30,000
                    </h3>

                </div>


            </div>

            <div className="datepicker-view">
                {/* DatePicker Dialog */}
                <div className="dialog">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Month"
                            value={value}
                            minDate={dayjs('2017-01-01')}
                            maxDate={dayjs('2022-12-31')}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </LocalizationProvider>
                </div>

                <div className="button">
                    View Monthly Report
                </div>
            </div>

            <div className="table-view">
                <tr>
                    Shopping
                </tr>
                <tr>
                    Travel
                </tr>
                <tr>
                    Etcetra
                </tr>
            </div>

            <div>
                <h1 className="title">
                    Add Expense
                </h1>

                <Box component="form"
                     sx={{
                         '& > :not(style)': {m: 1, width: '25ch'},
                     }}
                     noValidate
                     autoComplete="off">
                    <TextField
                        label="Name"
                    >

                    </TextField>

                    <TextField
                        label="Cost"
                        inputMode="numeric"
                    >

                    </TextField>
                </Box>


                <div className="button">
                    Save
                </div>

            </div>
        </div>




        {/* Spacer */}
        <div>
            <p></p>
            <p></p>
        </div>


        </div>);
}

export default Dashboard;
