import { Box, Button, Card, CardContent, FormLabel, Grid, Paper, Tab, Tabs, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Field, Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    minWidth: 800
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
      <Form className={classes.layout}>
        <Paper className={classes.paper}>
          <Card>
            <CardContent>
              <Typography>Patient Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Field name="case" label="Case" as={TextField} />
                </Grid>
                <Grid item xs={3}>
                  <Field name="hkid" label="HKID" as={TextField} />
                </Grid>
                <Grid item xs={4}>
                  <Field name="name" label="Name" as={TextField} />
                </Grid>
                <Grid item xs={2}>
                  <Field name="age" label="Age" as={TextField} />
                </Grid>
                <Grid item xs={3}>
                  <Field name="dob" label="Dob" as={TextField} />
                </Grid>
                <Grid item xs={1}>
                  <Field name="sex" label="Sex" as={TextField} />
                </Grid>
                <Grid item xs={1}>
                  <Field name="ward" label="Ward" as={TextField} />
                </Grid>
                <Grid item xs={1}>
                  <Field name="bed" label="Bed" as={TextField} />
                </Grid>
                <Grid item xs={2}>
                  <Field name="speciality" label="Speciality" as={TextField} />
                </Grid>
                <Grid item xs={4}>
                  <Field name="mrn" label="MRN" as={TextField} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box m={4}>
            <Grid container spacing={4}>
              <Grid
                item
                xs
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
                    as={TextField}
                    inputProps={{ "aria-label": "bare" }}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                xs
                container
                spacing={2}
                justify="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <FormLabel>Pay Code</FormLabel>
                </Grid>
                <Grid item xs={2}>
                  <Field
                    name="payCode"
                    as={TextField}
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
                    <Grid item xs={3}>
                      <Field name="specimen" label="Specimen" as={TextField} />
                    </Grid>
                    <Grid item xs={3}>
                      <Field
                        name="typeDetail"
                        label="Type Detail"
                        as={TextField}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <Field name="status" label="Status" as={TextField} />
                    </Grid>
                    <Grid item xs={1}>
                      <Field name="marker" label="Marker" as={TextField} />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="site"
                        label="Site"
                        multiline
                        rows="2"
                        rowsMax="4"
                        as={TextField}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        name="preparation"
                        label="Preparation"
                        multiline
                        rows="2"
                        rowsMax="4"
                        as={TextField}
                      />
                    </Grid>
                  </Grid>
                )}
              </Box>
              <Box mt={2} p={2}>
                <Button size="small" variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Paper>
      </Form>
    </FormikProvider>
  );
}
