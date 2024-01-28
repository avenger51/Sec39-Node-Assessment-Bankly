Error 1:
File: /middleware/auth.js
Change: 
      //added a token check
function authUser(req, res, next) {
  try {
    const token = req.body._token || req.query._token;
    if (token) {
      jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
        if (err) {
     
          err.status = 401;
          return next(err);
        } else {
    
          req.curr_username = decodedToken.username;
          req.curr_admin = decodedToken.admin;
          return next();
        }
      });
    } else {
      return next();
    }
  } catch (err) {
    err.status = 401;
    return next(err);
  }
}

module.exports = {
  requireLogin,
  requireAdmin,
  authUser
};

ERROR 2:
File: /models/user.js
Change: 
    // if no user, the error isn't thrown so added 'throw':
    if (!user) {
      throw new ExpressError('No such user', 404);
    }

    return user;
  }

ERROR 3:
File: routes.test.js
Change: Added better existing user testing

//added better test for existing user
  test('should not allow a user to register with an existing username', async () => {
    const existingUser = {
      username: 'existing_user',
      password: 'existing_password', // Add the existing user's password
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890'
      // Add other necessary user data here
    };
  
    // Create the existing user in your database or data store
    await db.query(
      `INSERT INTO users (username, password, first_name, last_name, email, phone)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [
        existingUser.username,
        existingUser.password,
        existingUser.first_name,
        existingUser.last_name,
        existingUser.email,
        existingUser.phone
      ]
    );
  
    const newUser = {
      username: 'existing_user', // Use the same username as the existing user
      password: 'password123',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    };
  
    const response = await request(app)
      .post('/auth/register')
      .send(newUser);
  
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      status: 400,
      message: `There already exists a user with username 'existing_user'`, // Updated message
    });
  });
  
ERROR 4:
File: /routes/users.js
Added all required fields
 router.patch('/:username', requireLogin, async function(req, res, next) {
  try {
    if (!req.curr_admin && req.curr_username !== req.params.username) {
      throw new ExpressError('Unauthorized: You can only edit your own profile.', 401);
    }

    // Ensure that only allowed fields can be updated
    const allowedFields = ['first_name', 'last_name', 'phone', 'email'];
    const fieldsToUpdate = {};
    for (let field of allowedFields) {
      if (field in req.body) {
        fieldsToUpdate[field] = req.body[field];
      }
    }

    // Perform the update and fetch updated user data
    let user = await User.update(req.params.username, fieldsToUpdate);

    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});
  