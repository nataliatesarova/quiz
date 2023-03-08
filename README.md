# Quiz World
Quiz world is a multiple choice quiz on capital cities of the world. The quiz aims to give an interactive, educational and fun game experience for users aged 10+ to test and expand their knowledge of the world's capital cities. At the end of the game users will get a score and option to play again. View the live site [here](https://nataliatesarova.github.io/quiz/).

![multiple device images](assets/images/multipledevices.png)

## Features 
### Favicon logo
* A favicon of planet earth is incorporated to aid branding of the quiz and also enables users to more easily locate the page when multiple tabs are open.

![favicon](assets/images/favicon.png)

### Heading
The Quiz Map title followed by a location on map logo clearly coveys the subject material of the quiz to the user.

![quiz name and logo](assets/images/heading%20and%20logo.png)

### Start quiz overlay
* A colorful map incorporarting the flags of the world followed by the statement 'Let's practice capital cities' clearly conveys the fun educational intention of the quiz and prompts the user to click the start button. The start button changes color from grey to blue when the cursor is hovered over. The welcome title and start button are presented in an overlay screen which disappears on pressing the start button which is then followed with the first quiz question.

![Overlay with start button](assets/images/overlay.png)

### Question and answers
* Ten questions was included in the quiz, a number intended to be mangageable by all users. Each of the questions are followed by 4 answer choices which can be chosen by clicking a radio button. 

![first question](assets/images/firstpage.png)

* Only when an answer is selected is it possible to click on the check answer button leading to highlighting in green or red if the answer is correct or incorrect respectively. The check answer button is then disabled turning from dark grey to light grey in color, and the next button becomes enabled. Once an answer is selected and check answer button clicked it is not possible to change the answer choice. 

![correct answer](assets/images/correct.png)
![incorrect answer](assets/images/incorrect.png)

* On clicking the next button the counters of question number, and number of right and wrong answers are updated. The check answer and next button also incorporate a hover color change feature.

![counter changing](assets/images/second.png)
*The next button disappears on the last question.

![final question](assets/images/thelastquestion.png)
* Final game over page gives score summary and restart button appears to give user option to try quiz again.

![summary page](assets/images/summarypage.png)

### Features left to implement
* A possible future enhancement would be to add: 
* Game timer.
* Addition of more question topics such as rivers of the world and identifying images of flags of the world.
* Randomised questions.
* Varying final summary page with animation depending on how well the user scored e.g. champagne cork exploding if 10/10 correct answers.

### Accesibility
* Use of semantic HTML.
* Use of alt attributes to provide alternative information for users.
* Use of Adobe Color to check colour contrast.
* Color contrasts meet the standards specified in [WCAG 2.1 contrast guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

##  Design
### Color scheme
The color scheme is as follows:
* Main background - light blue RGB (173,216,230).
* Overlay background - purple RGB (124, 94, 186).  
* Game summary background - cyan RGB (64, 224, 208).
* Main font - black RGB (0,0,0).
* Overlay font - white RGB (255, 255, 255).
* Correct answer - green RGB (0,128,0).
* Incorrect answer - red RGB (255,0,0). 
* Button color - grey RGB (111, 111, 111).
* Button hover - blue RGB (100, 149, 237).
* Disabled button - silver RGB (192, 192, 192).
* Button text - white RGB (255,255,255).

### Typography
* Alegreya font from Google fonts.
* Sans-serif.

### Logo
The logo was obtained from [Font Awesome](https://fontawesome.com/).

![logo](assets/images/logo.png)

### Images
The world flag map image was obtained from [Stock Vault](https://www.stockvault.net/photo/157915/world-flag-map).
![image](assets/images/map.jpeg)

### Balsamiq frameworks
Overlay
![wireframe desktop computer](assets/images/1.png)
![wireframe mobile phone](assets/images/phone1.png)

Main page 
![wireframe desktop computer](assets/images/2.png)
![wireframe mobile phone](assets/images/phone2.png)
![wireframe desktop computer](assets/images/3.png)
![wireframe mobile phone](assets/images/phone3.png)

## Testing
### Responsiveness
* All pages were tested and found to be resposive using [TechSini Multi device Website Mockup Generator](https://techsini.com/multi-mockup/) and Google Chrome DevTools. The web site was tested on Google Chrome, Safari,  Microsoft Edge and Opera browsers with iPhone SE, iPhone 14 Pro, iPhone 14 Pro Max, Samsung Galaxy S8+, Ipad Air devices. Pass.

### Validator
* HTML: Errors were not found when passing through the official W3C validator.
![html validator](assets/images/html%20validator.png)

* CSS: No Errors were found when passing through the official Jigsaw validator at the final check.
![Jigsaw validator](assets/images/cssvalidator.png)

* JSHint was used to check for errors in the JavaScript code, and no errors found.

### Accessibility
* Adobe Color was used to test contrast for accessibility. 
![adobe colour contrast test](assets/images/adobe1.png)
![adobe colour contrast test](assets/images/adobe2.png)
* Lighthouse in the Chrome Developer Tools was used to test website performance, accessibility, and adherance to best practices and search engine optimization (SEO) advice. 
![lighthouse](assets/images/lighthouse.png)

### Bugs
* HTML Validator detected the error of double writing the word 'type' in the code for the start button. This was solved by deleting the word.
* Game over was not displaying on smaller devices which was fixed by adding margin-top in media queries.

### Manual testing
Logo and text
  - Confirm that the logo and text fonts were loaded, and were responsive to different screen sizes. Pass.

Overlay and image
- Check the overlay and map flag image was loaded correctly and was responsive to different screen sizes. Pass.
- Clicking start button causes overlay screen to disappear and quiz initiation. Pass.

Quiz
- Radio buttons highlight when clicked. Pass.
- Hover feature on check answer button and next button function. Pass.
- Check answer button can only be clicked if radio button clicked first. Pass.
- Once clicked the check answer button changes color to light grey and becomes disabled, and the chosen answer is highlighted in green or red if correct or incorrect respectively. Pass.
- The next button becomes enabled only after check answer button clicked. Pass.
- On clicking next button the subsequent question and answers are displayed. Pass.
- Next button dissapears on final question. Pass.
- On clicking check answer button on final question the game over summary score page is displayed. Pass.

## Technologies used
### Languages
* HyperText Markup language (HTML) - the standard markup language for documents designed to be displayed in a web browser.
* Cascading Style Sheets (CSS) - used to describe the presentation of the document written in HTML.
* JavaScript (JS) - used to add interactivity and dynamic functionality to web pages.









