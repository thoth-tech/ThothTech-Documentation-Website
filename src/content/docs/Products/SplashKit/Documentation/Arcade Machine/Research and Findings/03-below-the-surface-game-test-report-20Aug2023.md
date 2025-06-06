---
title: Below The Surface Game Test Report
author: Wenxuan Song
---

Date of Testing: [20/08/2023]

## Executive Summary

This test report outlines findings from testing the arcade game "Below the Surface." The game
exhibited a critical issue when played with two players, where the movement of one player caused the
screen to move, leading to the other player's death when they moved off-screen. Additionally, a
suggestion was made to restrict player movements when they are positioned beyond the screen's
boundaries. The report discusses the problem's impact, provides reproduction steps, and suggests
potential solutions.

## Testing Goals

- The primary objective of testing was to assess the gameplay experience of the arcade game "Below
  the Surface" when played with two players simultaneously.
- The focus was on evaluating the game's screen movement behavior on the arcade machine and
  identifying any issues that arise as a result.

## Testing Environment

- Testing Tool: Arcade machine

## Test Cases

The following test cases were executed during the testing phase:

### Test Case 1: 2 players movement

- Description: Play in pairs to experience the effects of player movements in 2 players mode

1. Launch the game on the arcade machine with two players.
2. Begin gameplay, with both players moving in different directions.
3. Observe what happens when two players move on the screen at the same time

## Bugs/Issues

### Issue: Screen Movement Causing Player Deaths

- Description: When playing with two players, the movement of one player causes the screen to shift,
  resulting in the other player's death if they move off-screen.

1. Launch the game on the arcade machine with two players.
2. Begin gameplay, with both players moving in different directions.
3. Observe the screen movement causing one player to be left off-screen and subsequently dying.

**Impact:** The issue severely hampers multiplayer gameplay, rendering it frustrating and
unplayable.

**Proposed Solution:** The movement of the screen needs to be adjusted, and deaths should not occur
because of the movement of two players when playing. This ensures the core gameplay and fun of the
game.

- Improved Dual-Screen Mode: Modify the game's screen behavior to split into two distinct views when
  two players move in opposite directions. This would allow each player to move independently
  without affecting the other's gameplay. However, this solution may require significant technical
  adjustments and testing.
- Player Respawning Mechanism: Implement a respawning mechanism that triggers when a player moves
  off-screen. Upon detection of off-screen movement, the player would respawn at a safe location,
  ensuring they are not unfairly penalized for screen movement.
- Restrict Movement Beyond Screen Boundaries: Restrict player movements when they are positioned
  beyond the screen's boundaries. This would prevent screen movement caused by one player's actions
  and allow both players to remain on the same screen.

## Suggestions and Feedback

To address this issue and provide a seamless multiplayer experience, the following potential
solutions are recommended: -When the player reaches full health, he cannot pick up heart-shaped
items to increase health, but can instead increase score. -The color of the cockroach shaped monster
is too dim, and the dark background is easy to cause the player to lose sight of it -The jump rate
is too fast, making the player's countermeasures against the monsters too difficult

## Conclusion

The critical issue of screen movement affecting multiplayer gameplay in the arcade game "Below the
Surface" significantly detracts from the intended cooperative experience. The recommended solutions
aim to resolve this issue and restore the game's multiplayer functionality. Implementing these
solutions, along with the provided suggestions, will greatly enhance the overall enjoyment and
engagement of players.

---
