# Pomodoro Clock

## Pomodoro Technique
The Pomodoro Technique is a time management method. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro.

## The Application
The application allows the user to specify the duration of the pomodoro session and the break. Upon the completion of each countdown, a sound is played indicating that the time is up. The timer can also be paused by the user.

This project is part of [freeCodeCamp](https://www.freecodecamp.org/)'s curriculum.

## User Stories

1. I can see an element with the break length, which by default (on load) displays a value of 5.

2. I can see an element with the pomodoro length, which by default displays a value of 25.

3. I can see an input element where I can specify the length of the pomodoro session.

4. I can see an input element where I can specify the length of the break session.

5. When a session begins, I can see an element with the timer label that shows a string indicating whether a promodoro or break session is running.

6. I can see an element that shows the time left in the session. NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

7. When a session is running I can see a clickable element that pauses or resumes the timer.

8. When a session is running, I can see a clickable element that stops the timer.

9. When I click the "stop" element, any running timer should be stopped.

10. I should not be able to set a session or break length to < 0.

11. If the timer is running, the app should show the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).

12. If the timer is running and I click the "pause" element, the countdown should pause.

13. If the timer is paused and I click the "resume" element, the countdown should resume running from the point at which it was paused.

14. When a pomodoro countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the session label should display a string indicating a break has begun.

15. When a pomodoro countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value that was specified.

16. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the session label should display a string indicating a pomodoro session has begun.

17. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new pomodoro countdown should begin, counting down from the value that was specified.

18. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that the time is up should play.

19. The audio element must be 1 second or longer.

*Note: These user stories conform to the old requirements of freeCodeCamp. They have since updated their curriculum.*