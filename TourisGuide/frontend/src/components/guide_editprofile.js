import React, { useState,useEffect  } from "react";
import useUpdateUser from "../hooks/useUpdateUser";
import useUser from "../hooks/useUser";
import styles from './editprofile.css';
import { useSnackbar } from 'notistack';
import { Delete } from "@material-ui/icons";

 const GuideEditprofile =()=> {

  const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useState({});
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [bank_details, setBankDetails] = useState('');
    const {data: userData} = useUser({id:'2'})
    const { mutateAsync: userUpdater,isError } = useUpdateUser('2')


    useEffect(()=>{
        if(userData){
          setUser({...userData});
          setFname(userData?.first_name);
          setLname(userData?.last_name);
          setEmail(userData?.email_address);
          setPhoneNo(userData?.phone_no)
          setBankDetails(userData?.bank_details)
        }
      },[userData])


    const handleUpdateUser=async()=>{
      const newUser={
        ...user,
        first_name:fname,
        last_name:lname,
        email_address:email,
        phone_no:phoneNo,
        bank_details:bank_details,
        registered_date:userData.registered_date.substring(0,10),
        last_visit_date:userData.last_visit_date.substring(0,10)
      }
      delete newUser['user_id'];

      try{
        await userUpdater(newUser);
        if(!isError){
          enqueueSnackbar('User updated successfully', {
            variant: 'success',
            autoHideDuration: 3000,
          })
        }
      }catch(e){
        enqueueSnackbar('User update failed', {
          variant: 'error',
          autoHideDuration: 3000,
        })
      }
    }
   
    
        return (

                <body>
                <div className="Edit">
                <div className={styles.container}>
                    <center><h1>Edit Profile Details</h1></center>
                    <p>You can edit your profile details.</p>
                    <hr></hr>

                    <label htmlFor="email"><h6>First Name</h6></label>
                    <input type="text" placeholder="" name="firstname" value={fname} id="" onChange={(e)=>{setFname(e.target.value)}} required></input>

                    <label htmlFor="psw"><h6>Last Name</h6></label>
                    <input type="text" placeholder="" name="lastname" value={lname} id="" onChange={(e)=>{setLname(e.target.value)}} required></input>

                    <label htmlFor="psw-repeat"><h6>Email</h6></label>
                    <input type="email" placeholder="" name="email" value={email} id="" onChange={(e)=>{setEmail(e.target.value)}} required></input>

                

                    <label htmlFor="psw-repeat"><h6>Mobile Number</h6></label>
                    <input type="int" placeholder="" name="mobile" value={phoneNo} id="" onChange={(e)=>{setPhoneNo(e.target.value)}} required></input>


                    <label htmlFor="psw-repeat"><h6>Bank A/C Details</h6></label>
                    <input type="int" placeholder="Branch & A/C No" name="mobile" value={bank_details} id="" onChange={(e)=>{setBankDetails(e.target.value)}} required></input>

                    <button className="registerbtn" onClick={handleUpdateUser} 
                    >Submit</button>

                    <hr></hr>
                
                </div>
                </div>

                </body>
        );

    
}

export default GuideEditprofile

/*  <label htmlFor="psw-repeat"><h6>Address</h6></label>
    <input type="text" placeholder="" name="address" id=""></input>  */