import React, {Fragment, useRef} from 'react';
import emailjs from '@emailjs/browser';
import Grid from "@mui/material/Grid";



export const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_8tatk7y',
            'template_wf23oz9',
            form.current,
            'VkPfbW_Q3rWTJWyIT')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <Fragment>
            <Grid container className="pt-2" spacing={3} style={{backgroundColor: '#414147'}}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <form ref={form} onSubmit={sendEmail}>
                        <label style={{color:"white"}}>Name</label>
                        <input type="text" name="user_name" style={{width:400,backgroundColor:"white",color:"green"}}/>
                        <label style={{color:"white"}}>Email</label>
                        <input type="email" name="user_email"  style={{width:400,backgroundColor:"white"}}/>
                        <label style={{color:"white"}}>Message</label>
                        <textarea name="message" style={{width:400 ,height:200,backgroundColor:"white"}}/>
                        <input type="submit" value="Send" style={{backgroundColor: '#c8e6c9',width:80}}/>
                    </form>
                </Grid>
            </Grid>

        </Fragment>

    );
};

export default Email