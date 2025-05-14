package io.github.KevinReds.crud.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.KevinReds.crud.model.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, Long> {

}
