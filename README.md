# Diagnal-Technologies-Assignment

### Problem statement :- when a post request is made with the url then the response should be in the form of Metadata. 

##### concept  :- Web Scrapping.

In this project I will be using nodejs. 

At firstly we will focus on how to debugg any website using chrome developer tools. And we will test the meta tags in the developer tools once we got clarified 
then we will implement in our project.

I'm taking an example as a IMDB which is most popular.

steps to be followed :-

1. Fire up chrome browser then type IMDB then goto official page. Now right click to the selected specific data in the page and inspect it.

2. Now you will see the raw data and you will see the specific raw data that you inspect earlier.

3. Now if you want to get the data from the title then you must be familiar with Jquery and og parameters.

4. If you are trying to get raw data of title then focused the root of it.

5. So the root tag is div followed by classname and for the child we have to mention ">".

6. Here is the example 

[](url)  
![Uploading Screenshot from 2020-09-09 03-30-59.png…]()


 as you can see the div tag is divided into child and we can access it by writing $
 
 ex:- $('div[class = "classname"] .> child child).text()
 
 if the result data is not in a good conext then add .trim to the end of it.
 
 7. I have taken 3 meta data fields where "title" "rating" "date".
 
 8. I used third party libraries and the name of the npm package is "request-promise" , "cheerio".
 
 9. Inshort request-promise is for making a secure request to the destination webpage. It offers headers to be set same as a destination webpage does.
 
 10. cheerio makes life simpler in this project. the entire web page or elements are stored in the form of $.
 
 11. source code.
 
 * Import the dependencies in index.js file
 
 * Now use one temporary varialble and store the url.
 
 * And we use async funtion to make it happen immediately.
 
 * We will create an empty array inside the async function and we also declared headers.
 
 ###(Note : Header data can be found by inspecting the website and goto networks and reload it. Now you will find random http request behind the scenes. take the 
 1st response and content-type = Header. there you can see.)
 
 * Intresting point is it is gzip which is also mentioned inthe headers. which is very fast.
 
 * Now i have used inputs that we've debugged earlier and will code it over here. And assign to the variable.
 
 * Now the variable which posses the metadata is pushed to the empty array which is "Data".
 
 * Now set the server port and make the response in it. And give it a shot.
 

 





