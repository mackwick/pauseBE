# Pause: A Meditation App

- **Mackenzie Wicker - General Assembly Capstone Project**
- **Description: A web application for tracking your daily meditation.**

- GitHub Url: https://github.com/mackwick/pauseBE
- Deployed Backend:
- Trello Board: https://trello.com/b/uMhHcCwV/pause-ga-capstone-project

## Dependencies

- Express
- Node
- TypeScript
- PostgresQL
- ETC TBD

## Route Map

|    Route    |   Endpoint   | Method |                                 Description                                  |
| :---------: | :----------: | :----: | :--------------------------------------------------------------------------: |
|    Index    |    /pause    |  Get   |                 Returns a log of meditation+journal sessions                 |
|   Destroy   |  /pause/:id  | Delete |                       Delete a meditation record by id                       |
|   Update    |  /pause/:id  |  Put   |                       Update a meditation record by id                       |
|   Create    |    /pause    |  Post  | Use the timer to meditate and then add the session to the log (LANDING PAGE) |
|    Show     |  /pause/:id  |  Get   |                 Return details of a meditation session by id                 |
| Signup Form | /user/signup |  Get   |                           Returns user signup form                           |
|   Signup    | /user/signup |  Post  |                        Creates user and logs them in                         |
| Login Form  | /user/login  |  Get   |                           Returns user login form                            |
|    Login    | /user/login  |  Post  |                               Logs the user in                               |
|   Logout    | /user/logout |  Get   |                              Logs the user out                               |

## ERD (Entity Relationship Diagram)

![ERD](https://i.imgur.com/9zXINv9.jpeg)
