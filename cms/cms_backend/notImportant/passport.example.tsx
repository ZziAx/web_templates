// // Import necessary modules
// const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const app = express();

// // --- Middleware Setup ---

// // Body parsing middleware (to read form data)
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Session middleware (Passport uses sessions to keep users logged in)
// // **IMPORTANT**: Use a strong, secret key in production!
// app.use(session({
//   secret: 'your_super_secret_key_here', // Replace with a strong, random key
//   resave: false,
//   saveUninitialized: false
// }));

// // Initialize Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// // --- Passport Local Strategy Configuration ---

// // This is where you define how to verify a user's credentials.
// // The `verify` callback typically takes `username`, `password`, and a `done` callback.
// passport.use(new LocalStrategy(
//   async function(username, password, done) {
//     // In a real application, you would query your database here
//     // to find the user by username and then check the password.

//     // For this example, let's simulate a user
//     const mockUser = { id: 1, username: 'testuser', password: 'password123' };

//     if (username === mockUser.username && password === mockUser.password) {
//       // If credentials are valid, call `done` with the user object
//       return done(null, mockUser);
//     } else {
//       // If credentials are invalid, call `done` with `false` (no user)
//       // and an optional message.
//       return done(null, false, { message: 'Incorrect username or password.' });
//     }
//   }
// ));

// // --- Passport Serialization/Deserialization ---

// // These functions tell Passport how to store and retrieve the user from the session.

// // `serializeUser` determines which data of the user object should be stored in the session.
// // Typically, you store the user's ID.
// passport.serializeUser(function(user, done) {
//   done(null, user.id); // Store the user ID in the session
// });

// // `deserializeUser` takes the ID stored in the session and fetches the full user object.
// passport.deserializeUser(async function(id, done) {
//   // In a real app, you'd query your database using the ID.
//   // For this example, we simulate finding the user by ID.
//   const mockUser = { id: 1, username: 'testuser', password: 'password123' }; // Replace with DB lookup

//   // If the user is found, call `done` with the user object.
//   // If not found, call `done` with an error or `null`.
//   done(null, mockUser);
// });

// // --- Routes ---

// // Example Login Route
// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/profile', // Redirect on successful login
//   failureRedirect: '/login-page', // Redirect on failed login
//   failureFlash: true // Allows flash messages (requires connect-flash middleware)
// }));

// // Example Protected Route
// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next(); // User is authenticated, proceed
//   }
//   res.redirect('/login-page'); // User is not authenticated, redirect to login
// }

// app.get('/profile', ensureAuthenticated, (req, res) => {
//   res.send(`Hello, ${req.user.username}! This is your profile page.`);
// });

// // Example Logout Route
// app.get('/logout', (req, res) => {
//   req.logout(function(err) { // Passport's logout function
//     if (err) { return next(err); }
//     res.redirect('/'); // Redirect after logout
//   });
// });

// // --- Server Start ---
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
