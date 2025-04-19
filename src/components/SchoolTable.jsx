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

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * SchoolAdminPanel is a React component that renders an administrative interface
 * for managing school data. It allows users to select a category and year,
 * search for schools by name, and view/edit a table of school-related information.
 * The table includes columns for district, EBRC, UDISE, activity, school name, and
 * additional financial details for each month of the selected year.
 * 
 * Users can update table data through inputs and dropdowns, and filter results
 * using the search functionality. The component dynamically adjusts the available
 * activities based on the selected category, and initializes the table with 
 * default rows upon category changes.
 */

/*******  513f0059-3136-4306-aff7-42a0524251cb  *******/
const SchoolAdminPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState('Elementary');
  const [selectedYear, setSelectedYear] = useState(2025);
  const [searchTerm, setSearchTerm] = useState('');
  const [tableData, setTableData] = useState([]);

  const yearOptions = Array.from({ length: 9 }, (_, i) => 2017 + i); // Years from 2023-2030

  const getRemainingFields = (year) => {
    const yearSuffix = parseInt(year.toString().slice(-2)); // Get the last two digits as a number
    const yearSuffixx = yearSuffix + 1; // Add 1 to the number

    // If you want to format it back to a two-digit string (e.g., 21 -> 22)
    const yearSuffixxFormatted = yearSuffixx.toString().padStart(2, '0');

    console.log(yearSuffixxFormatted); // This will give you the next year in two-digit format (e.g., '22' for 2021)

    return [
      'PAB', 'Fund Approved', 'Civil Cost',
      `Apr'${yearSuffix}`, `May'${yearSuffix}`, `Jun'${yearSuffix}`,
      `Jul'${yearSuffix}`, `Aug'${yearSuffix}`, `Sep'${yearSuffix}`,
      `Oct'${yearSuffix}`, `Nov'${yearSuffix}`, `Dec'${yearSuffix}`,
      `Jan'${yearSuffixxFormatted}`, `Feb'${yearSuffixxFormatted}`, `Mar'${yearSuffixxFormatted}`,
      'Total Expenditure', 'Balance', 'Remarks'
    ];
  };

  const generateInitialRows = () => {
    return Array.from({ length: 5 }, () => ({
      district: '',
      ebrc: '',
      udise: '',
      activity: '',
      schoolName: '',
      others: Array(18).fill('') // Fixed length matching remainingFields structure
    }));
  };

  useEffect(() => {
    setTableData(generateInitialRows());
  }, [selectedCategory]);

  const handleInputChange = (rowIndex, field, value, subIndex = null) => {
    const updatedRows = [...tableData];
    if (field === 'others') {
      updatedRows[rowIndex][field][subIndex] = value;
    } else {
      updatedRows[rowIndex][field] = value;
    }
    setTableData(updatedRows);
  };

  return (
    <div className="container">
      <header>
        <div className="logo">School Details</div>
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

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by School Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="district-column">District</th>
                <th>EBRC</th>
                <th>UDISE</th>
                <th className="activity-column">Activity</th>
                <th className="school-name-column">School Name</th>
                {getRemainingFields(selectedYear).map((field, idx) => (
                  <th key={idx}>{field}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => {
                const matchesSearch = row.schoolName.toLowerCase().includes(searchTerm.toLowerCase());
                
                return (
                  <tr key={rowIndex} style={{ display: matchesSearch ? '' : 'none' }}>
                    <td>
                      <input
                        type="text"
                        value={row.district}
                        onChange={e => handleInputChange(rowIndex, 'district', e.target.value)}
                        placeholder="Enter District"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        value={row.ebrc}
                        onChange={e => handleInputChange(rowIndex, 'ebrc', e.target.value)}
                        placeholder="Enter EBRC"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        value={row.udise}
                        onChange={e => handleInputChange(rowIndex, 'udise', e.target.value)}
                        placeholder="Enter UDISE"
                      />
                    </td>

                    <td>
                      <select
                        value={row.activity}
                        onChange={e => handleInputChange(rowIndex, 'activity', e.target.value)}
                      >
                        <option value="">-- Select Activity --</option>
                        {activityOptions[selectedCategory].map((activity, idx) => (
                          <option key={idx} value={activity}>{activity}</option>
                        ))}
                      </select>
                    </td>

                    <td>
                      <input
                        type="text"
                        value={row.schoolName}
                        onChange={e => handleInputChange(rowIndex, 'schoolName', e.target.value)}
                        placeholder="Enter School Name"
                      />
                    </td>

                    {getRemainingFields(selectedYear).map((_, idx) => (
                      <td key={idx}>
                        <input
                          type="text"
                          value={row.others?.[idx] || ''}
                          onChange={e => handleInputChange(rowIndex, 'others', e.target.value, idx)}
                          placeholder="Enter value"
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SchoolAdminPanel;