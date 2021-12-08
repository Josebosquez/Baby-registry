import React, { useState } from 'react'
import { KeyboardDatePicker } from "@material-ui/pickers"

function DatePicker() {
    const [myDate, setMyDate] = useState(Date || null);

    let date = myDate.toString().slice(0, 15)
    console.log(date)

    if (date > Date.now()){
        console.log('error')
        return "error";
    }


    return (
        <>
            <KeyboardDatePicker value={myDate} onChange={setMyDate}
                InputAdornmentProps={{ position: "end" }}
                label='Select Date'
                inputVariant="outlined"
                format='yyyy.MM.dd'
                style={{width: '40%', border: '1px solid black'}}
            />
            <div>
                {date}
            </div>
        </>
    )
}

export default DatePicker
