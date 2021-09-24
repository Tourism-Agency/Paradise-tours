import React, { useEffect,useState } from "react";
import useUser from "../hooks/useUser";
import styles from './editprofile.css';

import { useSnackbar } from 'notistack';
import useUpdateUser from "../hooks/useUpdateUser";

const AdminEditprofile = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useState({});
    const [nic, setNic] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const {data: userData} = useUser({id:'1'})
    const { mutateAsync: userUpdater,isError } = useUpdateUser('1')

    useEffect(()=>{
        if(userData){
          setUser({...userData});
          setNic(userData?.nic);
          setFname(userData?.first_name);
          setLname(userData?.last_name);
          setEmail(userData?.email_address);
          setPhoneNo(userData?.phone_no)
        }
      },[userData])

    const handleSubmit=async()=>{
        const newUser={
            ...user,
            nic,
            first_name:fname,
            last_name:lname,
            email_address:email,
            phone_no:phoneNo,
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
            <div className="Edit">
            <div className={styles.container}>
                <center><h1>Edit Profile Details</h1></center>
                <p>You can edit your profile details.</p>
                <hr></hr>

                <label htmlFor="nic"><h6>NIC</h6></label><br></br>
                <input type="text" placeholder="" name="nic" value={nic} id="" onChange={(e)=>{setNic(e.target.value)}}  required></input>

                <label htmlFor="firstname"><h6>First Name</h6></label>
                <input type="text" placeholder="" name="firstname" value={fname} id="" onChange={(e)=>{setFname(e.target.value)}} required></input>

                <label htmlFor="lastname"><h6>Last Name</h6></label>
                <input type="text" placeholder="" name="lastname" id="" value={lname} onChange={(e)=>{setLname(e.target.value)}} required></input>

                <label htmlFor="email"><h6>Email</h6></label>
                <input type="email" placeholder="" name="email" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>

                <label htmlFor="mobile"><h6>Mobile Number</h6></label>
                <input type="int" placeholder="" name="mobile" value={phoneNo} id="" onChange={(e)=>{setPhoneNo(e.target.value)}} required></input>

                <button type="submit" className="registerbtn" formAction="./admin" onClick={handleSubmit}>Submit</button>
                
                <hr></hr>
            </div>
            </div>

        );

}

export default AdminEditprofile;