import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import './DashboardNewPage.css';

const DashboardNewPage = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    price: '',
    tag: '',
    level: '',
    syllabus: '',
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      // Make a POST request to Firebase Realtime DB to add the course
      const res = await fetch('https://edtech-2dc87-default-rtdb.firebaseio.com/courses.json', {
        method: 'POST',
        body: JSON.stringify({
          title: courseData.title,
          price: courseData.price,
          tag: courseData.tag,
          level: courseData.level,
          syllabus: courseData.syllabus.split(','),  
          createdBy: 'instructor@example.com', 
        }),
      });
  
      if (res.ok) {
        alert('Course added successfully!');
        setCourseData({
          title: '',
          price: '',
          tag: '',
          level: '',
          syllabus: '',
        });
        setLoading(false);
        setTimeout(() => {
          navigate('/dashboard'); 
        }, 500); 
      } else {
        alert('Failed to add course.');
        setLoading(false);
      }
    } catch (err) {
      console.error("Error adding course:", err);
      setLoading(false);
    }
  };
  

  return (
    <div className="dashboard-new-container">
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={courseData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tag</label>
          <input
            type="text"
            name="tag"
            value={courseData.tag}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Level</label>
          <input
            type="text"
            name="level"
            value={courseData.level}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Syllabus (comma-separated)</label>
          <input
            type="text"
            name="syllabus"
            value={courseData.syllabus}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Course'}
        </button>
      </form>
    </div>
  );
};

export default DashboardNewPage;
