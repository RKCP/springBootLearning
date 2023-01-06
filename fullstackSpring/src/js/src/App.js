import './App.css';
import Container from './Container';
import { render } from '@testing-library/react';
import { Component } from 'react';
import { getAllStudents } from './client';
import { Avatar, Table, Spin } from 'antd';

class App extends Component{

  state = {
    students: [],
    isFetching: false
  }

  componentDidMount () {
    this.fetchStudents(); // call method when the component mounts
  }

  fetchStudents = () => {
    this.setState({
      isFetching: true
    })
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
      this.setState({
        students,
        isFetching: false // when we get the students, set the fetching state to false
      }) // pass our state the students object we get from the fetch method
    }));
  }

  render() {

    const { students } = this.state; // state contains the actual student

    if (students && students.length) { // if we have students, and it is not empty
      
      const columns = [
        {
          title: '',
          key: 'avatar',
          render: (text, student) => ( // if you want to render custom components inside of your column, you need to use render
            <Avatar size='large'>
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
          )
        },
        {
          title: 'Student Id',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        }
      ];

      return (
        <Container>
          <Table 
            dataSource={ students } 
            columns={ columns } 
            pagination= { false }
            rowKey='studentId'/>
        </Container>
      );
    }

    // else
    return <h1>No Students found</h1>
  }
}

export default App;
