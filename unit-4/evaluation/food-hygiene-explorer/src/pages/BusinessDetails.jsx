import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import { ref, get } from "firebase/database";
import "./BusinessDetail.css";

const getBadgeColor = (ratingValue) => {
  if (ratingValue === "5") return "green";
  if (ratingValue === "3" || ratingValue === "4") return "orange";
  if (ratingValue === "0" || ratingValue === "1" || ratingValue === "2") return "red";
  return "gray"; // Awaiting / Exempt
};

const BusinessDetail = () => {
  const { FHRSID } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch business details from Firebase bookmarks or API if needed
  useEffect(() => {
    const fetchBusiness = async () => {
      setLoading(true);
      try {
        // Try to fetch from Firebase bookmarks first
        const bookmarksRef = ref(db, "bookmarkedPremises");
        const snapshot = await get(bookmarksRef);
        const bookmarks = snapshot.val() || {};
        const found = Object.values(bookmarks).find(item => item.FHRSID.toString() === FHRSID);
        if (found) {
          setBusiness(found);
        } else {
          // If not found in bookmarks, fetch from public API
          const res = await fetch("https://ratings.food.gov.uk/OpenDataFiles/FHRS529en-GB.json");
          const json = await res.json();
          const businessData = json?.FHRSEstablishment?.EstablishmentCollection.find(
            (item) => item.FHRSID.toString() === FHRSID
          );
          if (businessData) setBusiness(businessData);
          else setError("Business not found.");
        }
      } catch (err) {
        setError("Failed to fetch business details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBusiness();
  }, [FHRSID]);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!business) return null;

  return (
    <div className="container">
      <h1>{business.name || business.BusinessName}</h1>
      <div className="detail-item">
        <span className="detail-label">Address:</span> {business.address || `${business.AddressLine1}, ${business.PostCode}`}
      </div>
      <div className="detail-item">
        <span className="detail-label">Local Authority:</span> {business.localAuthorityName || business.LocalAuthorityName}
      </div>
      <div className="detail-item">
        <span className="detail-label">Rating Date:</span> {business.dateRated || business.RatingDate}
      </div>
      <div
        className={`rating ${getBadgeColor(business.ratingValue || business.RatingValue)}`}
      >
        Rating: {business.ratingValue || business.RatingValue}
      </div>
      <Link to="/" className="back-button">
        &larr; Back to Home
      </Link>
    </div>
  );
};

export default BusinessDetail;
