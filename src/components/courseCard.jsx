import React from 'react';
import "./courseCard.css"
const CourseCard = ({ course }) => {
  const { title, instructor, description, duration, startDate, image } = course;

  return (
    <div className="courseCard">
      <h2 className="title">{title}</h2>
      <p className="instructor">Instructor: {instructor}</p>
      <p className="description">{description}</p>
      <p className="duration">Duration: {duration}</p>
      {/* <p className="startDate">Start Date: {startDate}</p> */}
      <img className="image" src={image} alt={title} />
    </div>
  );
};

export default CourseCard;