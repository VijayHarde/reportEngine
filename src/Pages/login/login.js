import React, { useState } from "react";
import "./login.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate  } from "react-router-dom";

const useStyles = makeStyles({
    disabledButton: {
      background: "#FAC3B3",
    },

    enableButton: {
        background: "#F26841",
    }
  });

const Login = () => {

    const navigate  = useNavigate();

    const [values, setValues] = useState({
        email:'',
        password:''
    });
    const [errors, setError] = useState({})

    const classes = useStyles();

    const handleChange = name => e => {
        setValues({...values, [name]: e.target.value});
        setError((prevState) => {
            return {
                ...prevState,
                 email: values.email === "" ? "Email is required" : isValidEmail(values.email) ? "" : "Email is not in a valid format",
                password: values.password === "" ? "password is required" : ""
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Values",values);
        navigate("/report");
    }

   const isFormValid = () => {
        return (values.email !== "" &&  isValidEmail(values.email) && values.password !== "");
    }


    const isValidEmail = (email) => {
        // regular expression for email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return (
        <>
            <Grid container>

                <Grid item xs={8} style={{ height: "100vh" }}>
                    <div className="firstDiv" style={{ background: "linear-gradient(0.76deg, #98BFD5 1.31%, rgba(92, 128, 255, 0) 106.94%)" }}>
                        <img src={require("../../assets/Profile.png")} />
                        <div
                            style={{ textAlign: "center" }}>
                            <h1>Single Place for all your financial reporting</h1>
                            <h5 style={{ color: "#666666" }}>Access and manage your financial reportings</h5>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className="secondDiv">
                        <img width={"10%"} src={require('../../assets/LoginIcon.png')} />
                        <h1>Employee Login</h1>
                        <h4 style={{ color: "gray" }}>Enter your email id and password to <br /> access your Finance Central account</h4>

                        <form noValidate autoComplete="off">
                            <div style={{ marginTop: "2%" }}>
                                <label>Email ID</label> <br />
                                <TextField
                                    style={{ width: "80%" }}
                                    id="standard-basic"
                                    label="Piramal email id"
                                    onChange={handleChange("email")}
                                    required
                                />  <br />
                                {errors.email && <p style={{color:'red',fontSize:'13px'}}>{errors.email}</p>}
                            </div>

                            <div style={{ marginTop: "2%" }}>
                                <label style={{ marginTop: "2%" }}>Password</label> <br />
                                <TextField
                                    style={{ width: "80%" }} 
                                    id="standard-basic1" 
                                    label="Piramal email password"
                                    onChange={handleChange("password")}
                                    required
                                />
                                {errors.password && <p style={{color:'red',fontSize:'13px'}}>{errors.password}</p>}
                            </div>
                        </form>

                        <Button 
                            disabled={!isFormValid()}
                            onClick={handleSubmit} 
                            style={{ marginTop: '30%', color: 'white' }} 
                            variant="contained" 
                            className={!isFormValid() ? classes.disabledButton : classes.enableButton}
                        >
                            Login
                        </Button>

                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default Login;