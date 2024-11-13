## Angualar Hackaton

## Problem Statement

Smiles (Happiest Mind) library is facing challenges in managing their book inventory efficiently. They need a user-friendly system to track book details

## Solution

Develop a web-based Book Management System using Angular. The system will provide the features for 

-> admin can add , edit , delete books
-> user can view the books and search the books

# Componnets:
- Header Componnet Should contains the navigation for user Registration, Login and Logout, `logout` Navigation will display once user is logeed in 
- Admin Dashboard Componnet Should contains navigation for add book and display Books and search book
- User Dashboard Componnet Should Contains Naviagtion for view all books, search Books

- Register Component Should contains ` FirstName, LastName, empoyeeId, email(official email Id), password, dob, location, designation`

- Login componnet Should contains email and password

- add Book Componnet should contains `BookName, autherName, categories, bookimage(url), publishYear, edition, language, extension`
    - extension like pdf, word, video
    - use textarea to get multiple categories for a single books, store all in categories object
- Display Book Componnet Should Display alll books in Card format with edit and delete button for admin, readLater button for User
    - user clicked readlater , it stores in Json file with Faveratioes object including userEmail and book details
- Read Later Componnet Should Display the current users readlater books

- Search book components should contain textbox to get the bookname|autherName to search a book, based on search diaplay books in the same componet using card format


## Notes

- Use Angualr Material for Material For design 
- use Form validation 
- use the Service and Models
- Test the each componnets with 2 Test Cases




