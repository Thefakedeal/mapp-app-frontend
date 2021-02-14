import React from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormText,
} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { postData } from "../helpers/fetchData";

export default function PlaceForm() {
  const clicked = useSelector((state) => state.clicked);
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        lat: clicked.lat,
        lon: clicked.lon
      }}
      onSubmit={async (values,{setSubmitting, setFieldValue}) => {
          try{
              setFieldValue('lat', clicked.lat)
              setFieldValue('lon', clicked.lon)
              setSubmitting(true);
              const place = await postData({endpoint:'/api/v1/places',body:{...values,...clicked}});
              history.push(`/places/${place._id}`)
            }catch(err){
              console.log(err)
            }finally{
              setSubmitting(false)
            }
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name Is Required";
        return errors;
      }}
    >
      {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form className=" p-4 p-md-0 pr-md-4  mt-4">
          <h3>Add Place</h3>
          <FormGroup>
            <FormLabel> Name</FormLabel>
            <FormControl
              name="name"
              placeholder="Place Name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              required
            />
            {errors.name && (
              <FormText className="text-danger">{errors.name}</FormText>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel> Description</FormLabel>
            <FormControl
              name="description"
              placeholder="Description"
              as="textarea"
              onChange={handleChange}
              value={values.description}
              onBlur={handleBlur}
              rows={5}
            />
          </FormGroup>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={!clicked.hasLocation || isSubmitting}
            block
          >
            { isSubmitting?'Submitting':'Submit' }
          </Button>
        </Form>
      )}
    </Formik>
  );
}
