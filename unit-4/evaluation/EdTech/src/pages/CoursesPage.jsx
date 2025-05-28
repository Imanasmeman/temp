import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('https://edtech-2dc87-default-rtdb.firebaseio.com/courses.json');
      const data = await response.json();
      const coursesList = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));
      setCourses(coursesList);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  if (courses.length === 0) {
    return <div>No courses found.</div>;
  }

  return (
    <div className="courses-list">
      <h1>Browse Courses</h1>
      {courses.map(course => (
        <div key={course.id} className="course-item">
          <h2>{course.title}</h2>
          <p>{course.tag}</p>
          <p>{course.level}</p>
          <p>${course.price}</p>
          <Link to={`/courses/${course.id}`}>View Details</Link> 
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
