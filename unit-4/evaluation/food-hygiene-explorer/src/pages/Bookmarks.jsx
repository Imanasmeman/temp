import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { ref, get, remove, query, orderByChild, equalTo } from "firebase/database";
import "./Bookmarks.css";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch bookmarks from Firebase
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarksRef = ref(db, "bookmarkedPremises");
        const snapshot = await get(bookmarksRef);
        setBookmarks(snapshot.val() || {});
      } catch (error) {
        console.error("Failed to fetch bookmarks", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookmarks();
  }, []);

  const removeBookmark = async (key) => {
    try {
      await remove(ref(db, `bookmarkedPremises/${key}`));
      setBookmarks((prev) => {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      });
    } catch (error) {
      console.error("Failed to remove bookmark", error);
      alert("Failed to remove bookmark. Try again.");
    }
  };

  return (
    <div className="container">
      <h1>Bookmarked Premises</h1>

      {loading ? (
        <p>Loading...</p>
      ) : Object.keys(bookmarks).length === 0 ? (
        <p className="no-bookmarks">No bookmarks found.</p>
      ) : (
        <ul className="bookmark-list">
          {Object.entries(bookmarks).map(([key, item]) => (
            <li key={key}>
              <strong>{item.name}</strong>
              <span>{item.address}</span>
              <span>Rating: {item.ratingValue}</span>
              <span>Authority: {item.localAuthorityName}</span>
              <Link to={`/business/${item.FHRSID}`}>View Details</Link>
              <button className="remove-bookmark" onClick={() => removeBookmark(key)}>
                Remove Bookmark
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmarks;
