
# CineRental API Backend

cinerental-backend is a RESTful API that powers the backend for a movie rental service. It enables users to browse movies, rent films, manage their accounts, and perform various other actions related to movie rentals.


## Technology Used
node.js 18.15.0  
express.js 4.18.2  
bcrypt 5.1.1  
compression 1.7.4  
config 3.3.9  
helmet 7.0.0   
joi 13.7.0  
joi-objectid 4.0.2  
Jsonwebtoken 9.0.2  
mongoose 5.13.15  
winston 3.10.0
## Demo

Registering user, returns a token

![cineplex-registerUser](https://github.com/DoanhTran03/cinerental-backend/assets/103083272/95c682ce-e439-4601-9635-26cab058a716)

Authenticate user, get the token from backend

![cinerental-authenticateUser](https://github.com/DoanhTran03/cinerental-backend/assets/103083272/e28be6a9-571c-468e-aafe-4e946f1bc154)

Request data to movies route with authenticated token

![cinerentail-getData](https://github.com/DoanhTran03/cinerental-backend/assets/103083272/3339ab38-2789-42c8-833d-fdb3da7d7ec1)


## Documentation

endpoint: https://mighty-thicket-80898-9d81752863a6.herokuapp.com/

### Routes:
To get x-auth-token for authentication, go to POST /users or POST /auth, other routes will require x-auth-token for access!
#### users
get a list of users: GET /users  
register a new user: POST /users

#### auth
authenticate account: POST /auth

#### genres
get a list of genres: GET /genres  
post a new genres: POST /genres  
update a genre: PUT /genres/{id}  
delete a genre: DELETE /genres/{id}

#### movies
get a list of movies: GET /genres  
post a new movies: POST /genres  
update a movies: PUT /genres/{id}  
delete a movies: DELETE /genres/{id}


## Documentation

endpoint: https://mighty-thicket-80898-9d81752863a6.herokuapp.com/

### Routes:
To get x-auth-token for authentication, go to POST /users or POST /auth, other routes will require x-auth-token for access!
#### users
get a list of users: GET /users  
register a new user: POST /users

#### auth
authenticate account: POST /auth

#### genres
get a list of genres: GET /genres  
post a new genres: POST /genres  
update a genre: PUT /genres/{id}  
delete a genre: DELETE /genres/{id}

#### movies
get a list of movies: GET /genres  
post a new movies: POST /genres  
update a movies: PUT /genres/{id}  
delete a movies: DELETE /genres/{id}


##  
   
Thank you for visting the CineRental API Backend. Enjoy exploring and playing around with the project!




