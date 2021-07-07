import React from 'react';
import Page from '../../generic-components/page'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import './add-product-page.css';
import { useHistory } from "react-router-dom"
const axios = require('axios').default;

function AddProductPage(props) {

    const history = useHistory();

    function saveProduct(values){
        console.log(values)
        let newProduct = {
            "id": values.id,
            "name": values.name,
            "brand": values.brand,
            "category": values.category,
            "description": values.description,
            "features":values.features,
            "imageURL": values.imageUrl,
            "productInfo": {
                "height": { "value": values.height, "unit": values.heightUnit },
                "width": { "value": values.width, "unit": values.widthUnit },
                "length": { "value": values.length, "unit": values.lengthUnit },
                "weight": { "value": values.weight, "unit": values.weightUnit },
            },
            "resources": {
                "specSheet": values.specSheet,
                "userManual": values.userManual,
                "troubleShooting": values.troubleShooting,
                "faq": values.faq
            },
            "other": values.other
        }

        console.log(newProduct);
        axios.put('http://localhost:8080/product/', newProduct)
        .then((result) => {
            console.log(result);
            alert("Product Added");
            history.push("/products");
        })
        .catch((error) => {
            alert("Failed to add Product");
            console.log(error);
        });
    }

            return (
                <Page>
                    <Formik
                        initialValues={{ 
                            id: '', 
                            name: '',
                            brand : '',
                            category : '',
                            description : '',
                            features : [''],
                            imageUrl : '',
                            other : '',
                            specSheet : '',
                            userManual : '',
                            troubleShooting : '',
                            faq : '',
                            heightUnit : "I",
                            widthUnit : "I",
                            lengthUnit : "I",
                            weightUnit: "P",
                            height : "",
                            weight : "",
                            width : "",
                            length : ""
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.id) {
                                errors.id = 'Required';
                            }
                            if (!values.name) {
                                errors.name = 'Required';
                            } 
                            if (!values.brand) {
                                errors.brand = 'Required';
                            } 
                            if (!values.category) {
                                errors.category = 'Required';
                            } 
                            if (!values.description) {
                                errors.description = 'Required';
                            } 
                            if (!values.imageUrl) {
                                errors.imageUrl = 'Required';
                            } 
                            if (!values.other) {
                                errors.other = 'Required';
                            } 
                            if (!values.specSheet) {
                                errors.specSheet = 'Required';
                            }
                            if (!values.userManual) {
                                errors.userManual = 'Required';
                            } 
                            if (!values.troubleShooting) {
                                errors.troubleShooting = 'Required';
                            } 
                            if (!values.faq) {
                                errors.faq = 'Required';
                            } 
                            if (!values.height || !values.heightUnit) {
                                errors.height = 'Required';
                            } 
                            if (!values.weight || !values.weightUnit) {
                                errors.weight = 'Required';
                            } 
                            if (!values.width || !values.widthUnit) {
                                errors.width = 'Required';
                            } 
                            if (!values.length || !values.lengthUnit) {
                                errors.length = 'Required';
                            }
                            if (values.features.length < 1 || values.features[0] === '') {
                                errors.features = 'Required';
                            } 
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                            saveProduct(values);
                        }}
                        >
                        {({ isSubmitting, values }) => (
                            <Form>
                                <div className="col-container">
                                    <div className="left-form">
                                        <p><b>Basic Info</b></p>
                                        <div className="form-group">
                                            <div className="flex">
                                                <label htmlFor="id">Id</label>
                                                <Field type="text" name="id" />
                                            </div>
                                            <ErrorMessage name="id" component="div" className="error-text"/>
                                        </div>
                                        
                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="name">Name</label>
                                                <Field type="text" name="name" />
                                            </div>
                                            <ErrorMessage name="name" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="brand">Brand</label>
                                                <Field type="text" name="brand" />
                                            </div>
                                            <ErrorMessage name="brand" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="category">Category</label>
                                                <Field type="text" name="category" />
                                            </div>
                                            <ErrorMessage name="category" component="div" className="error-text"/>
                                        </div>

                                        <p><b>Dimensions</b></p>
                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="height">Height</label>
                                                <Field type="text" name="height"/>
                                                <Field as="select" name="heightUnit">
                                                    <option value="I">in</option>
                                                    <option value="C">cm</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage name="height" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="length">Length</label>
                                                <Field type="text" name="length"/>
                                                <Field as="select" name="lengthUnit">
                                                    <option value="I">in</option>
                                                    <option value="C">cm</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage name="length" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="width">Width</label>
                                                <Field type="text" name="width"/>
                                                <Field as="select" name="widthUnit">
                                                    <option value="I">in</option>
                                                    <option value="C">cm</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage name="width" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="weight">Weight</label>
                                                <Field type="text" name="weight"/>
                                                <Field as="select" name="weightUnit">
                                                    <option value="P">lb</option>
                                                    <option value="K">kg</option>
                                                </Field>
                                            </div>
                                            <ErrorMessage name="weight" component="div" className="error-text"/>
                                        </div>

                                        <p><b>URLS</b></p>
                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="imageUrl">Image URL</label>
                                                <Field type="text" name="imageUrl"/>
                                            </div>
                                            <ErrorMessage name="imageUrl" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="specSheet">Spec Sheet URL</label>
                                                <Field type="text" name="specSheet"/>
                                            </div>
                                            <ErrorMessage name="specSheet" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="userManual">User Manual URL</label>
                                                <Field type="text" name="userManual"/>
                                            </div>
                                            <ErrorMessage name="userManual" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="troubleShooting">Trouble Shooting URL</label>
                                                <Field type="text" name="troubleShooting"/>
                                            </div>
                                            <ErrorMessage name="troubleShooting" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="faq">FAQ URL</label>
                                                <Field type="text" name="faq"/>
                                            </div>
                                            <ErrorMessage name="faq" component="div" className="error-text"/>
                                        </div>
                                    </div>

                                    <div>
                                        <p><b>Detailed Info</b></p>

                                        <div class="form-group">
                                            <p>Features</p>
                                            <FieldArray name="features">
                                                {({ remove, push }) => (
                                                <div>
                                                    {values.features.length > 0 &&
                                                    values.features.map((feature, index) => (
                                                        <div className="row" key={index}>
                                                            <div className="form-group">
                                                                {/* <label htmlFor={`feature.${index}`}>Feature</label> */}
                                                                <Field name={`features.${index}`} type="text"/>
                                                                
                                                            </div>
                                                            <div className="col">
                                                                <button type="button" onClick={() => remove(index)}>Remove</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    <button type="button"  onClick={() => push('')}>Add Feature</button>
                                                </div>
                                                )}
                                            </FieldArray>
                                            <ErrorMessage name="features" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="description">Description</label>
                                                <Field type="text" name="description" as="textarea"/>
                                            </div>
                                            <ErrorMessage name="description" component="div" className="error-text"/>
                                        </div>

                                        <div class="form-group">
                                            <div className="flex">
                                                <label htmlFor="other">Other</label>
                                                <Field type="text" name="other" as="textarea"/>
                                            </div>
                                            <ErrorMessage name="other" component="div" className="error-text"/>
                                        </div>

                                        

                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                

                                
                            </Form>
                        )}
                    </Formik>
                </Page>
            );
        
    
  }

  export default AddProductPage
