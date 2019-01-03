import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import {
	required,
	atLeastThree,
	atLeastEight,
	isValidEmail,
	emailTooLong,
	passwordsMatch
} from '../validators';
import Input from './input';

import formStyles from './styles/forms.module.css';
import styles from './styles/Registration.module.css';

class Registration extends Component {

    handleFormSubmit = (values) => {
        console.log(values);
    }

	render() {
		return (
			<main className={formStyles.container}>
				<form
                    className={formStyles.form}
					onSubmit={this.props.handleSubmit(values =>
						this.handleFormSubmit(values)
					)}
				>
					<fieldset className={formStyles.fieldset}>
                        <legend className={formStyles.legend}>Register</legend>
                        {/* <label htmlFor="firstName" className={styles.formLabel}>First Name</label> */}
						<Field
							name="firstName"
                            type="text"
                            label="First Name"
							component={Input}
							placeholder="First Name"
							validate={[required]}
						/>
						<Field
							name="lastName"
                            type="text"
                            label="Last Name"                            
							component={Input}
							placeholder="Last Name"
							validate={[required]}
						/>
						<Field
							name="email"
                            type="text"
                            label="Email"                            
							component={Input}
							placeholder="Email"
							// // Add an element prop to change the type of input
							// element="select"
							validate={[required, isValidEmail]}
						/>
						<Field
							name="password"
                            type="password"
                            label="Password"                            
							component={Input}
							placeholder="Password"
							validate={[required, atLeastEight, emailTooLong]}
						/>
						<Field
							name="confirmPassword"
                            type="password"
                            label="Confirm Password"
							component={Input}
							placeholder="Confirm Password"
							validate={[
								required,
								atLeastEight,
								emailTooLong,
								passwordsMatch
							]}
						/>
						<button type="submit" className={styles.button}>Sign up</button>
					</fieldset>
				</form>

				<Link to="/login" className={formStyles.registerLink}>Already have an account? Login here.</Link>

			</main>
		);
	}
}

const mapStateToProps = state => ({
	// loading: state.auth.loading
});

Registration = connect(mapStateToProps)(Registration);

export default reduxForm({
	form: 'registration'
})(Registration);
