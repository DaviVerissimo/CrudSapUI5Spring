sap.ui.define([], () => {
    "use strict";

    const API_URL = "http://localhost:8081/api/usuarios";

    return {

        listar: async function() {

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Erro HTTP: " + response.status);
            }

            return await response.json();
        }

    };
});