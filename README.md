## **Trivia Game**

In this task, you are going to create a **multiple choice** quiz game with React.js using [Open Trivia Database](https://opentdb.com/)
You may use any additional library that you like.

### Requirements

- User should be able to start game by pressing a button
- A game should be containing at least 10 questions.
- If user selects the wrong answer, game ends.
- Questions are fetched from Open Trivia Database Api

### Bonus Features

These are bonus features that are not mandatory for this task. But even if you decide not to implement these features for this task, if you implement your code to allow future implementation of these features, that is highly encouraged (just a comment describing why you implemented your code that way is sufficent)

1. Difficulty Selection
2. Usage of Lottie Animation(https://github.com/chenqingspring/react-lottie - https://lottiefiles.com/)
3. Multiple category options on welcome page
4. 50% Joker - Disables two wrong answers(Can be used only once)
5. Timer - User has 15 seconds to answer the question, if user does not answer the question in given time, user should be directed to a page which states that time's up.
6. Point system - User earns points with respect to remaining time.
7. Host your web application's final version on [Netlify](https://www.netlify.com/) or any other similar platform.

### Getting Started

1. Create a new react project following guide in this link: https://reactjs.org/docs/create-a-new-react-app.html \
   If you like to use typescript(recommended) you may use these commands:

```
npx create-react-app trivia-app --template typescript
cd trivia-app
yarn start #or npm start
```

2. Generate an API URL for your desired category from https://opentdb.com/api_config.php
   (Number of Questions : `10` and Select Type: `Multiple Choice`)\
   Example Response:

```
// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple

{
  "response_code": 0,
  "results": [
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which sign of the zodiac is represented by the Crab?",
      "correct_answer": "Cancer",
      "incorrect_answers": [
        "Libra",
        "Virgo",
        "Sagittarius"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
      "correct_answer": "Cube",
      "incorrect_answers": [
        "Sphere",
        "Cylinder",
        "Pyramid"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "How many colors are there in a rainbow?",
      "correct_answer": "7",
      "incorrect_answers": [
        "8",
        "9",
        "10"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Five dollars is worth how many nickles?",
      "correct_answer": "100",
      "incorrect_answers": [
        "50",
        "25",
        "69"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of the following presidents is not on Mount Rushmore?",
      "correct_answer": "John F. Kennedy",
      "incorrect_answers": [
        "Theodore Roosevelt",
        "Abraham Lincoln",
        "Thomas Jefferson"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is Tasmania?",
      "correct_answer": "An Australian State",
      "incorrect_answers": [
        "A flavor of Ben and Jerry&#039;s ice-cream",
        "A Psychological Disorder",
        "The Name of a Warner Brothers Cartoon Character"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What zodiac sign is represented by a pair of scales?",
      "correct_answer": "Libra",
      "incorrect_answers": [
        "Aries",
        "Capricorn",
        "Sagittarius"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What nuts are used in the production of marzipan?",
      "correct_answer": "Almonds",
      "incorrect_answers": [
        "Peanuts",
        "Walnuts",
        "Pistachios"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
      "correct_answer": "Plum",
      "incorrect_answers": [
        "Apple",
        "Peach",
        "Pear"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "If you are caught &quot;Goldbricking&quot;, what are you doing wrong?",
      "correct_answer": "Slacking",
      "incorrect_answers": [
        "Smoking",
        "Stealing",
        "Cheating"
      ]
    }
  ]
}
```

### Possible Pages

#### 1) Welcome Page:

Describing that this is a quiz game, and containing a get started button

![IMG_0336](https://i.ibb.co/zNr161B/Welcome.png)

#### 2) Question Page:

Showing question, possible answers, current position(question number) and remaining time(optional)

![IMG_0336](https://i.ibb.co/xJKVkBH/Question.png)


#### 3) Correct Answer Page

A page that states that the user answered the question correctly. Contains a Continue button to see the next question.

![IMG_0336](https://i.ibb.co/sCyCfZd/Correct-Answer.png)


#### 4) Wrong Answer Page

A page that states that the user selected the wrong answer.

(There is no wireframe for this page, we would like to see your UI skills)
