#Cheat Sheet

1.  Initialize project and structure
2.  Setup dev enviroment
3.  Install and setup Express
    * add static middlewares
    * add body parser
    * add routes
4. Add static resources
5. Add views folder with ready htmls
6. Add express-handlebars view engine
    * install
    * add to express
    * config extension
    * config views folder (only for src)
    * add main layout
    * add partials folder
    * fix static paths
    * fix navigation to home
    * render home page
7. Add controllers folder with home controller
8. Add database
    * install mongoose
    * connect database
9. Authentication
    * add user Controller
    * add controller to routes
    * fix header navigation to login, register and logout
    * render login page
    * render register page
10. Add user model
    * add unique index for username
    * validate password
11. Modify login and register forms
12. Add register and login post actions
13. Add user manager
    * require in user controller
    * add register method
    * validate if user already exists
14. Hash password
    * install bcrypt
    * hash password
15. Login 
    * find user by username
    * check password with hash
16. Generate jwt token
    * install jwt
    * promisify jsonwebtoken !
    * create SECRET
    * generate token in manager.login
17. Return token in cookie.
    * instal cookie-parser
    * config cookie-parser
    * set cookie with token
18. Logout
19. Authentication middleware
    * create base middleware
    * use middleware
    * implement auth middleware
    * attach decodet token to request
    * handle invalid token