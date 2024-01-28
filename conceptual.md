### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

- What is the signature portion of the JWT?  What does it do?
A:  the Signature portion of the JWT is crucial for ensuring the integrity and authenticity of the token. It allows the recipient to verify that the JWT hasn't been tampered with and was indeed issued by the expected entity, using the specified signing algorithm and secret key.

- If a JWT is intercepted, can the attacker see what's inside the payload?
A: Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
A: The steps would be:  1.  User authentication, 2. Token generation, 3. JWT payload, 4. Token signing, 5. Token delivery, 6. Client storage, 7. Token usage, 8. Server verification, 9. Token decoding, and authorization and access granted or denied.

- Compare and contrast unit, integration and end-to-end tests.
A: Unit tests focus on individual components, integration tests work to test interactions between different components, and ed to end tests focus on testing the entire application simulating real world use.

- What is a mock? What are some things you would mock?
A: A mock is a way to simulate objects or components to behave like real world situations.  Mocking an external API to avoid real time requests would be an example.

- What is continuous integration?
A: Continuous Integration (CI) is a software development practice that focuses on frequently integrating code changes into a shared repository and automatically testing those changes to detect and address integration issues early in the development process

- What is an environment variable and what are they used for?
A: An environment variab;e is part of the environment in which a process runs.  They are used to store and manage various settings that can effect behavior of software.

- What is TDD? What are some benefits and drawbacks?
A: TDD, or Test-Driven Development, is a software development methodology in which tests are written before the actual code (production code) is implemented. A benefit is very reliable code, documentation, and faster debugging.

- What is the value of using JSONSchema for validation?
A:  It can reduce the load put on authentication mechanisms.

- What are some ways to decide which code to test?
A: You would begin with critical functionality, user requirements, risk, complexity, and performance.

- What does `RETURNING` do in SQL? When would you use it?
A: The RETURNING clause is used in conjunction with the INSERT, UPDATE, or DELETE statements to retrieve data from the affected rows after performing the respective data manipulation operation. 

- What are some differences between Web Sockets and HTTP?
A: HTTP is a request-response protocol while websockets provide bi-directional communication (where both client and server send data at any time), and HTTP messages have headers with an optional body while websocket messages are binary or text based and can be sent as streams of data.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
A:  I prefered using Flask because it was far easier for me to learn and understand.