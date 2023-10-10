import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";
import styled from "styled-components";

const Styles = styled.div`
  .react-datepicker-wrapper,
  .react-datepicker__input-container,
  .react-datepicker__input-container input {
    width: 175px;
  }

  .react-datepicker__close-icon::before,
  .react-datepicker__close-icon::after {
    background-color: red;
  }
`;

const handleSearch = (event) => {
  event.preventDefault();
};

function DatePickerRange() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="mainDiv">
      <div className="div_form">
        <form onSubmit={handleSearch}>
          <div className="div_datePicker">
            <DatePicker
              className="datePicker_departure"
              placeholderText="Select Departure Date"
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => setStartDate(date)}
            />
            <DatePicker
              className="datePicker_arrival"
              placeholderText="Select Arrival Date"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date) => setEndDate(date)}
            />
          </div>
        </form>
        <input className="input" type="submit" value="Search" />
      </div>
    </div>
  );
}

export default function TableDatePicker() {
  return (
    <Styles>
      <DatePickerRange />
    </Styles>
  );
}
