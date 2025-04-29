"use client";

// This file is used to store user authentication state
// It exports functions to manage user data and authentication state
// Store users in localStorage for persistence

// Get all users from localStorage
const getAllUsers = () => {
	if (typeof window !== "undefined") {
		const storedUsers = localStorage.getItem("blackwell_users");
		return storedUsers ? JSON.parse(storedUsers) : [];
	}
	return [];
};

// Add a new user to localStorage
const addUser = (user) => {
	if (typeof window !== "undefined") {
		const users = getAllUsers();
		users.push(user);
		localStorage.setItem("blackwell_users", JSON.stringify(users));
	}
};

/**
 * @typedef {Object} User
 * @property {string} id - User ID
 * @property {string} firstName - User's first name
 * @property {string} lastName - User's last name
 * @property {string} email - User's email address
 * @property {string} mobile - User's mobile number
 * @property {string} country - User's country
 */

/**
 * Store the user data in localStorage
 * @param {User} userData - The user data to store
 */
export const storeUser = (userData) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("blackwell_user", JSON.stringify(userData));
	}
};

/**
 * Get the stored user data from localStorage
 * @returns {User|null} The stored user data or null if not found
 */
export const getStoredUser = () => {
	if (typeof window !== "undefined") {
		const storedUser = localStorage.getItem("blackwell_user");
		return storedUser ? JSON.parse(storedUser) : null;
	}
	return null;
};

/**
 * Clear the stored user data from localStorage
 */
export const clearUserData = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("blackwell_user");
	}
};

/**
 * Check if an email already exists in the database
 * @param {string} email - The email to check
 * @returns {boolean} True if the email exists, false otherwise
 */
export const emailExists = (email) => {
	const users = getAllUsers();
	return users.some((user) => user.email === email);
};

/**
 * Login a user with email and password
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise<User>} A promise that resolves to the user data
 */
export const loginUser = (email, password) => {
	return new Promise((resolve, reject) => {
		// Initialize users if not already done
		const users = getAllUsers();
		console.log("Users loaded:", users);

		// Log the credentials being passed
		console.log("Trying to login with:", email, password);
		setTimeout(() => {
			const users = getAllUsers();
			const user = users.find(
				(u) => u.email === email && u.password === password
			);

			if (user) {
				// Don't include password in the stored user data
				const { ...userData } = user;
				storeUser(userData);
				resolve(userData);
			} else {
				reject(new Error("Invalid email or password"));
			}
		}, 1000);
	});
};

/**
 * Register a new user
 * @param {Object} userData - The user registration data
 * @returns {Promise<User>} A promise that resolves to the user data
 */
export const registerUser = (userData) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// Check if email already exists
			if (emailExists(userData.email)) {
				reject(new Error("Email already exists"));
				return;
			}

			if (userData.email && userData.password) {
				const newUser = {
					id: "user_" + Date.now(),
					firstName: userData.firstName,
					lastName: userData.lastName,
					email: userData.email,
					mobile: userData.mobile,
					country: userData.country,
					password: userData.password // In a real app, this would be hashed
				};

				// Add user to the database
				addUser(newUser);

				// Don't include password in the stored user data
				const { ...newUserData } = newUser;
				storeUser(newUserData);
				resolve(newUserData);
			} else {
				reject(new Error("Invalid user data"));
			}
		}, 1000);
	});
};

/**
 * Logout the current user
 * @returns {Promise<void>}
 */
export const logoutUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				clearUserData();
				console.log("Logout successful");
				resolve();
			} catch (error) {
				console.error("Logout error:", error);
				reject(new Error("An error occurred during logout"));
			}
		}, 500);
	});
};
