Ciklum University: JS Band Internship. Homework task 3

This project have same functionality with https://kotaleksei.github.io/js-band-hw-task-1/ project, 
with the exception of sortering (it wasn't a necessary condition) and add patterns (Singleton, Method factory)

## To start the project should:
1. npm i
2. npm run build 
3. npm run dev => After that in browser open page localhost:8080

## Objectives:
 - [x] Update your existing functionality by using **Method** **factory**
 - [x] Implement service for the local storage as **Singleton**

## Arch notes:
Example about prefix: we try to save ‘token’ with value ‘1234’ to the storage and we set prefix ‘JS-Band-’, we will have ‘JS-Band-token’ as a key and ‘1234’ as a value in the local storage.

## Acceptance criteria:
* New transport is created by using Factory Method pattern.
* Functionality should work as before
* Push you application into github pages
* Local storage prefix should be set one time on the application initialization
