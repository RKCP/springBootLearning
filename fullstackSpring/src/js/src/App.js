import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import { getAllStudents } from './client'

class App extends Component{

  state = {
    students: []
  }

  componentDidMount () {
    this.fetchStudents(); // call method when the component mounts
  }

  fetchStudents = () => {
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
      this.setState({students}) // pass our state the students object we get from the fetch method
    }));
  }

  render() {

    const { students } = this.state; // state contains the actual student

    if (students && students.length) { // if we have students, and it is not empty
      
      return students.map((student, index) => { // we return the actual students
        return (
          <div key={index}>
            <h2>{student.studentId}</h2>
            <p>{student.firstName}</p>
            <p>{student.lastName}</p>
            <p>{student.gender}</p>
            <p>{student.email}</p>
          </div>
        )
      })
    }
    // else
    return <h1>No Students found</h1>
  }
}

export default App;
