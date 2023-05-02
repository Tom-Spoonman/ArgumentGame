# ArgumentGame

## 1. Introduction
- The purpose of this game is to provide an interactive, browser-based multiplayer environment where players engage in argument-based gameplay. The high-level architecture consists of a frontend for user interaction, a backend for game logic and match management, and data storage for persisting match data.

## 2. Components
### User Interface:
  - Start Screen: Contains options to create or join a match, access settings, and view match history or user profile. Players can enter a match code or invite link to join an existing match.
  - Match Screen: Displays the argument at the center of the screen, with options to select words, phrases, or sentences. Action buttons (agree, disagree, propose changes) are prominently displayed and enabled or disabled based on the current selection. A message input area is provided for players to explain their actions. A "commit changes" button ends the turn and sends updates to the other player(s).
  - Settings Screen: Allows users to adjust preferences, such as text size, color themes, and notification settings.
  - Additional Screens: Match history (with replay functionality), user profile, and help or tutorial screens.

### Match Management:
  - Players can create or join a match by entering a unique match code or following an invite link.
  - Real-time match updates are facilitated through WebSocket communication between the frontend and backend.
  - The game follows a turn-based system, with each player taking turns to perform actions on the argument.

### Argument Interaction:
  - Players can select words, phrases, or sentences using touch events, mouse click events, or keyboard navigation (tab and enter keys).
  - Actions available for selected text include "agree", "disagree", and "propose change".
  - Players can attach messages to their actions, explaining their rationale or suggesting alternatives. They can also commit or undo changes before ending their turn.

### Match Conclusion:
  - The game ends when players agree on the entire argument, choose to agree to disagree, or one or both players quit the match.
  - Match history is saved, including the final state of the argument and each player's actions and messages.

### Networking:
  - Players can start or join matches and fetch and push match data and turn data through the backend server.
