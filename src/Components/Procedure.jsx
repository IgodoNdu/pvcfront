import React from 'react';
import ProcedureBox from './ProcedureBox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';
import pimage3 from '../images/s3.png';

function Procedure() {
  return (
    <div id='products'>
      <h1>Steps</h1>
      <p>Lots of nkowa doro anya, Lots of nkowa doro anya,, Lots of nkowa doro anya, Lots of nkowa doro anya,</p>
      <div className='a-container'>
        <ProcedureBox image={pimage1} title="Step 1" />
        <ProcedureBox image={pimage2} title="Step 2" />
        <ProcedureBox image={pimage3} title="Step 3" />
      </div>
    </div>
  )
}

export default Procedure
