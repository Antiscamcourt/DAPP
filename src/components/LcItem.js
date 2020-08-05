import React from 'react'


const approve=(id)=>{
  console.log("LCApprove");
  alert(id);
}
export const LcItem = (lc)=>{
    return(
    
      <>
      <tr><td>{lc.id}</td> <td>
      <button value ={lc.id} onClick={() => approve(lc.id)} className='approve-btn'>Approve</button>
        </td></tr>
     </>
    
    );

}
