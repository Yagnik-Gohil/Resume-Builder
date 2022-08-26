import React, { Fragment } from 'react'

function Years() {
    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20),( val, index) => index -10 + year);

  return (
    <Fragment>
        <option value="" key="0">Year</option>
        {
       years.map((year, index) => {
         return <option key={index+1} value={year}>{year}</option>
       })
     }
    </Fragment>
  )
}

export default Years