import React from 'react';
import Page from '../../generic-components/page'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './add-product-page.css';
const axios = require('axios').default;

class AddProductPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        }

    }

    // componentDidMount() {

    //     if(this.state.isLoaded){
    //         return;
    //     }

    //     axios.get('http://localhost:8080/product/'+this.state.id)
    //     .then((result) => {
    //         console.log(result);
    //         this.setState({
    //             isLoaded: true,
    //             product: result.data.product
    //         });
    //     })
    //     .catch((error) => {
    //         // handle error
    //         console.log(error);
    //         this.setState({
    //             isLoaded: true,
    //             error : error
    //         });
    //     })
    // }
    

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        }
        else {
            return (
                <Page>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </Page>
            );
        }
    }
  }

  export default AddProductPage
