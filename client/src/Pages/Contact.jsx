import React from 'react';
import '../Styles/Contact.css';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {
    return (
        <div className='contact-main' id="Contact">
            <h1 className="contact-title thin"> Contact Me</h1>
            <div className='contact-links'>
                <Grid container spacing={4} justify='center'>
                    <Grid item>
                        <div className='contact-link-box'><a className='contact-link' href="mailto:rmtwilliams@gmail.com"><MailOutlineIcon style={{fontSize: 80}}/></a></div>
                    </Grid>
                    <Grid item>
                        <div className='contact-link-box'><a className='contact-link' href="https://www.linkedin.com/in/rowan-mt-williams/"><LinkedInIcon style={{fontSize: 80}}/></a></div>
                    </Grid>
                    <Grid item>
                        <div className='contact-link-box'><a className='contact-link' href="https://github.com/Rwilliams94"><GitHubIcon style={{fontSize: 80}}/></a></div>
                    </Grid>
                    {/* <Grid item>
                        <div className='contact-link-box'><a className='contact-link' href="https://www.linkedin.com/in/rowan-mt-williams/"></a><TwitterIcon style={{fontSize: 80}}/></div>
                    </Grid> */}
                </Grid>
            </div>
        </div>
    )
}

export default Contact
