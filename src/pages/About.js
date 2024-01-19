import React from 'react'
import Layout from '../component/Layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
    return (
        <Layout>

            <Box sx={{
                my: 15,
                textAlign: 'center',
                p: 6,
                "& h4": {
                    fontWeight: "bold",
                    my: 2,
                    fontSize: "2rem",
                },

                "& p": {
                    textAlign: "justify",
                },

                "@media (max-width:600px)": {
                    mt: 0,
                    "& h4 ": {
                        fontSize: '1rem',
                    },

                },


            }}>

                <Typography variant='h4'>
                    Welcome To My Restaurant
                </Typography>

                <p>
                    lkjhgjhgdhkfvsdjkbhfjhbmbshilahdugkzshbcnbzx
                    ncbvjshichkjbzcnbzmnmcmcli
                    ilsukygcdscmbzxnbvcnbvnxvbcnmbxnbcn
                    xbcnnxbvcmmm
                    jsdhfbnbvnzxmvnbhsvkjnzxkbvnx mbnv nb
                    bnmmcvkhjghvjhbmzscbvzjhhiuuhjkh
                    kjhvjxhbvmnx bmvnkxjbhkjvbjhbv



                </p>
                <br />
                <p>
                    kfhjsdkhbgvnhdbvxjh,jhj,vhhgvbnvmhgh
                    jhmgjhghkjhhgjghyhfv
                    ygjhygjvggjhgjhgjhigygjhgjhbjh
                    jhgsjhchsvcjhbsjhgjshjgjhsgvbhvbjhjj
                    shdgfjvhshvjhvbhjbvjhb
                    jshdbvjhvbcnhxbjhcjkghjbjh
                </p>



            </Box>





        </Layout>
    )
}

export default About
