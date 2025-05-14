package io.github.KevinReds.crud.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import io.github.KevinReds.crud.model.Book;
import io.github.KevinReds.crud.repo.BookRepo;

@RestController
@RequestMapping("/api/books")
public class BookController {
    
    private static final Logger log = LoggerFactory.getLogger(BookController.class);
    private final BookRepo bookRepo;
    
    public BookController(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }
    
    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> bookList = bookRepo.findAll();
            return ResponseEntity.ok(bookList);
        } catch (Exception ex) {
            log.error("Error al obtener libros", ex);
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR, 
                "Error al obtener libros", 
                ex
            );
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElseThrow(() -> new ResponseStatusException(
                    HttpStatus.NOT_FOUND, 
                    "Libro no encontrado"
                ));
    }
    
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        try {
            Book savedBook = bookRepo.save(book);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
        } catch (Exception ex) {
            log.error("Error al crear libro", ex);
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR, 
                "Error al crear libro", 
                ex
            );
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBookById(
            @PathVariable Long id, 
            @RequestBody Book newBookData) {
        
        return bookRepo.findById(id)
                .map(existingBook -> {
                    existingBook.setTitle(newBookData.getTitle());
                    existingBook.setAuthor(newBookData.getAuthor());
                    try {
                        return ResponseEntity.ok(bookRepo.save(existingBook));
                    } catch (Exception ex) {
                        log.error("Error al actualizar libro", ex);
                        throw new ResponseStatusException(
                            HttpStatus.INTERNAL_SERVER_ERROR,
                            "Error al actualizar libro",
                            ex
                        );
                    }
                })
                .orElseThrow(() -> new ResponseStatusException(
                    HttpStatus.NOT_FOUND,
                    "Libro no encontrado"
                ));
    }
    
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBookById(@PathVariable Long id) {
        try {
            bookRepo.deleteById(id);
        } catch (Exception ex) {
            log.error("Error al eliminar libro", ex);
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "Error al eliminar libro",
                ex
            );
        }
    }
}