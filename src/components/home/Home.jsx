import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import hero from "../../assets/hero.png";
import Paper from '@mui/material/Paper';
import { Grid, ListItemText } from '@mui/material';
import { services } from './Services';
import { useNavigate } from 'react-router-dom';
import location from '../../assets/location.png'
import ForwardIcon from '@mui/icons-material/Forward';
import Contact from '../contact/Contact';

const Item = styled(Paper)({
    backgroundColor: '#fff',
    textAlign: 'center',
});

const Main = styled('div')({
    display: "flex",
   flexWrap:"wrap",
    justifyContent: "space-around",
    alignItems: "center",


    "& h4": {
        fontSize: "25px",
        color: "#212245",
        fontFamily: "cursive"
    },
    "& h1": {
        color: "#212245",
        fontSize: "60px",
        fontFamily: "cursive"
    },
    "& p": {
        color: "#212245",
        fontFamily: "cursive",
        fontSize: "18px"
    },
    "& img": {
        height: "600px",
    },
})

const Security = styled('div')({
    display: "flex",
    paddingTop: "20px",

})

const SubContent = styled('div')({
    display: "flex",
    justifyContent: "center",
    paddingLeft: "24px",
    "& h4": {
        fontSize: "20px",
        color: "red",
        fontFamily: "cursive",
        paddingLeft: "50px",
    },
    "& h1": {
        color: "#212245",
        fontSize: "35px",
        fontFamily: "cursive"
    },
    "& span": {
        color: "red"
    },
    "& p": {
        color: "#212245",
        fontFamily: "cursive",
        fontSize: "18px"
    },
})

const ListItemLabel = styled('div')({
    color: "#212245",
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: "cursive"
})

const Location = styled('div')({
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "space-around",
    alignItems: "center",
    "& img": {
        height: "600px",
    },
    "& h1": {
        color: "#212245",
        fontSize: "35px",
        fontFamily: "cursive"
    },
    "& h2": {
        color: "#212245",
        fontFamily: "cursive",
    },
    "& span": {
        color: "red"
    },
    "& p": {
        color: "#212245",
        fontFamily: "cursive",
        fontSize: "18px"
    },
})

const Home = () => {
    const Navigate = useNavigate()
    return (
        <>
            <Main>
                <div style={{ width:{ xs:"100%",  md:"50%"}}}>
                    <h4> Easy Way to make an Order!</h4>
                    <h1>
                        <span style={{ color: "red" }}>Hungry? </span> Just wait <br />Food at your Door
                    </h1>
                    <p>Indulge in our Tasty Treats -
                        Delicious bites <br /> that'll  make your
                        taste buds dance with joy! <br /> Satisfy
                        your cravings and experience a <br />
                        burst of flavor in every bite.
                    </p>
                    <br />
                    <ButtonGroup>
                        <Button variant='contained' color='error' endIcon={<NavigateNextIcon />}> Order Now </Button>
                    </ButtonGroup> &nbsp;
                    <ButtonGroup>
                        <Button variant='contained' color='error' onClick={() => Navigate('/Food')}> See All Foods </Button>
                    </ButtonGroup>

                    <Security>
                        <p> <LocalShippingIcon sx={{ color: "red" }} /> NO Shipping Charge </p>
                        <p> <VerifiedUserIcon sx={{ color: "red" }} /> 100% Secure CheckOut </p>
                    </Security>
                </div>
                <div>
                    <img src={hero} alt='logo' />
                </div>
            </Main>
            <SubContent>
                <div>
                    <h4>What we serve</h4>
                    <h1>Just sit back at home</h1>
                    <h1>we will <span>take care</span></h1>
                    <p>Indulge in our Tasty Treats -
                        Delicious bites <br /> that'll  make your
                        taste buds dance with joy!
                    </p>
                </div>
            </SubContent>
            <Grid container sx={{ padding: 1, display: "flex", alignItems: "center", justifyContent: "space-evenly" }} spacing={2}>
                {
                    services.map((data, index) => {
                        return <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            <Item >
                                <img width={100} height={100} src={data.img} alt="" />
                                <ListItemText primary={<ListItemLabel>{data.label}</ListItemLabel>} />
                            </Item>
                        </Grid>
                    })
                }
            </Grid>
            <Location>
                <div>
                    <img src={location} alt='Location' />
                </div>
                <div style={{ width:{ xs:"100%",  md:"50%"}}}>
                    <h1> Why <span> Tasty Treat</span> ? </h1>
                    <p>As it gives:</p>
                    <h2> <ForwardIcon /> Fresh and Tasty Foods </h2>
                    <p> We hope to share everything we've learned from 3 decades<br />
                        of global food processing to create fresh and tasty products.<br />
                        Our care and attention will shine through in the<br />
                        quality of our 100% fresh meals. </p>
                    <h2> <ForwardIcon /> Quality Support </h2>
                    <p> Appropriate temperature controls, storage conditions,<br />
                        handling and butchering techniques and sanitary conditions<br />
                        are maintained during processing and butchering to prevent<br />
                        post-slaughter contamination </p>
                    <h2> <ForwardIcon /> Order from any Location </h2>
                    <p> You can order your food from any of your confort location,<br />
                        tasty treat will be their at your location.<br />
                        Just wait for a while food will be at your door. </p>
                </div>
            </Location>
            <Contact />
        </>
    )
}

export default Home
