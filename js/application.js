// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  this.gm = new GameManager(20, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
