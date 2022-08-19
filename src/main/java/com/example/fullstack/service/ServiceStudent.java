package com.example.fullstack.service;

import com.example.fullstack.model.Student;
import com.example.fullstack.repositories.StudentRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceStudent implements ServiceInterface{
    @Autowired
    private StudentRepositorie studentRepositorie;

    @Autowired
    public ServiceStudent(StudentRepositorie studentRepositorie) {
        this.studentRepositorie = studentRepositorie;
    }


    @Override
    public List<Student> getAllStudents() {
        return studentRepositorie.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepositorie.save(student);
    }
}
