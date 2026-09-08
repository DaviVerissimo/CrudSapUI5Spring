package com.example.api.controller;

import com.example.api.model.Usuario;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @GetMapping
    public List<Usuario> listar() {

        return List.of(
                new Usuario(1L, "João Silva", "joao@email.com"),
                new Usuario(2L, "Maria Santos", "maria@email.com"),
                new Usuario(3L, "Pedro Oliveira", "pedro@email.com"),
                new Usuario(4L, "Ana Costa", "ana@email.com")
        );
    }
}
