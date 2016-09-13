# Exhibition Planner
This is an app to store information about planned exhibitions. In one screen there will be a list of planned exhibitions and a form to add exhibitions. When clicking on an exhibition a new list will be rendered that will show all the artworks in the exhibition as is a new form, to add new artworks. This exhibition planner is build with ReactJS on a Rails backend.


## Database
1 Exhibition
  * Title:string
  * Date:string
  * Image:string
  * Description:text

2 Artwork
  * Artist:string
  * Title:string
  * Date:string
  * Technique:string
  * Image:string
  * Description:text
  <!-- * Later on I also want to include audio -->


## Logbook
#### 1 Set up the API in Rails
  * Define the models
  * Create the controllers
  * Add CarrierWave and Cloudinary
  * Add Rack CORS
  * Write seeds

#### 2 Set up a React project with the React Starter
  * npm install
  * npm install jquery --save

#### 3 Build the exhibition screen
  * Create Components for the Exhibition screen
  * Get and Post request to render the exhibitions from and add them to the db
  * Look for file upload in ReactJS



## Running Locally

```bash
npm install
npm start
open http://localhost:3000
```
