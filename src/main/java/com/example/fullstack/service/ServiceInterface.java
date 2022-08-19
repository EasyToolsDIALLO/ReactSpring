package com.example.fullstack.service;

import com.example.fullstack.model.Student;

import java.util.List;

public interface ServiceInterface {

    public List<Student> getAllStudents();
    public Student saveStudent( Student student);
}
