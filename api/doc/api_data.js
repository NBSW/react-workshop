define({ "api": [
  {
    "type": "get",
    "url": "/wines?region=:region",
    "title": "All Wines",
    "name": "All_Wines",
    "group": "Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>the region to get wines from</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "wines",
            "description": "<p>List of wines</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.id",
            "description": "<p>Id of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.name",
            "description": "<p>Name of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.type",
            "description": "<p>Type of wine</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "wines.appellation",
            "description": "<p>Appellation of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.appellation.name",
            "description": "<p>Name of the appellation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.appellation.region",
            "description": "<p>Region of the appellation</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "wines.grapes",
            "description": "<p>Grapes used to produce the wine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"cheval-noir\",\n    \"name\": \"Cheval Noir\",\n    \"type\": \"Rouge\",\n    \"appellation\": {\"name\": \"Saint-Emilion\", \"region\": \"Bordeaux\"},\n    \"grapes\": [\"Cabernet Sauvignon\", \"Merlot\", \"Cabernet Franc\"]\n  },\n  {\n    \"id\": \"les-hauts-de-tour-prignac\",\n    \"name\": \"Les Hauts de Tour Prignac\",\n    \"type\": \"Rouge\",\n    \"appellation\": {\"name\": \"Médoc\", \"region\": \"Bordeaux\"},\n    \"grapes\": [\"Cabernet Sauvignon\", \"Merlot\"]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request - 'region' query parameter is missing.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  }
] });