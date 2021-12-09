import React, { useState } from 'react'
import { DatePicker } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import EventIcon from '@mui/icons-material/Event';

function DatePicker1() {
    const [myDate, setMyDate] = useState(Date || null);

    let date = myDate.toString().slice(0, 15)
    console.log(date)

    // let currentTime = Date.now()

    // console.log(currentTime)
    console.log(myDate)
    // let reversedDate = date.split('').reverse().join('')
    // console.log("re", reversedDate);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker value={myDate} onChange={setMyDate}
                label='Select Date'
                inputVariant="outlined"
                format='yyyy/MM/dd'
                style={{ width: '100%', border: '1px solid black' }}
            // <img src={<EventIcon/>}/>
            />
            <div>
                {date}
            </div>
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker1
