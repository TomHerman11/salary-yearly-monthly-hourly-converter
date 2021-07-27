import React, { useState } from 'react';
import './Converter.css';

function Converter() {
  const MONTHS_A_YEAR = 12

  const [yearlySalary, setYearlySalary] = useState(120_000)
  const [workdaysAYear, setWorkdaysAYear] = useState(250)
  const [workHoursADay, setWorkHoursADay] = useState(8)


  const yearlySalaryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearlySalary(parseInt(event.target.value));
  }

  const monthlySalaryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearlySalary(parseInt(event.target.value) * MONTHS_A_YEAR);
  }

  const dailySalaryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearlySalary(parseInt(event.target.value) * workdaysAYear);
  }

  const hourlySalaryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearlySalary(parseInt(event.target.value) * workdaysAYear * workHoursADay);
  }

  const workdaysAYearChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkdaysAYear(parseInt(event.target.value));
  }

  const workHoursADayChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkHoursADay(parseInt(event.target.value));
  }

  return (
    <div className="Converter">
      <h4>{`Yearly Salary:`}</h4>
      <input type="number" value={yearlySalary} onChange={yearlySalaryChanged} />

      <h4>{`Monthly Salary:`}</h4>
      <input type="number" value={yearlySalary / MONTHS_A_YEAR} onChange={monthlySalaryChanged} />

      <h4>{`Daily Salary: (${workdaysAYear} workdays a year)`}</h4>
      <input type="number" value={yearlySalary / workdaysAYear} onChange={dailySalaryChanged} />

      <h4>{`Hourly Salary: (${workHoursADay} hours a day)`}</h4>
      <input type="number"
        value={yearlySalary / (workdaysAYear * workHoursADay)}
        onChange={hourlySalaryChanged}
      />

      <h2>Configurations</h2>
      <h4>{`Workdays a year:`}</h4>
      <input type="number" value={workdaysAYear} onChange={workdaysAYearChanged} />

      <h4>{`Work hours a day:`}</h4>
      <input type="number" value={workHoursADay} onChange={workHoursADayChanged} />

    </div>
  );
}

export default Converter;
