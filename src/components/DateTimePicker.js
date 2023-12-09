import React, { useState } from 'react';
const DateTimePicker = () => {
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const handleDateTimeChange = (e) => {
    setSelectedDateTime(e.target.value);
  };

  return (
    <div className='color-black'>
      <label htmlFor="datetimepicker">Select Date and Time:</label>
      <input
        type="datetime-local"
        id="datetimepicker"
        value={selectedDateTime}
        onChange={handleDateTimeChange}
      />
    </div>
  );
};

export default DateTimePicker;
