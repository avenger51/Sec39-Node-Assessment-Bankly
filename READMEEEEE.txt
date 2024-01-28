I spent the better part of a day just drilling down and fixing this...here is the continual error:

  ● POST /auth/register › should allow a user to register in

    getaddrinfo ENOTFOUND base

The fix is apparently having to specify the user, pass, and address of the database.  

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql://postgres:password@localhost/bankly_test'
    : 'postgresql://postgres:password@localhost/bankly';

