-- This is an SQL comment
-- Command to create a database

CREATE DATABASE library_db

-- Connect to the database before executing the remaining statements

-- Command to create a table
-- create the table 'Author'

CREATE TABLE author (
    id            INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    full_name     VARCHAR(50) NOT NULL,
    country       VARCHAR(30) NOT NULL,
    birth_year    INT NOT NULL,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create the table 'Book'
CREATE TABLE book (
    id                  INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title               VARCHAR(100) NOT NULL,
    isbn                VARCHAR(30) UNIQUE NOT NULL,
    publication_year    INT NOT NULL,
    available           BOOLEAN DEFAULT TIME,
    author_id           INT NOT NULL,
    created_at          TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create the table 'Member'

CREATE TABLE member (
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name  VARCHAR(50) NOT NULL,     
    last_name   VARCHAR(50) NOT NULL,
    email       VARCHAR(100) UNIQUE NOT NULL,
    phone       VARCHAR(20) UNIQUE NOT NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
___________________________________________________________________________________

INSERT INTO member (first_name, last_name, email, phone)
VALUES ('Kevin', 'Durant', 'kevin.durant@gmail.com', '+45132313122'),
('Stephen', 'Curry', 'steph.curry@gmail.com', '+233442434342'),
('Lebron', 'James', 'kingjames@gmail.com', '+672343421111'),
('Klay', 'Thompson', 'splashklay@gmail.com', '+43663411321'),
('Jaylen', 'Brown', 'brown343@gmail.com', '+5992342121');
__________________________________________________________________________________
___________________________________________________________________________________

-- Create the table 'Loan'
CREATE TABLE loan (
    id          INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    member_id   INT NOT NULL,
    book_id     INT NOT NULL,
    loan_date   DATE NOT NULL,
    return_date DATE,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
___________________________________________________________________________
INSERT INTO loan (member_id, book_id, loan_date, return_date)
VALUES (1, 5, '01-07-2026', '31-07-2026'),
(2, 4, '04-11-2026', '06-09-2026'),
(3, 2, '11-24-2025', '01-01-2026'),
(4, 3, '05-18-2026', '06-06-2026'),
(5, 1, '11-13-2024', '05-31-2025');

___________________________________________________________________________
__________________________________________________________________________

-- Command to insert data (rows) in a table
-- Insert rows in the table 'author'

INSERT INTO author (full_name, country, birth_year)
VALUES ('J.K Rowling', 'United Kingdom', 1965);

INSERT INTO author (full_name, country, birth_year)
VALUES ('George Orwell', 'United Kingdom', 1983);

INSERT INTO author (full_name, country, birth_year)
VALUES
('Gabriel Garcia Marquez', 'Colombia', 1927),
('Jane Austen', 'United Kingdom', 1775),
('Stephen King', 'United States', 1947);
__________________________________________________________________________


-- Insert rows in the table 'book'
INSERT INTO book (title, isbn, publication_year, available, author_id)
VALUES
('Harry Potter and the Philosopher''s Stone', '9780747532743', 1997, TRUE, 1),
('1984', '9780451524935', 1949, TRUE, 2),
('One hundred years of solitude', '9780307474728', 1967, TRUE, 3),
('Pride and Prejudice', '9780141439518', 1813, FALSE, 4),
('The Shining', '9780307743657', 1977, FALSE, 5);