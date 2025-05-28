// src/pages/CourseDetailPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetailPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the course details when the component is mounted
  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`https://edtech-2dc87-default-rtdb.firebaseio.com/courses/${id}.json`);
      const data = await response.json();
      setCourse(data);
      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p><strong>Price:</strong> ${course.price}</p>
      <p><strong>Tag:</strong> {course.tag}</p>
      <p><strong>Level:</strong> {course.level}</p>
      <h2>Syllabus:</h2>
      <ul>
        {course.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p><strong>Created By:</strong> {course.createdBy}</p>
    </div>
  );
};

export default CourseDetailPage;
