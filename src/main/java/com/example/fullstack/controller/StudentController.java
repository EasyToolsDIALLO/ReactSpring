package com.example.fullstack.controller;

import com.example.fullstack.model.Student;
import com.example.fullstack.service.ServiceStudent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/etudiant")
@CrossOrigin
public class StudentController {
    @Autowired
    ServiceStudent serviceStudent;

    @Autowired
    public StudentController(ServiceStudent serviceStudent) {
        this.serviceStudent = serviceStudent;
    }

    @PostMapping(path = "/add")
    public String saveStudents(@RequestBody Student student){
        serviceStudent.saveStudent(student);
        return "new student added";
    }

    @GetMapping(path = "/getAll")
    public List<Student> getAllStudents(){
        return serviceStudent.getAllStudents();
    }

}
