import * as  React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { ICONS, LOGOS } from '../../assets';

const Container = styled('div')({
    backgroundColor: "#fde4e4"
})

const Content = styled('div')({
    padding: "10px"
})

const First = styled('Typography')({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
        height: 50,
        width: 50,
    },
    "& h5": {
        marginLeft: "8px",
        color: '#212245',
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: "cursive",
    },
    "& p": {
        marginTop: "1rem",
        textAlign: "center"
    }
})

const Second = styled('div')({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& h2": {
        color: '#212245',
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: "cursive",
        marginBottom: "1rem",
    },
    "& p": {
        color: "#212245",
        fontWeight: "bold",
    }
})

const Third = styled('div')({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& h2": {
        color: '#212245',
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: "cursive",
        marginBottom: "1rem"
    },
    "& p": {
        color: "#212245",
        fontWeight: "bold",
    }
})

const Fourth = styled('div')({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& h2": {
        color: '#212245',
        fontSize: "25px",
        fontWeight: "bold",
        fontFamily: "cursive",
        marginBottom: "1rem"
    },
    "& p": {
        color: "#212245",
        fontWeight: "bold",
    }
})

const Fifth = styled('div')({
    color: "red",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3rem",
    "& p2": {
        display: "flex"
    }
})

const Contact = () => {
    return (
        <Container>
            <Content>
                <Grid container spacing={2} columns={16}>
                    <Grid xs={16} md={8} lg={4} >
                        <First variant="h6" noWrap component="div">
                            <img src={LOGOS.logo} alt='LOGO' />
                            <h5>Tasty Treats</h5>
                            <p>Indulge in our Tasty Treats - <br />
                                Delicious bites that'll make your <br />
                                taste buds dance with joy! Satisfy <br />
                                your cravings and experience a <br />
                                burst of flavor in every bite.</p>
                        </First>
                    </Grid>
                    <Grid xs={16} md={8} lg={4}>
                        <Second>
                            <h2>Delivery Time</h2>
                            <p>Sunday-Thursday</p>
                            <span>10:00 am to 11:00 pm </span>
                            <p>Friday & Saturday</p>
                            <span>Off Day</span>
                        </Second>
                    </Grid>
                    <Grid xs={16} md={8} lg={4}>
                        <Third>
                            <h2>Contact</h2>
                            <p>Location:</p>
                            <span>Iskon Cross Road near Croma</span>
                            <p>Phone No:</p>
                            <span>9586473684</span>
                            <p>Email:</p>
                            <span>tastytreat001@gmail.com</span>
                        </Third>
                    </Grid>
                    <Grid xs={16} md={8} lg={4}>
                        <Fourth>
                            <h2>News Letter</h2>
                            <p>Subscribe Our NewsLetter</p>
                            <TextField
                                hiddenLabel
                                id="filled-hidden-label-normal"
                                defaultValue="Send Your Mail"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="End">
                                            < ICONS.SendIcon sx={{ color: "red" }} />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                size="small"
                            />
                        </Fourth>
                    </Grid>
                </Grid>
                <Grid lg={1}>
                    <Fifth sx={{flexDirection:{xs:"column", md:"row"}}}>
                        <p1>Copyright © 2023-2024, website made by Sweety Thakkar | All rights reserved.</p1>
                        <p2>Follow:
                            <div>
                                <ICONS.FacebookIcon /> <ICONS.GitHubIcon /> <ICONS.YouTubeIcon /> <ICONS.InstagramIcon />
                            </div>
                        </p2>
                    </Fifth>
                </Grid>
            </Content>
        </Container>
    )
}

export default Contact
