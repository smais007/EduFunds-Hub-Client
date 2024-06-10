
# EduFunds Hub

This project is designed to implement a property listing platform with several key functionalities including authentication, price filtering, and more.

## Table of Contents

- [Demo Links](#demo-links)
- [Project Features](#project-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo Links

- *Live Site*: [Live Site Link](https://smais-scholarship-management.web.app/)


## Project Features

1. *Authentication*
    - User registration and login.
    - Toggle between Login and Registration views.
    - Implement social login.
    - Error handling for:
      - Password less than 6 characters.
      - Password without a capital letter.
      - Password without a special character.
      - Login errors for mismatched email or password.

2. *User Dashboard (Private Route)*
    - *My Profile*: Display user information such as name, image, and role.
    - *My Applications*: List all applied scholarships in a tabular format.
    - *My Reviews*: List user reviews with options to delete or edit.

3. *Moderator Dashboard (Private Route)*
    - *My Profile*: Display moderator information.
    - *Manage Scholarships*: Functions to manage scholarship listings.
    - *All Reviews*: Overview of all reviews with moderation options.
    - *Add Scholarship*: Option to add new scholarships.
    - *All Applied Scholarships*: List of all applied scholarships.

4. *Other Features*
    - Axios interceptor implementation.
    - Price based filtering system on the "All Properties Page".
    - Implement sliders using swiper.js.
    - Form handling with react-hook-form.
    - Responsive 404 page.

## Technologies Used

- *Frontend*: React, Axios, Swiper.js, React-Hook-Form
- *Backend*: Firebase (or other backend service)
- *Authentication*: Firebase Auth or another service with social login capability
- *Styling*: CSS, Tailwind CSS (or your choice of styling framework/library)

## Installation:

1. Clone the repository:
   ```bash
   https://github.com/programming-hero-web-course-4/B9A10-client-side-smais007
   ```
2. Navigate to the project directory:
   ```bash
   cd B9A10-client-side-smais007
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Getting Started:

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and go to `http://localhost:5173` to view the website.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

`VITE_GOOGLEAPIKEY`

## Deployment

1. First initialized firebase

```bash
sudo npm install -g firebase-tools
```

2. Login to your firebase consol

```bash
firebase Login
```

3. initialized firebase in this project

```bash
firebase init
```

4. Then Press Space to select features, then Enter to confirm your choices.

   > - Select `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`

5. Now enter foollowing command

   > - What do you want to use as your public directory? `dist`
   > - Configure as a single-page app (rewrite all urls to /index.html)? (y/N) `yes`
   > - Set up automatic builds and deploys with GitHub? (y/N) `no`

6. Now buld the dist folder

```bash
npm run build
```

7. Finally this time to deploy website in firebase, now enter this command

```bash
firebase deploy
```

## Contact

- For any inquiries or support, please contact [Smais Shawon](https://www.github.com/smais007)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
