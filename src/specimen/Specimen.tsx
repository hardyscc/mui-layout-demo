import {
  Box,
  Card,
  CardContent,
  FormLabel,
  Grid,
  Tab,
  Tabs,
  TextField
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Built with love by the "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {" team."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

function useFormInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  return { value, onChange: handleChange };
}

export default function Specimen() {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  return (
    <React.Fragment>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Card>
            <CardContent>
              <Typography>Patient Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Case"
                    {...useFormInput("MH1238474589634")}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField label="HKID" {...useFormInput("A123456(3)")} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField label="Name" {...useFormInput("DAI MAN CHAN")} />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField label="Age" {...useFormInput("42")} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField label="Dob" {...useFormInput("01/01/1977")} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <TextField label="Sex" {...useFormInput("M")} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <TextField label="Ward" {...useFormInput("4B")} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <TextField label="Bed" {...useFormInput("34")} />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField label="Speciality" {...useFormInput("CNT")} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField label="MRN" {...useFormInput("N/A")} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box m={4}>
            <Grid container spacing={4}>
              <Grid
                item
                sm
                container
                spacing={2}
                justify="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <FormLabel>Specimen No. / Lab #</FormLabel>
                </Grid>
                <Grid item>
                  <TextField
                    inputProps={{ "aria-label": "bare" }}
                    {...useFormInput("XXXXXX")}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                sm
                container
                spacing={2}
                justify="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <FormLabel>Pay Code</FormLabel>
                </Grid>
                <Grid item sm={2}>
                  <TextField
                    inputProps={{ "aria-label": "bare" }}
                    {...useFormInput("X")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Card>
            <CardContent>
              <Tabs
                value={tabValue}
                onChange={(_, value) => setTabValue(value)}
              >
                <Tab label="Specimen Detail" />
                <Tab label="Specimen Other Details" />
                <Tab label="Order Info" />
              </Tabs>
              <Box padding={2}>
                {tabValue === 0 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                      <TextField label="Specimen" value={"XXXXXX"} />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField label="Type Detail" value={"Testing"} />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <TextField label="Status" value={"P"} />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <TextField label="Marker" value={"TX"} />
                    </Grid>
                  </Grid>
                )}
              </Box>
            </CardContent>
          </Card>
        </Paper>
        <MadeWithLove />
      </main>
    </React.Fragment>
  );
}
