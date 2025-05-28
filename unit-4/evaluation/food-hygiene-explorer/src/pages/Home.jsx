import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setSearch,
  setRating,
  setAuthority,
  setCurrentPage,
} from "../redux/filtersSlice";

import { db } from "../firebase/firebaseConfig";
import { ref, push, get } from "firebase/database";
import "./Home.css";

const ITEMS_PER_PAGE = 10;

const Home = () => {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookmarkedFHRSIDs, setBookmarkedFHRSIDs] = useState(new Set());

  const dispatch = useDispatch();
  const { search, rating, authority, currentPage } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://ratings.food.gov.uk/OpenDataFiles/FHRS529en-GB.json"
        );
        const json = await res.json();
        setRawData(json?.FHRSEstablishment?.EstablishmentCollection || []);
      } catch (error) {
        console.error("Failed to fetch data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const bookmarksRef = ref(db, "bookmarkedPremises");
        const snapshot = await get(bookmarksRef);
        const bookmarks = snapshot.val() || {};
        const bookmarkedIds = new Set(
          Object.values(bookmarks).map((b) => b.FHRSID)
        );
        setBookmarkedFHRSIDs(bookmarkedIds);
      } catch (error) {
        console.error("Failed to fetch bookmarks", error);
      }
    };

    fetchBookmarks();
  }, []);

  const bookmarkPremise = async (item) => {
    try {
      if (bookmarkedFHRSIDs.has(item.FHRSID)) {
        alert("This premise is already bookmarked!");
        return;
      }

      const bookmarksRef = ref(db, "bookmarkedPremises");
      await push(bookmarksRef, {
        FHRSID: item.FHRSID,
        name: item.BusinessName,
        address: `${item.AddressLine1}${
          item.AddressLine2 ? ", " + item.AddressLine2 : ""
        }, ${item.PostCode}`,
        ratingValue: item.RatingValue,
        dateRated: item.RatingDate,
        localAuthorityName: item.LocalAuthorityName,
      });

      alert("Bookmarked successfully!");
      setBookmarkedFHRSIDs((prev) => new Set(prev).add(item.FHRSID));
    } catch (error) {
      console.error("Error bookmarking premise:", error);
      alert("Failed to bookmark. Try again.");
    }
  };

  const toggleBookmark = (item) => {
    if (bookmarkedFHRSIDs.has(item.FHRSID)) {
      alert("Already bookmarked! Remove feature not implemented.");
      // You can add remove bookmark feature later if you want
      return;
    } else {
      bookmarkPremise(item);
    }
  };

  const filteredData = useMemo(() => {
    return rawData.filter((item) => {
      const matchSearch =
        item.BusinessName?.toLowerCase().includes(search.toLowerCase()) ||
        item.PostCode?.toLowerCase().includes(search.toLowerCase());

      const matchRating =
        rating === "All" ||
        item.RatingValue === rating ||
        item.RatingValue?.replace(/\s/g, "") === rating;

      const matchAuthority =
        authority === "All" || item.LocalAuthorityName === authority;

      return matchSearch && matchRating && matchAuthority;
    });
  }, [rawData, search, rating, authority]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, currentPage]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const uniqueAuthorities = useMemo(() => {
    const authorities = rawData.map((item) => item.LocalAuthorityName);
    return ["All", ...Array.from(new Set(authorities))];
  }, [rawData]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setCurrentPage(newPage));
    }
  };

  const getBadgeColor = (ratingValue) => {
    if (ratingValue === "5") return "green";
    if (ratingValue === "3" || ratingValue === "4") return "orange";
    if (ratingValue === "0" || ratingValue === "1" || ratingValue === "2")
      return "red";
    return "gray";
  };

  return (
    <div className="container">
      <h1>UK Food Hygiene Ratings</h1>

      <div className="filters">
        <input
          placeholder="Search by name or postcode"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <select
          value={rating}
          onChange={(e) => dispatch(setRating(e.target.value))}
        >
          <option value="All">All Ratings</option>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0">0</option>
          <option value="AwaitingInspection">Awaiting Inspection</option>
          <option value="Exempt">Exempt</option>
        </select>
        <select
          value={authority}
          onChange={(e) => dispatch(setAuthority(e.target.value))}
        >
          {uniqueAuthorities.map((auth) => (
            <option key={auth} value={auth}>
              {auth}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredData.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <>
          <ul>
            {paginatedData.map((item) => (
              <li key={item.FHRSID}>
                <Link to={`/business/${item.FHRSID}`}>
                  <strong>{item.BusinessName}</strong>
                </Link>{" "}
                - Rating:{" "}
                <span className={`rating ${getBadgeColor(item.RatingValue)}`}>
                  {item.RatingValue}
                </span>
                <br />
                {item.AddressLine1}, {item.PostCode}
                <br />
                <button
                  className="bookmark-btn"
                  onClick={() => toggleBookmark(item)}
                  disabled={bookmarkedFHRSIDs.has(item.FHRSID)}
                >
                  {bookmarkedFHRSIDs.has(item.FHRSID) ? "Bookmarked" : "Bookmark"}
                </button>
              </li>
            ))}
          </ul>

          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
