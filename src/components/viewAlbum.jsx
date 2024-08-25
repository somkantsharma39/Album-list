// Importing useState (to add state variables to functional components), useEffect (to run side effects) hooks.
import React, { useState, useEffect } from "react";
// Importing Axios library
import axios, { Axios } from "axios";

// Defines state variables using the useState hook:
const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [updateAlbumId, setUpdateAlbumId] = useState(null);
  const [updateAlbumTitle, setUpdateAlbumTitle] = useState("");

  // useEffect hook to run the fetchAlbums function once when the component mounts.
  useEffect(() => {
    fetchAlbums();
  }, []);

  // Function that uses Axios to fetch album data from a placeholder API
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(response.data);
      // If there is an error during the request, it logs the error to the console.
    } catch (error) {
      console.error("Error fetching album:", error);
    }
  };

  // Function that sends a POST request to add a new album with a title
  const addAlbum = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/albums",
        {
          title: newAlbumTitle,
        }
      );
      setAlbums([...albums, response.data]);
      setNewAlbumTitle("");
      // If there's an error, it logs the error to the console.
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  // Function that sends a PUT request to update an album's title
  const updateAlbum = async () => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/albums/${updateAlbumId}`,
        {
          title: updateAlbumTitle,
        }
      );
      // After mapping over all albums updates the state with the modified list.
      const updatedAlbums = albums.map((album) =>
        album.id === updateAlbumId
          ? { ...album, title: updateAlbumTitle }
          : album
      );
      setAlbums(updatedAlbums);
      setUpdateAlbumId(null);
      setUpdateAlbumTitle("");
      // If there's an error, it logs the error to the console.
    } catch (error) {
      console.error("Error updating album:", error);
    }
  };

  // Function that sends a DELETE request to remove an album by its ID.
  const deleteAlbum = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      const filteredAlbums = albums.filter((album) => album.id !== id);
      setAlbums(filteredAlbums);
      // If there's an error, it logs the error to the console.
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  // Renders the album interface, including add, update, and delete functionalities.
  return (
    <div className="container">
      {/* Heading */}
      <h1>Album List</h1>
      <div className=" add-album">
        <h2>Add New Album</h2>
        <input
          type="text"
          value={newAlbumTitle}
          onChange={(e) => setNewAlbumTitle(e.target.value)}
        />
        {/* Add-button for input box*/}
        <button onClick={addAlbum}>Add Album</button>
      </div>
      {updateAlbumId && (
        <div className="update-album">
          <h2>Update Album</h2>
          <input
            text="text"
            value={updateAlbumTitle}
            onChange={(e) => setUpdateAlbumTitle(e.target.value)}
          />
          {/* Update-button for input box*/}
          <button onClick={updateAlbum}>Update</button>
        </div>
      )}
      <div className="album-list">
        {/* Map function used here to iterate over the albums array and create a new JSX element for each album */}
        {albums.map((album) => (
          <div className="mainDiv" key={album.i}>
            {/* Album's Dummy Image */}
            <img
              src={`https://media.istockphoto.com/id/1130859000/photo/vacations-in-poland-gasienicowa-valley-tatra-mountains-poland.jpg?s=612x612&w=0&k=20&c=2dhC3UzERo-j4f3ko2dhahm66uWdeSI3b1RMDRAyo5w=`}
              alt="Album Cover"
            />
            {/* Album's title */}
            <div className="album-title">{album.title}</div>

            {/* Div for buttons */}
            <div className="album-buttons">
              {/* Delete-button */}
              <button onClick={() => deleteAlbum(album.id)}>Delete</button>
              {/* Update-button */}
              <button
                onClick={() => {
                  setUpdateAlbumId(album.id);
                  setUpdateAlbumTitle(album.title);
                }}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting Album
export default Albums;
