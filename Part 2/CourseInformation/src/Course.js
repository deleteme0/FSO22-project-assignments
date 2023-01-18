

const Course = (props) => {
    const {course} = props;
  
    const {parts } = course;
  
    const total = parts.reduce((sum,par) => sum += par.exercises,0)
    
  
    return (
      
      <div>
        <h2>{course.name}</h2>
        {course.parts.map((part) => <p key={part.id}>  {part.name} {part.exercises}   </p>)}
        
        <b>total of {total} exercises</b>
        
      </div>
      
    )
  }


export default Course