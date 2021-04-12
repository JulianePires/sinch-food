import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      contact: Model,
      message: Model,
    },

    seeds(server) {
      server.db.loadData({
        contacts: [
          {
            id: 1,
            nome: "João",
            telefone: "+558999999991",
          },
          {
            id: 2,
            nome: "Maria",
            telefone: "+558999999992",
          },
          {
            id: 3,
            nome: "Paulo",
            telefone: "+558999999993",
          },
          {
            id: 4,
            nome: "José",
            telefone: "+558999999994",
          },
          {
            id: 5,
            nome: "Ana",
            telefone: "+558999999995",
          },
          {
            id: 6,
            nome: "Cláudia",
            telefone: "+558999999996",
          },
          {
            id: 7,
            nome: "Francisco",
            telefone: "+558999999997",
          },
          {
            id: 8,
            nome: "Júlia",
            telefone: "+558999999998",
          },
          {
            id: 9,
            nome: "Pedro",
            telefone: "+558999999999",
          },
          {
            id: 10,
            nome: "Paula",
            telefone: "+558999999910",
          },
          {
            id: 11,
            nome: "Talita",
            telefone: "+558999999911",
          },
          {
            id: 12,
            nome: "Tom",
            telefone: "+558999999912",
          },
          {
            id: 13,
            nome: "Daniela",
            telefone: "+558999999913",
          },
          {
            id: 14,
            nome: "Elias",
            telefone: "+558999999914",
          },
          {
            id: 15,
            nome: "Eduardo",
            telefone: "+558999999915",
          },

          {
            id: 16,
            nome: "Rodrigo",
            telefone: "+558999999916",
          },
          {
            id: 17,
            nome: "Rafael",
            telefone: "+558999999917",
          },
          {
            id: 18,
            nome: "Joana",
            telefone: "+558999999918",
          },
          {
            id: 19,
            nome: "Felipe",
            telefone: "+558999999919",
          },
          {
            id: 20,
            nome: "Marcela",
            telefone: "+558999999920",
          },
          {
            id: 21,
            nome: "Mauricio",
            telefone: "+558999999921",
          },
          {
            id: 22,
            nome: "Antonieta",
            telefone: "+558999999922",
          },
          {
            id: 23,
            nome: "Hugo",
            telefone: "+558999999923",
          },
          {
            id: 24,
            nome: "Irvison",
            telefone: "+558999999924",
          },
          {
            id: 25,
            nome: "Irene",
            telefone: "+558999999925",
          },
          {
            id: 26,
            nome: "Orácio",
            telefone: "+558999999926",
          },
        ],
        messages: [{}],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/contacts", () => {
        return this.schema.all("contact");
      });

      this.get("/messages", () => {
        return this.schema.all("message");
      });

      this.post("/contacts", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("contact", data);
      });

      this.post("/messages", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("message", data);
      });
    },
  });

  return server;
}
