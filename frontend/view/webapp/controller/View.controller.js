sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../service/UsuarioService"
], (Controller, JSONModel, UsuarioService) => {

    "use strict";

    return Controller.extend("view.controller.View", {

        onInit() {
            this.carregarUsuarios();
        },

        carregarUsuarios: async function() {

            try {

                const usuarios = await UsuarioService.listar();

                console.log("Usuários recebidos:", usuarios);

                const model = new JSONModel(usuarios);

                this.getView().setModel(model, "usuarios");

            } catch (error) {

                console.error("Erro ao buscar usuários:", error);

            }

        }

    });
});