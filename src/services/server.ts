import { belongsTo, createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      contact: Model,
      message: Model.extend({
        name: belongsTo("contact"),
        telephone: belongsTo("contact"),
      }),
    },

    seeds(server) {
      server.db.loadData({
        contacts: [
          {
            id: 1,
            name: "João",
            telephone: "+558999999991",
          },
          {
            id: 2,
            name: "Maria",
            telephone: "+558999999992",
          },
          {
            id: 3,
            name: "Paulo",
            telephone: "+558999999993",
          },
          {
            id: 4,
            name: "José",
            telephone: "+558999999994",
          },
          {
            id: 5,
            name: "Ana",
            telephone: "+558999999995",
          },
          {
            id: 6,
            name: "Cláudia",
            telephone: "+558999999996",
          },
          {
            id: 7,
            name: "Francisco",
            telephone: "+558999999997",
          },
          {
            id: 8,
            name: "Júlia",
            telephone: "+558999999998",
          },
          {
            id: 9,
            name: "Pedro",
            telephone: "+558999999999",
          },
          {
            id: 10,
            name: "Paula",
            telephone: "+558999999910",
          },
          {
            id: 11,
            name: "Talita",
            telephone: "+558999999911",
          },
          {
            id: 12,
            name: "Tom",
            telephone: "+558999999912",
          },
          {
            id: 13,
            name: "Daniela",
            telephone: "+558999999913",
          },
          {
            id: 14,
            name: "Elias",
            telephone: "+558999999914",
          },
          {
            id: 15,
            name: "Eduardo",
            telephone: "+558999999915",
          },

          {
            id: 16,
            name: "Rodrigo",
            telephone: "+558999999916",
          },
          {
            id: 17,
            name: "Rafael",
            telephone: "+558999999917",
          },
          {
            id: 18,
            name: "Joana",
            telephone: "+558999999918",
          },
          {
            id: 19,
            name: "Felipe",
            telephone: "+558999999919",
          },
          {
            id: 20,
            name: "Marcela",
            telephone: "+558999999920",
          },
          {
            id: 21,
            name: "Mauricio",
            telephone: "+558999999921",
          },
          {
            id: 22,
            name: "Antonieta",
            telephone: "+558999999922",
          },
          {
            id: 23,
            name: "Hugo",
            telephone: "+558999999923",
          },
          {
            id: 24,
            name: "Irvison",
            telephone: "+558999999924",
          },
          {
            id: 25,
            name: "Irene",
            telephone: "+558999999925",
          },
          {
            id: 26,
            name: "Orácio",
            telephone: "+558999999926",
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
