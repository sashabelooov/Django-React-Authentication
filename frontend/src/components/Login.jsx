import '../App.css'
import { Box } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyPassField from './forms/MyPassField'
import MyButton from './forms/MyButton'
import {Link} from 'react-router-dom'


const Login = () =>{
    return(
        <div className={"myBackground"}>
            
            <Box className={"whiteBox"}>

                <Box className={"itemBox"}>
                    <Box className={"title"}>Login for auth app</Box>
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
                    <MyButton
                        lable={"Login"}
                    />
                </Box>

                <Box className={"itemBox"}>
                    <Link to="/register">Don't you have an account? Register now</Link>
                </Box>

            </Box>

        </div>
    )
}

export default Login