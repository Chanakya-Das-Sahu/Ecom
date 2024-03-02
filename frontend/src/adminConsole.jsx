import React, { useState } from 'react'
import FileBase from 'react-file-base64'
const adminConsole = () =>{
const[details,setDetails] = useState({name:'',image:'',dis:'',rate:'',images:'',amt:''})
    return(
        <>
        <FileBase
         multiple={false}
         onDone={(file)=>{setDetails({...details,image:imagefile.base64})}}
        >
        </FileBase>
        {/* {console.log(image)} */}
        
        <input className='charu' type='text' name='name' value={details.name} onChange={(e)=>{setDetails({...details,[e.target.name]:e.target.vaalue})}}/>
        <input className='charu' type='text' name='dis' value={details.dis} onChange={(e)=>{setDetails({...details,[e.target.dis]:e.target.vaalue})}}/>
        <FileBase
         multiple={true}
         onDone={(file)=>{setDetails({...details,images:file.base64})}}
        >
        </FileBase>
        </>
    )
}

export default adminConsole ;