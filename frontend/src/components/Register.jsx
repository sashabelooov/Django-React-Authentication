import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'


const Register = () =>{
    return(
        <div className={"myBackground"}>
            
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                    <Box className={"title"}>User registration</Box>
                </Box>

                <Box className={"itemBox"}>
                    <MyTextField 
                    lable={"Email"}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyPassField
                    lable={"Password"}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyPassField
                    lable={"Confirm Password"}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <MyButton
                        lable={"Register"}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <Link to="/">Alread have an account? Login now</Link>
                </Box>

            </Box>

        </div>
    )
}

export default Register