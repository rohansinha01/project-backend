# Barter Circus

- **Alex Greenberg**
- **Rohan Sinha**
- **Nicholas Murray**
- **Daniel Ji**

- **We have decided to create a safe place for people to share the items they want to sell. This is the Barter Circus.**

- **https://github.com/rohansinha01/project-backend**
- **Will add deployed site later**
- **https://trello.com/b/XTqwiMpU/unit3-project3**

## List of Dependencies

- express
- mongoose
- morgan
- bcrypt 

## Backend Route Map

| Route Name | Endpoint | Method | Description |
|------------|----------|--------|-------------|
| Item Index | /items    | GET    | Renders all of the bookmarks on a page |
| New Item Form | /item/new   | GET    | Renders a form to add a new item |
| Create Item | /item    | POST    | Creates the new item from the form |
| Edit Item Form | /item/:id/edit    | GET    | Renders a form to edit an existing item |
| Update Item | /item/:id   | PUT    | Updates the existing item from the form  |
| Remove Item | /item/:id   | DELETE    | Deletes the item selected |
| Show Item | /item/:id    | GET    | Renders a detailed page of the item |

## ERD (Entity Relationship Diagram)
![Entity Relationship Diagram](https://i.imgur.com/TnrziHF.png)