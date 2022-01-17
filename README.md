# Tutorials express backend

This project was generated with [express-generator]

it was generated without a view engine
https://gitlab.thedigitalacademy.co.za/fullstack_dev_dec_2021/mean-stack101/ephraim_tlhako.git

## Development server

Run `npm run dev` for a dev server on `http://localhost:3000/`.
This runs nodemon on the `/bin/wwww`.
The app will automatically reload if you change any of the source files .

## Run through

the app is a simple Rest CRUD API , connected to MongoDB .
perfoms basic CRUD for Tutorials

## Routes 

basepath = `/api/tutorial`

>**CREATE a tutorial**

>POST : `/` 

```JSON
{
  "title":"string",
  "description":"string",
  "published": 0
}
```
returns a single tutorial that uou created 
**UPDATE a tutorial**

>PUT : `/:id`

```JSON
{
  "title":"string",
  "description":"string",
  "published": 1
}
```
updates tutorial from provided `id` [request.params.id==id]
**GET a tutorial**

>GET : `/:id`

returns a single tutorial from provided `id` [request.params.id==id]

**GET a list of tutorials**

>GET : `/`

returns list of all tutorials

**DELETE a tutorial**

>DELETE : `/:id`

deletes a single tutorial from provided `id` [request.params.id==id]

**GET a PUBLISHED tutorial**

>GET : `/published`

returns list of tutorials that are marked published [published==true]

**DELETE all tutorials**

>DELETE : `/`