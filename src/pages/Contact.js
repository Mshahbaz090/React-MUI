import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 1, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography variant='h4'>Contact My Restaurant</Typography>
                <p>
                    jhgyjhsdfgdchbvbcvkchjhvznbvbncfvghgjhjbnvnbvngjuhkjhjh
                </p>
            </Box>
            <Box sx={{
                m: 3,
                width: '600px',
                ml: 10,
                "@media (max-width:600px)": {
                    width: "300px",

                },


            }}>
                <TableContainer component={Paper}>
                    <Table aria-label='contact-table'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: 'white' }}
                                    align='center'




                                >
                                    Contact Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-839-000(tollfree)
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> help@rest.com
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> 12334543
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>


            </Box>



        </Layout>
    )
}

export default Contact
