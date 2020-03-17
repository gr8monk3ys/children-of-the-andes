## Inspiration
When thinking of an idea of what we wanted to do. We were determining what type of impact we wanted to make. It was either to make something for the sake of it being fun, for the sake of it being cool, or for the sake of just trying to innovate. In our case, we went into this with the goal of trying to give back. We collaborated with a non-profit organization that takes volunteers to a remote village in Peru called San Pedro where they are able to teach the children of the schools about certain subjects. The process and planning, of course, is not easy, and we wanted to support and try to help this organization out.

## What it does
We have developed a website that publicizes as well as makes volunteering much easier and more efficient. There are basic implementations of a schedule to ensure that the volunteers know the frame of time needed in Peru, as well as what the organization is about. There are more complex features where you can see a 3-dimensional view of the city of Lima Peru (one of the first destinations in the retreat), as well as a feature that allows you to find the cheapest flight tickets so that the trip is more affordable than before. One of the final and most important features is that we have a download button that downloads a zip file of all the worksheets and criteria needed in order to teach the kids. Since there is no internet in the town of San Pedro, they need to store a lot of the contents locally so that they can print out the worksheets and begin to work with the kids.

## How we built it
We used a combination of HTML, CSS and Javascript to create the website. Specifically, we used fullpage.js to create the smooth one-page layout, the SkyScanner API to get the cheapest flights possible, Mapbox to create a visualization of the Peru area, and CSS to tidy everything up.

## Challenges we ran into
One of the biggest challenges we ran into was working with fullpage.js. We knew from the start that we wanted to create a sleek, scrolling design but we had no clue where to start. After hours of research and multiple bugs, we all got a hang of how to use fullpage.js. Another challenge we ran into was actually just styling every single component. In total, we easily wrote over 200 lines of CSS code, but in the end, we are very happy with the result!

## What we learned
Lorenzo: I learned how to implement fullpage.js and Mapbox
Paulo: I learned how to initialize an Electron project and did some research on different APIs we could use to calculate the flight cost.
Jet: I learned how to implement the Skyscanner API to calculate flight costs. I also learned how to use the fullpage.js framework to create a smooth "one-page" website. It also was my first time learning how to use animations for a logo.


## What's next for us
This site is not just for this hackathon, but for intended future use for this organization "Children of the Andes". We will continue to update and modify this website so that things can run as smoothly as possible in terms of the logistics for this organization. Future features include automating a mailing system using Mailgun API, as well as also creating a user login with a dashboard for administrators so that they can easily modify the schedule, as well as import photos and videos through its very own UI (similar to what Wix or Squarespace do) that way we don't have to consistently hard code and change the site every time it needs an update. One of the final features that we would like to integrate in the future is a way to implement Electron framework so that we are able to port out some of the features on the website and make them available offline since there is not internet in San Pedro.
