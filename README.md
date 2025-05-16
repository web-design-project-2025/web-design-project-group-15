Cinema Courtrooml
Welcome to Cinema Courtroom, a web platform where films face justice! This project is a movie review website designed by three New Media Design students at Jönköping University. Users can explore movies by categories, read reviews framed as trials, access news articles, and manage their accounts through login and signup functionalities. Built with HTML, CSS, and JavaScript, Cinema Courtroom emphasizes usability, accessibility, and a thematic courtroom-inspired design.
Table of Contents

1. Features
2. Installation
3. Usage
4. Project Structure


1. Features


- Category Carousels: Browse movies in categories like Chickflick, Horror, Nostalgic, and Serious on the Categories page (categories.html). Horizontal carousels with scroll buttons allow easy navigation through movie posters, populated dynamically from movies.json using category.js.
- Homepage Carousels: The homepage (index.html) features two auto-scrolling carousels for "Recent Verdicts" (Serious category) and "Upcoming Trials" (Girly category), implemented via javascript.js with seamless looping and hover-to-pause functionality.
- Specific Film Pages: Detailed movie pages (specific_film.html) display synopses, evidence, and verdicts (e.g., "GUILTY OF BEING: Chickflick"). Users can interact with dropdowns for "Evidence" and "Appeal This" (like/dislike buttons), with content dynamically loaded from movieInfo.json using specific_film.js.
- News Section: The News page (news.html) showcases articles, including a featured "Top 5 Movies of All Time" list and updates on cinema trends, styled with a clean layout.
- User Authentication: Login (login.html) and Sign Up (SignUp.html) pages allow users to create accounts and log in, with data stored in localStorage via login.js and signUp.js. Password confirmation and duplicate username checks are implemented.
- About Page: The About page (about.html) introduces the three creators (Alva, Lynn, Panna) with images and a brief description of the project.
- Consistent Design: All pages share a cohesive design with a yellow header and footer (rgb(242, 166, 24)), dark background (rgb(2, 1, 34)), and light text (rgb(221, 219, 241)), using fonts "Abril Fatface", "Special Elite", and "PT Serif" from Google Fonts.
- Accessibility Features: Includes alt text for images, high-contrast colors, and a focus on semantic HTML (though keyboard navigation is not fully implemented across all interactive elements).


2. Installation


To set up the Cinema Courtroom project locally, follow these steps:

- Clone the Repository:
git clone https://github.com/web-design-project-2025/web-design-project-group-15.git

Navigate to the Project Directory:
- cd web-design-project-group-15

Open the Project:
- No additional dependencies are required since this is a static website built with HTML, CSS, and JavaScript.

Open index.html in a web browser to view the homepage:
- open index.html

Alternatively, use a local development server (e.g., via VS Code’s Live Server extension) for a better development experience.


3. Usage


Exploring the Website

- Homepage (index.html): Start here to see an overview of Cinema Courtroom. View auto-scrolling carousels for "Recent Verdicts" and "Upcoming Trials" with movies like The Godfather and Mean Girls. Click on the "Categories" link in the navigation bar to explore more.
- Categories Page (categories.html): Browse movies by category (Chickflick, Horror, Nostalgic, Serious). Use the left and right scroll buttons to navigate through movie posters in each carousel. Click a category image (e.g., Chickflick) to visit a dedicated page (chickflick.html).
- Specific Film Page (specific_film.html): Access detailed movie reviews by clicking a movie poster. View the synopsis under "Opening Arguments," additional details under "Evidence," and the final verdict. Use the "Appeal This" dropdown to like or dislike the verdict.
- News Page (news.html): Read articles about cinema trends, including a featured "Top 5 Movies of All Time" list with films like The Godfather and Spirited Away.
- Login and Sign Up (login.html, SignUp.html): Create an account via the Sign Up page, then log in to access user-specific features. Note: The Favorites page (favourites.js) is referenced but not fully implemented in the provided files.
- About Page (about.html): Learn about the creators and the project’s purpose.

Customization

- Styling: Modify reacurring_designs.css for global styles (e.g., header, footer, background), or page-specific CSS files (e.g., categories.css, main.css) to adjust layouts, colors, or fonts.
- Adding Movies: Update movies.json to add new movies to carousels, ensuring the category field matches the target carousel (e.g., "Girly Caroussel" for Chickflick). Add corresponding details in movieInfo.json for specific film pages.
- JavaScript Enhancements: Edit category.js to adjust carousel scrolling behavior, or specific_film.js to modify how movie data is displayed on specific film pages.


4. Project Structure


web-design-project-group-15/
├── css/                     # Stylesheets
│   ├── about.css           # Styles for About page
│   ├── categories.css      # Styles for Categories page (includes responsiveness)
│   ├── login.css          # Styles for Login page
│   ├── main.css           # Styles for Homepage
│   ├── news.css           # Styles for News page
│   ├── reacurring_designs.css  # Shared styles across all pages (header, footer, fonts)
│   ├── signUp.css         # Styles for Sign Up page
│   ├── specific_category.css  # Styles for specific category pages (e.g., chickflick.html)
│   └── specific_film.css  # Styles for specific film pages
├── img/                     # Images (logos, movie posters, category icons, etc.)
│   ├── logo 2 yellow transparent.png
│   ├── chickflick.png
│   ├── horror.png
│   ├── alva.png
│   ├── lynn.png
│   ├── panna.png
│   ├── courtroom.png
│   ├── film-placeholder-image.webp
│   ├── LoginButton.png
│   ├── Posters/           # Movie posters
│   │   ├── TheShakeshaw.jpg
│   │   ├── MeanGirls.jpg
│   │   └── ... (other posters)
│   └── movie-pictures/    # Images for specific film pages
│       ├── meangirls-scene.jpg
│       └── meangirls-regina.jpg
├── js/                      # JavaScript files
│   ├── category.js         # Handles category page carousels
│   ├── favourites.js      # Intended for Favorites page (not fully implemented)
│   ├── javascript.js      # Handles homepage auto-scrolling carousels
│   ├── login.js           # Handles login functionality
│   ├── signUp.js          # Handles sign-up functionality
│   └── specific_film.js   # Handles specific film page interactivity
├── json/                    # JSON data for movies
│   ├── movies.json        # Catalog of movies with categories and posters
│   └── movieInfo.json     # Detailed movie information for specific film pages
├── index.html              # Homepage
├── categories.html         # Categories page with movie carousels
├── chickflick.html         # Specific category page for Chickflick movies
├── specific_film.html      # Detailed page for individual movies
├── about.html              # About page with creator info
├── news.html               # News page with articles
├── login.html              # Login page
└── SignUp.html             # Sign Up page
