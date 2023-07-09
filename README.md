# Daily Planner

## User Story ##
AS AN employee with a busy schedule <br>
I WANT to add important events to a daily planner <br>
SO THAT I can manage my time effectively

## Usage ##
<p> This event planner is a simple tool for any user to use. Upon loading, the daily planner will scan through the localStorage of the user's browser for any preveiously saved values and append them to the appropriate time blocks designated by the app. <p>

<p> In order to enter a new task to track, all the user needs to do is type in their task(s) that they want tracked in the appropriate time block. Once that's done, they click on the save button on the right side of the app and from there, the app will store the user's task into localStorage. The next time the user fires up the app, their task will automatically be retrieved on load! <p>

![Example of the Planner](/Assets/plannerlayoutexample.png)<br>
*The planner will automatically assign a color code to a time block based on the time it receives from the dayjs api call. A green timeblock delineates a future time block, red is for present and gray signifies that the hour block has passed.*

![Save button example](/Assets/savebuttonexample.png)<br>
*These are the save buttons that a user can click on in order to save their task. Each hour block has it's own specific button in case the user* 

## Technologies Used ##
JavaScript <br>
jquery <br>
CSS <br>
HTML <br>

## Links ##
[Github Repo](https://github.com/Chapjae/daily-planner)
[Deployed site](https://chapjae.github.io/daily-planner/)