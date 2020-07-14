function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  }
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const rows = [[], [], []];
    this.reels.forEach((reel) => {
      const reelCopy = Object.create(reel);
      rows.forEach((row, index) => {
        if (index === 0) {
          reelCopy.position -= 1;
          if (reelCopy.position === -1) {
            reelCopy.position = 7;
          }
        }
        if (index === 1 || index === 2) {
          reelCopy.position += 1;
          if (reelCopy.position === 8) {
            reelCopy.position = 0;
          }
        }

        row.push(reelCopy.display());
      });
    });
    for (row of rows) {
      console.log(row.join(' | '));
    }
  }
};

slotMachine.spin();
slotMachine.display();
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

// slotMachine.spin();
// slotMachine.display();
// // ♦ | ♠ | ♣
// // ♣ | ♥ | ☺
// // ☺ | ♦ | ★
