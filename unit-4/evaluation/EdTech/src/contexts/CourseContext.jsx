// src/contexts/CourseContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CourseContext = createContext();

export const useCourses = () => {
  return useContext(CourseContext);
};

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from Firebase Realtime Database
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://edtech-2dc87-default-rtdb.firebaseio.com/courses.json');
        const data = response.data;

        if (data) {
          const loadedCourses = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setCourses(loadedCourses);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const addCourse = async (newCourse) => {
    try {
      await axios.post('https://edtech-2dc87-default-rtdb.firebaseio.com/courses.json', newCourse);
      setCourses(prevCourses => [...prevCourses, newCourse]);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse }}>
      {children}
    </CourseContext.Provider>
  );
};
