import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles/Dashboard.module.css';
import { Greeting } from './Greeting';
import { Header } from './Header';
import { LoadingSpinner } from './LoadingSpinner';
import { BurgerMenu } from './BurgerMenu';

export class Dashboard extends Component {
	render() {
		if (!this.props.isLoggedIn) {
			return <Redirect to="/login" />;
		}
		if (this.props.loading) {
			return <LoadingSpinner />;
		} else {
			return (
				<div className={styles.container}>
					<Header />
					<ChatBox user={this.props.currentUser} />
				</div>
			);
		}
	}
}

class ChatBox extends React.Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	posts: []
		// }
		this.posts = [];
	}

	handleSubmit = event => {
		event.preventDefault();
		this.posts.push({
			author: `${this.props.user.username}`,
			comment: event.target.chat.value
		});

		event.target.chat.value = '';

		console.log(this.posts);
	};

	render() {
		var posts = this.posts.forEach(post => {
			return (
				<p>
					{post.author}: {post.comment}
				</p>
			);
		});

		return (
			<React.Fragment>
				<form
					className={styles.chatboxContainer}
					onSubmit={this.handleSubmit}
				>
					<label htmlFor="chat" />
					<input
						placeholder="Enter your message..."
						name="chat"
						type="text"
						className={styles.chatbox}
					/>
					<button type="submit" className={styles.chatButton}>
						Submit
					</button>
				</form>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		isLoggedIn: state.auth.currentUser !== null,
		currentUser: state.auth.currentUser
	};
};

Dashboard.propTypes = {
	currentUser: PropTypes.object,
	isLoggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(Dashboard);
