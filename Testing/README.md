# Unit Tests

We have implemented a **2D platformer game**. Even though analyzing our modules and generating equivalance classes for testing is strongly encouraged, we just tested our modules(functions or classes) manually.
The below testing aspects are referenced [here](https://tfortesting.wordpress.com/2012/10/04/test-cases-for-games-apps-checklist-for-games-apps/). We will list the aspects of testing, the tester, and the results.

### Check for background music and sound effects

- Tester: Jose
- Test aspects
	- Background music
		- The tester tested the game(for 3 times) and checked that the background music is played, and have appropriate volumn.
	- Verify if sound effects are in sync with action
		- The tester interacted with every pickups and enemies, and checked that the desired sound effect is in sync with action. Checked every sprites manually, by touching all the enemies once, or get each pickups independently.

### User Interface

- Tester: Raymond, Changwan
- Test aspects
	- Check for animation, movement of character, graphics
		- The characters movement was limited by frames so deliberate animation choices were done. The characters max height could only be 48 pixels so each pixel had to be very well chosen for animation frames. This was tested via different models to get a good view given the size and we ended up with a gloved protagonist slug.
	- There should not be any clipping (cutted background)
		- Clipping was tested via playing with physics limitations and maintaining separate level design for background versus a collisions map
	- Test whether one object overlaps with another
		- The collision map was tested by continously forcing the slug to move into edge cases such as cliffs and walls to ensure no areas were reachable unless we wanted them to be
	- Test for enable and disable images/icons/buttons etc
		- To test for the disabling of images we implemented a transparency test with a pickup slice of pizza in order to ensure it would go from foreground to background. After many tests with different values we were able to have the building appear and disappear from player view.
	- Check for screen title
		- We tested by starting the game several times. The starting screen appeared normally
	- Check scrolling
		- We checked scrollability of leaderboard by adding several usernames and scrolling it(Added 15 users).

### Performance

- Tester: Junhee, Jose
- Test aspects
	- Check the loading time of a game
		- The loading time was too long, so we decided to add a loading bar. We have tested by starting the game again and again(for 3 times).
	- Make sure that any action is not taking considerable time, game flow should be fast
		- Every player interaction is checked by several game plays, and the game flowed well.

### Score

- Tester: Soyoung, Junhee, Changwan
- Test aspects
	- Score calculation
		- Checked by gaining pickups or killing enemies in gameplay. Checked by multiple gameplay
	- Verify leaderboards and Check the score registration functionality
		- Added several results to leaderboards, and checked that the synchronization between database and user interbase. Worked fine. We did it by deleting the columns in the remote db, and checking that the local database's columns has disappeared.
	- Check the format (whether, comma is required in score etc ideally if customer is a foriegner coma should be in millions not in thousands)
		- Restricted the maximum username to 10 characters since initially it was overlapping with the score. Tested by registering unexpected usernames.
	- Check for level completion syncs with the score
		- Tester checked by finishing the game and getting into portals(for 10 times). The socres displayed while in gameplay and the score displayed when level completion were identical.

### Time Out

- Tester: Raymond
- Test aspects
	- Check for time out
		- The tester waited for the time out(for 3 times), and checked that game over state is successfully loaded.
	- Do the actions when time-out yet to happen
		- As mentioned above, when time out, the state is switched to gameover state.

### Functionality

- Tester: Everyone
- Test aspects and results
	- Check game area, game logic
		- Everyone played the level, and checked implentation of game area and logic. Everything behaved as intended.
	- Play till last level
		- Everyone played the level, and finished the game mulitiple times(about 10 times or more)

### Size

- Tester: Changwan
- Test aspects and results
	- Game file size
		- 70 MB without the node.js module for phaser, we deleted unnecessary source and assets for reduction of game size

