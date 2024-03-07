# USA Coding Jobs Database

## Overview

This project is designed to manage a database of coding job listings in the USA. It utilizes a tech stack comprising MongoDB, Mongoose, Express, and Postman for API testing. The database is structured to hold detailed information about each job listing, including position titles, application URLs, benefits, and more.

## Features

- **Job Listing Details**: Each job listing includes the following information:
  - `positionTitle`: The title of the job position.
  - `applyUrl`: URL to apply for the job.
  - `benefitsUrl`: URL to view job benefits.
  - `promotionPotential`: Information about career advancement possibilities.
  - `relocation`: Relocation options or requirements.
  - `securityClearance`: Security clearance requirements.
  - `drugTestRequired`: Information on whether a drug test is required.
  - `minimumPay`: The minimum pay rate for the position.
  - `maximumPay`: The maximum pay rate for the position.
  - `description`: A detailed description of the job.
  - `publicationStartDay`: The start date of the job listing.
  - `applicationClosedDay`: The application deadline.



## API Endpoints

- **CRUD Operations**: Create, read, update, and delete job listings in the database through defined API endpoints.

### Get All Coding Jobs
- **GET** `/api/codingjobs`
  - Retrieves all coding job listings from the database.

### Get a Specific Coding Job
- **GET** `/api/codingjobs/:id`
  - Retrieves a specific coding job by its ID.

### Create a New Coding Job
- **POST** `/api/codingjobs`
  - Creates a new coding job listing with data provided in the request body.

### Update a Coding Job
- **PUT** `/api/codingjobs/:id`
  - Updates an existing coding job listing by its ID with data provided in the request body.

### Delete a Coding Job
- **DELETE** `/api/codingjobs/:id`
  - Deletes a specific coding job listing by its ID.