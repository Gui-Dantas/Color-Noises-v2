
# Project Name
Color Noises // Undecided 

<br>
## Description

A WebApp for color noises that promotes better focus, relaxation and sleep. 

<br>
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know that it's my fault
- **500** - As a user I want to see a nice error page when the team screw it up so that I know that it's not my fault
- **homepage** - As a user I want to be able to access the homepage so I can access information about the WebApp. 
- **sign up** - As a user I want to able to sign up and create an account so that I can access the web app. 
- **login** - As a user I want to be able to log into the web page so I can access the web app, customise my profile and make changes to my favourite list. 
- **logout** - As a user I want to be able to log out from the web page so no one can access my account
- **favorite list** - As a user I want to be able to see a list of my favorite color noises and add my favourite color noise to my list (add and delete)
- **edit user** - As a user I want to be able to edit and customise my profile 
- **result** - As a user I want to have full access of the app 
- **colour noises list** - As a user I want to be able to listen to how each color noise sounds, the story behind each noise color, the benefit of each noise color, as well as the
 the ability to favourite a colour noise and saves it to my list. 

<br>

## Server Routes (Back-end):

| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | { username ,email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [username], [imageUrl] } |
| `GET`      | `/private/favorites`               | Private route. Render the `favorites` view.                  |                                                          |
| `POST`     | `/private/favorites/`              | Private route. Adds a new favorite sound for the current user.     
| `DELETE`   | `/private/favorites/:soundId` | Private route. Deletes the existing favorite sound from the current
user. |                                                          |
| `GET`      | `/colorednoises`                     | Renders `colornoise-list` view.                              |                                                          |
| `GET`      | `/colorednoise/details/:id`         | Renders `colornoise-details` view for the particular color noise. |                                                          |



## Models

User model

```javascript
{
  username: String,
  email: String,
  password: String,
  favorites: [FavoriteId],
}

```

Favorites model:

```javascript
{
  placeId: String
}

```

Sound model:

```javascript
{
  name: String,
  description: String,
  imageurl: 
  soundfile 
}



<br>

## API's


<br>


## Packages


<br>



## Backlog

[See the Trello board.](https://trello.com/b/jJlA9FRS/colored-noises)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()

### Slides

The url to your presentation slides

[Slides Link]()

### Contributors
Joie - [`<Jogurgihthub412>`](https://github.com/person1-username) - 

Guilherme Dantas- [`<Gui-Dantas>`](https://github.com/person2-username) - 
