package com.example.fullstack.repositories;

import com.example.fullstack.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepositorie extends JpaRepository<Student, Integer> {

}
