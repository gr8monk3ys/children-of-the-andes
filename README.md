## Inspiration
Our inspiration for Vibe came after TreeHacks 2020 where we saw a bunch of unique ideas that weren't webapps. After seeing that a unique project could have a large impact, we decided we wanted to expand our skill set by focusing on a hardware hack, while also learning some software on the side.

## What it does
Vibe scans your face to determine your current mood. Once your mood is determined, the song playing will change according to your mood, as well as the lighting and the background of the app.

## How we built it
We used Firebase as our backend service, HTML, CSS, Javascript and Bootstrap for our main web development stack, Google Vision API to recognize a person's and the Raspberry Pi to communicate with the LED strips. We also used Python code to control the LEDs on the Raspberry Pi, while we used Bash scripts to automate the process.

## Challenges we ran into
In the beginning, we wanted to use Tensorflow as our main mood detection system. However, we quickly noticed how limited it was in terms of interfacing with the other components of our program, and also how complex a simple operation could be. After talking to some mentors, we decided to try out the AutoML library by Google to create our own machine learning model to determine a person's mood. It seemed promising at first, but it was extremely cumbersome to create an expansive dataset of human expressions or find a dataset we could use. Even after training our model, we still had some inaccuracies within our model. For example, it could easily detect a "happy" face but failed to recognize a "sad" face roughly 80% of the time

Although our model worked, we wanted to emphasize accuracy because we found it so essential to our product, so we decided to try out the Vision API to determine human expression. We admittedly struggled through reading all of the extensive documentation, but we luckily were able to create a Python script that returns whether or not a person is mad, sad or happy. We also were able to create a REST API from this script which was a daunting task since none of us has worked with creating an API before.

In terms of the circuit, we were sadly very limited to what the MLH Hardware Lab had to offer. At the end of the day, we needed stronger resistors and transistors to have full control of the brightness and color of the LED strips. Due to the lack of resources and control over the LED strips, we decided to use a small RGB light on the Pi to simulate what we would do if we could use the LED strips as intended.

It was a very tedious task to get the music playing. Originally, we wanted to use the Spotify API to play music and switch between playlists on our application. However, it took forever to just get the Spotify API to recognize that we were trying to invoke it, and even then, we had little to no control over the API. We then decided to try out the Youtube API but we faced similar results. In the end, we found it easier to download a list of popular Youtube music videos and play them within our application rather than invoking an API.

## What we learned
Jet: I learned the most about the Google Vision API to train models based off of different emotions. I got to create a REST API for the first time and got that to interface with a Firebase database. In order to efficiently train my model, I also made a batch script file to bulk download emotion images on Google.

Paulo: A lot of Javascript. Even more Bootstrap 4. I used some nice-looking gradients and animations for the first time. Learned how to set up basic music flow and controlling in HTML & JS alone.

Busher: I learned a lot about how to incorporate the GPIO library with the Raspberry Pi to control our circuit we made. It was also a lot of fun trying to figure out how to power the LED strips with such limited resources and a large power draw.

Yash:  I learned what GCP Cloud Functions are and how to use them in our project. I also learned how to convert images into objects in the real time database. Along with that, it was my first time using cURL to gain remote access to the database.

## What's next for Vibe
- Expand the range of emotions!
- Expand the range of music, maybe even incorporate the Spotify API to get a wide variety of song choices.
- Currently, the overall emotion of the song is hard determined by us, maybe in the future we can get this to be based off of Spotify's song info.
- Get the LED wire strip to work!
