# Nozama

A fake Shopping Website

# Background

I started this project to gain familiarity with MongoDB

# User session management

a cookie called "default" is used to track user sessions. When a user visits nozama, they are assigned a cookie called "default". When a user logs in, if new user, new customer document is created with cookie. If existing user, user document is updated with new cookie. When browser makes request, server checks if sent cookie corresponds with any user. If yes, they are logged in. If no, they are not logged in.

# folder names

- /middleware/api/mongo: all these routes access the database in some way
