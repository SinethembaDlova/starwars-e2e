# 🧪 Cypress E2E Testing for Star Wars Movies App

## 📖 Overview
This directory contains end-to-end tests for the Star Wars Movies application using Cypress. The tests ensure that the application's critical user flows and UI components work correctly from a user's perspective.

## ✅ What We Test
- Automatic navigation functionality from `/` to `/movies`.
- Navigation functionality: logo clicks navigates you to `/`.
- UI element rendering (movie cards, movie information)
- Data display accuracy (correct movie titles, descriptions, producer information)
- User interactions (clicking buttons, navigating between pages)

## 🚀 Running the Tests

### Prerequisites
- Node.js installed

### Installation
Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/SinethembaDlova/starwars-e2e.git

# Navigate to the project directory
cd starwars-e2e

# Install dependencies
npm install

# Open Cypress Test Runner
npm run cypress:open

# Run tests in headless mode
npm run cypress:run
```

## 📁 Test Structure

```
cypress/
├── e2e/             # Test specifications
│   ├── home.cy.js           # Home page tests
│   └── movie-list.cy.js     # Movie listing page tests
├── fixtures/        # Test data and mock responses
│   ├── movie-1.json         # Mock data for movie 1
│   ├── movie-6.json         # Mock data for movie 6
│   └── movies.json          # Mock data for all movies
├── support/         # Custom commands and utilities
│   ├── commands.js  # Custom Cypress commands
│   └── e2e.js       # Configuration for E2E tests
└── videos/          # Recorded test runs (gitignored)
```

## 📋 Test Cases

### Movie List Page Tests
- Verifies automatic navigation from / to /movies.
- Verifies app logo visibility and navigation.
- Confirms the correct number of movie cards are displayed.
- Validates movie information accuracy (title, producer, description).
- Tests navigation to movie details when clicking the View button.

## 🛠️ Custom Commands

We've implemented several custom commands to simplify test writing:

- `getMovieCards()` - Selects all movie card elements
- `getMovieCard(index)` - Selects a specific movie card by index
- `getMovieElementbyAriaLabel(aria)` - Selects elements by aria-label

## 🔄 API Stubbing

The tests use API stubbing to provide consistent test data:
- `stubMoviesApi()` - Stubs the movies list API endpoint
- `stubMovieApi(id)` - Stubs a specific movie API endpoint

## 🤝 Contributing

Contributions are welcome via pull-requests on feature branches using Git Flow.

```bash
# Create a feature branch
git flow feature start your-feature-name

# Make your changes and commit them
git add .
git commit -m "Add your test feature"

# Publish the feature branch
git flow feature publish your-feature-name

# Finish the feature and merge to develop
git flow feature finish your-feature-name
```

## 💡 Best Practices

- Use the `beforeEach` hook for common setup steps
- Wait for API responses with `cy.wait('@aliasName')`
- Normalize text when comparing long descriptions
- Use specific assertions with helpful error messages