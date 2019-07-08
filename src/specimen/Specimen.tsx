import {
  Box,
  Button,
  Card,
  CardContent,
  FormLabel,
  Grid,
  Paper,
  Tab,
  Tabs
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Field, FormikProvider, useFormik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
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
  }
}));

export default function Specimen() {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);

  const formik = useFormik({
    initialValues: {
      case: "MH1238474589634",
      hkid: "A123456(3)",
      name: "DAI MAN CHAN",
      age: "42",
      dob: "01/01/1977",
      sex: "M",
      ward: "4B",
      bed: "34",
      speciality: "CNT",
      mrn: "N/A"
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }
  });

  return (
    <FormikProvider value={formik}>
      <form className={classes.layout}>
        <Paper className={classes.paper}>
          <Card>
            <CardContent>
              <Typography>Patient Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <Field name="case" label="Case" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="hkid" label="HKID" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="name" label="Name" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Field name="age" label="Age" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Field name="dob" label="Dob" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Field name="sex" label="Sex" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Field name="ward" label="Ward" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Field name="bed" label="Bed" component={TextField} />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Field
                    name="speciality"
                    label="Speciality"
                    component={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field name="mrn" label="MRN" component={TextField} />
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
                  <Field
                    name="specimenNo"
                    component={TextField}
                    inputProps={{ "aria-label": "bare" }}
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
                  <Field
                    name="payCode"
                    component={TextField}
                    inputProps={{ "aria-label": "bare" }}
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
                      <Field
                        name="specimen"
                        label="Specimen"
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Field
                        name="typeDetail"
                        label="Type Detail"
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <Field
                        name="status"
                        label="Status"
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <Field
                        name="marker"
                        label="Marker"
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Field
                        name="site"
                        label="Site"
                        multiline
                        rows="2"
                        rowsMax="4"
                        component={TextField}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Field
                        name="preparation"
                        label="Preparation"
                        multiline
                        rows="2"
                        rowsMax="4"
                        component={TextField}
                      />
                    </Grid>
                  </Grid>
                )}
              </Box>
              <Button type="submit">Submit</Button>
            </CardContent>
          </Card>
        </Paper>
      </form>
    </FormikProvider>
  );
}
