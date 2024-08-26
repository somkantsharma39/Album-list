# Album List

This is a simple ReactJS application that demonstrates CRUD operations (Create, Read, Update, Delete) on an album list using the JSONPlaceholder API.

## Features

- **Fetch Albums**: Fetch and display a list of albums from the API.
- **Add Album**: Add a new album by making a POST request to the API. The new album is saved in the React state. (Note: This is a dummy request; the album won't be saved on the server, but you'll receive a response with the data you sent).
- **Update Album**: Update an existing album by making a PUT request to the API. The updated album data is reflected in the React state. (Note: This is a dummy request; the changes won't be saved on the server).
- **Delete Album**: Delete an album by making a DELETE request to the API. The album is removed from the React state. (Note: This is a dummy request; the album won't actually be deleted from the server).

## API Endpoint

All API requests are made to: `https://jsonplaceholder.typicode.com/albums`

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-album-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd album-list
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## How It Works

1. **Fetch Albums**: On component mount, a GET request is made to the API to fetch the list of albums and store them in the state.

2. **Add Album**: A POST request is made to the API with the new album title. The response data is then added to the existing albums in the state.

3. **Update Album**: A PUT request is made to the API with the updated album title. The album in the state is updated accordingly.

4. **Delete Album**: A DELETE request is made to the API, and the corresponding album is removed from the state.

## Note

This project uses JSONPlaceholder, a free fake online REST API for testing and prototyping. The API requests in this app are dummy requests, meaning that while they follow the correct protocol and structure, the server does not persist the changes.
