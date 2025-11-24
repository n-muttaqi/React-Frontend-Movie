# Movie Explorer – Full Stack E-Commerce Style Movie Platform  
Built with React, Node.js, Express, MySQL, JWT, and the TMDB API

A full-stack movie browsing platform where users can search for movies, view details, save favorites, and interact with a clean React UI. Backend services handle authentication, API routing, and database storage.

---

## Features

### Frontend (React)
- Interactive movie search UI built with React components, hooks, and the Context API  
- Integration with the TMDB API for posters, ratings, summaries, and genres  
- Client-side routing with React Router (Home, Favorites, and detailed movie pages)  
- Reusable UI components such as MovieCard, FavoritesList, and layout containers  
- Clean CSS styling for responsive and fast UI  
- State management for search results, selected movies, and favorites  

### Backend (Node.js + Express + MySQL)
- REST API built using Express  
- User authentication with JWT (login and registration)  
- MySQL database for storing:
  - User accounts  
  - Favorites  
  - Session tokens  
- Secure API endpoints for user actions  
- Environment-based configuration using `.env`  

---

## Tech Stack

### Frontend
- React  
- React Router  
- Context API  
- CSS  

### Backend
- Node.js  
- Express.js  
- MySQL  
- JWT Authentication  
- TMDB API  

---

## Running the Project

This project has a separate frontend and backend. Each must be started individually after installing the required Node modules.

### 1. Start the Backend
```bash
cd server
npm install
npm start
```
### 2. Start the Frontend
```bash
cd client
npm install
npm start
```
