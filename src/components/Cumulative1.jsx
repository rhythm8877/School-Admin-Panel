import React, { useEffect, useState } from 'react';
import "../styles/SchoolTable.css";

const activityOptions = {
  'Elementary': [
    'New Govt. Primary School', 'Const. of New Building', 'Boys toilet', 
    'Girls toilet', 'Boys toilet (Rejuvenation)', 'Girls toilet (Rejuvenation)', 
    'Additional Classrooom', 'Augmentation of EBRC', 'Boundary Wall', 
    'Boundary Wall (Rejuvenation)', 'Dilapidated Classrooms (Primary)', 
    'Dilapilated Classroom (Upper Primary)', 'Drinking Water Facility', 
    'Electrification', 'Electrification (Rejuvenation)', 'Major Repair', 
    'Major Repair (Rejuvenation)', 'Rain Water Harvesting', 
    'Upgradation of School (6-8)', 'Dilapilated Building (Primary)', 
    'Dilapilated Building (Upper Primary)'
  ],
  'Secondary': [
    'Additional Classroom', 'Art & Craft Room', 'Boundary Wall (Rejuvenation)', 
    'Boys Toilet', 'Boys Toilet (Rejuvenation)', 'Girls Toilet', 
    'Girls Toilet (Rejuvenation)', 'Computer Room', 'Drinking Water', 
    'Library Room', 'Major Repair', 'Major Repair (Rejuvenation)', 
    'New Secondary School (Section 1)', 'New Secondary School (Section 2)', 
    'Rain Water Harvesting', 'Ramp', 'Residential Quarter', 
    'Integrated Science Lab', 'Dilapidated Building', 'Electrification', 
    'Upgradation to Secondary'
  ],
  'Higher Secondary': [
    'Additional Classroom (Examination Hall)', 'Additional Classroom', 
    'Art & Craft Room', 'Computer Room', 'Dilapidated Building', 
    'Girls Toilet', 'Boys Toilet', 'Library Room', 
    'New Higher Secondary (Arts Stream)', 'New Higher Secondary (Science Stream)', 
    'Upgradation to Higher Secondary', 'Rainwater Harvesting', 'Electrification'
  ],
  'PM Shri': [
    'Major Repair', 'Solar Panel', 'Boys Toilet', 'Girls Toilet', 
    'Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Library Room'
  ],
  'KGBV-IV': [
    'Boundary Wall'
  ],
  'NSCBAV': [],
  'DA JGUA': []
};

const Cumulative1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Elementary');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [tableData, setTableData] = useState([]);

  const yearOptions = Array.from({ length: 9 }, (_, i) => 2017 + i);

  // Function to generate initial table data based on selected category
  useEffect(() => {
    const activities = activityOptions[selectedCategory];
    let newData;
    
    if (activities && activities.length > 0) {
      newData = activities.map((activity, index) => ({
        slNo: index + 1,
        activity: activity,
        totalSchools: 0,
        totalBudget: 0,
        expenditure: 0,
        balance: 0
      }));
    } else {
      // Create 1 empty row for categories with no activities
      newData = [{
        slNo: 1,
        activity: '',
        totalSchools: 0,
        totalBudget: 0,
        expenditure: 0,
        balance: 0
      }];
    }
    
    setTableData(newData);
  }, [selectedCategory]);

  return (
    <div className="container">
      <header>
        <div className="logo">Cumulative 1</div>
      </header>

      <div className="data-container">
        <div className="control-panel-year">
          <div className="control-panel-filters">
            <div className="school-type-selector">
              <span className="label-text">School Category</span>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="school-type-dropdown"
              >
                <option value="Elementary">Elementary</option>
                <option value="Secondary">Secondary</option>
                <option value="Higher Secondary">Higher Secondary</option>
                <option value="PM Shri">PM Shri</option>
                <option value="KGBV-IV">KGBV-IV</option>
                <option value="NSCBAV">NSCBAV</option>
                <option value="DA JGUA">DA JGUA</option>
              </select>
            </div>
            
            <div className="year-selector">
              <span className="label-text">Year</span>
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(parseInt(e.target.value))}
                className="year-dropdown"
              >
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}-{year+1}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="table-container">
          <table className="cumulative-table">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Activity</th>
                <th>Total Schools</th>
                <th>Total Budget</th>
                <th>Expenditure</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.slNo}>
                  <td>{row.slNo}</td>
                  <td>{row.activity}</td>
                  <td>{row.totalSchools}</td>
                  <td>{row.totalBudget}</td>
                  <td>{row.expenditure}</td>
                  <td>{row.totalBudget - row.expenditure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cumulative1; 