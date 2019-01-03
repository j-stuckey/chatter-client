import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import {
	required,
	atLeastThree,
	atLeastEight,
    passwordsMatch
} from '../validators';
import Input from './input';

import formStyles from './styles/forms.module.css';
import styles from './styles/Registration.module.css';
import { registerUser } from '../actions/users';

class Registration extends Component {

    handleFormSubmit = (values) => {
        const user = values;
        console.log(user);
        // this.props.dispatch(registerUser(user))
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
                            // label="First Name"
							component={Input}
							placeholder="First Name"
							validate={[required]}
						/>
						<Field
							name="lastName"
                            type="text"
                            // label="Last Name"                            
							component={Input}
							placeholder="Last Name"
							validate={[required]}
						/>
						<Field
							name="Username"
                            type="text"
                            // label="Email"                            
							component={Input}
							placeholder="Username"
							// // Add an element prop to change the type of input
							// element="select"
							validate={[required, atLeastThree]}
						/>
						<Field
							name="password"
                            type="password"
                            // label="Password"                            
							component={Input}
							placeholder="Password"
							validate={[required, atLeastEight]}
						/>
						<Field
							name="confirmPassword"
                            type="password"
                            // label="Confirm Password"
							component={Input}
							placeholder="Confirm Password"
							validate={[
								required,
								atLeastEight,
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
