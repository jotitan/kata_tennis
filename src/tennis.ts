class Tennis {
	scorePlayer1: number = 0;
	scorePlayer2: number = 0;

	public gameScore() {
		if (this.scorePlayer1 >= 4 && this.scorePlayer1 - this.scorePlayer2 >= 2) {
			return "Player 1 Win"
		}
		if (this.scorePlayer1 === this.scorePlayer2 && this.scorePlayer1 >= 3) {
			return "deuce"
		}
		return `${this.formatScore(this.scorePlayer1)} - ${this.formatScore(this.scorePlayer2)}`;
	}

	formatScore = (value: number): string => {
		switch (value) {
			case 0 :
				return "love";
			case 1 :
				return "fifteen";
			case 2 :
				return "thirty";
			case 3 :
				return "forty";
		}
		return "";
	}

	public firstPlayerWinPoint() {
		this.scorePlayer1++;
	}

	public secondPlayerWinPoint() {
		this.scorePlayer2++;
	}

}

export default Tennis;
