# Vesti the Smart Closet
This app is consisted of three parts:

```
Front End: React Native (located in the app folder)
Back End: Flask & GPT-4 (located in the backend folder)
Hardware: Arduino & ESP (located in the hardware.ino)
```

## Front End: React Native
- The app has three main screens: wardrobe page, camera page, and events page 
- The app lets user take pictures of the clothes and store them in async storage
- The app displays all clothes in the wardrobe page and allow search by name
- The app allows user to choose an event and makes outfit recommendation for the event

## Back End: Flask & GPT-4
- The backend of Vesti is built using Flask framework
- We used Flask to connect with GPT-4 where we use customer prompt to generate customer outfits
- We used prompt enginnering to ensure the response from GPT-4 contains the ID of each outfit

## Hardware: Arduino & ESP
- We used Arduino to write the code for connecting and lighting up the hanger when the specific outfit is selected
- We used ESP as a "bluetooth" to physically connect the hangers with the app
