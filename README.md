# Slidely AI-Task 2 (FORMS APP)

This app is made as a submission for Slidely.Ai take home task.

It has two components,the Forms App and its backend.
Make sure to run the backend app first then the Windows app.

# Backend (Nodejs+Typescript)

Clone the repo/folder to any desired folder.Then open any command line editor of choice.
Make sure to have installed typescript to start with

Step 1 : run "npm run build" .This builds the .js files

Step 2 : Simply execute "npm run start" to start the backend server.

# API ENDPOINTS
1 . **/ping**
  -Returns true on hitting the endpoint
  
2 . **/read**
  -Takes in an integer index as arguments,gets the submission information.Returns error if not found or index out of bounds
  
3 . **/submit**
  -Takes informaton about Name,Email,Phone,Website link and Stopwatch time as input.Returns success code on successful entry creation.
