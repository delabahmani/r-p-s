export const determineWinner = (
  playerChoice: number,
  computerChoice: number,
): string => {
  const outcomes: { [key: string]: string[] } = {
    "0": ["3", "2"], // Rock beats Lizard and Scissors
    "1": ["0", "4"], // Paper beats Rock and Spock
    "2": ["1", "3"], // Scissors beats Paper and Lizard
    "3": ["4", "1"], // Lizard beats Spock and Paper
    "4": ["0", "2"], // Spock beats Rock and Scissors
  };

  if (playerChoice === computerChoice) {
    return "DRAW!";
  }
  if (outcomes[playerChoice].includes(computerChoice.toString())) {
    return "You Win!!";
  }

  return "you lose!";
};
