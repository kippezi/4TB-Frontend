# 4TB-Frontend

4TB-Frontend is the client-side component of the 4TB-Unity game system, developed using the **React** framework. It is responsible for managing player interactions during the game, including submitting answers to quiz questions. The frontend communicates with the backend (found in the `4TB-Backend` repository) to manage game state and display questions to players.

The frontend contains the following components in the **src/components folder**:
- **JoinForm**: A form used for players to join the game.
- **AnswerFirstForm**: A form for players to submit their answer for the first question.
- **AnswerSecondForm**: A form for players to submit their answer for the second question.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Components](#components)
---

## Project Overview

4TB-Frontend is the part of the 4TB-Unity game that players interact with directly. Built with React, it provides dynamic and responsive forms for players to join the game and submit answers. The frontend communicates with the backend (4TB-Backend) to get game data and send responses, enabling a seamless multiplayer experience.

## Components

The application consists of the following main components:

### 1. **JoinForm**
   - **Description**: The `JoinForm` component allows players to join the game by providing their unique identifier (ID). The form submits the player’s information to the backend, which then associates them with the ongoing game session.
   - **Functionality**: 
     - Players can enter their name and choose a unique ID to join the game session.
     - Once the form is submitted, the player’s information is sent to the backend, and they are added to the game session.

### 2. **AnswerFirstForm**
   - **Description**: The `AnswerFirstForm` component presents the first question of the game to the player. The player can select one of the two answer alternatives and submit their response.
   - **Functionality**:
     - Displays the first question with two alternatives (`alternativeA` and `alternativeB`).
     - Submits the selected answer to the backend for evaluation and updates the game state.

### 3. **AnswerSecondForm**
   - **Description**: Similar to the first form, the `AnswerSecondForm` handles the second question of the game. Players provide their answer for the second question, which is submitted to the backend.
   - **Functionality**:
     - Displays the second question with the possible alternatives.
     - Submits the selected answer to the backend for processing.

Each of these components serves a specific part of the game and is linked to the backend for maintaining game state and managing player data.


