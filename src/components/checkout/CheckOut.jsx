import React from 'react'
import { styled } from '@mui/material'
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Contact from '../contact/Contact';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const CheckoutDesign = styled('div')({
    backgroundImage: `url('https://i.pinimg.com/originals/bf/65/d5/bf65d51f34b1bf193ec947f3c0c3f3e0.jpg')`,
    backgroundSize: "cover",
    height: "30vh",
    backgroundRepeat: "no-repeat",
    color: "Red",
    fontWeight: "bold",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
})

const Form = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
})

const CheckOutSection = styled('div')({
    width: "100%"
})

const Content = styled('div')({
    display: "flex",
    justifyContent: "space-around"
})

const CheckOut = () => {
    return (

        <CheckOutSection sx={{ padding: { xs: "10px", md: "0px" } }}>
            <CheckoutDesign>
                <h1>CheckOut</h1>
            </CheckoutDesign>
            <Content>
                <div>
                    <h3>Shipping Address</h3>
                    <br />
                    <Form>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            placeholder='Name'
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            placeholder='Email'
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            placeholder='Phone Number'
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            placeholder='Country'
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            placeholder='City'
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            variant="outlined"
                            size="small"
                            placeholder='Postal Code'
                        />
                        <br />
                        <ButtonGroup>
                            <Button variant='contained' color='error'> Payment </Button>
                        </ButtonGroup>
                    </Form>
                </div>

                <div>
                    <TableRow>
                        <TableCell rowSpan={3} />
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">Rs 0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Tax</TableCell>
                        <TableCell align="right">Rs 0</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>Total</TableCell>
                        <TableCell align="right">Rs 50</TableCell>
                    </TableRow>
                </div>
            </Content>
            <br />
            <Contact />
        </CheckOutSection>
    )
}

export default CheckOut
