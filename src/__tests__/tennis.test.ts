import Tennis from "../tennis";

describe('tennis', () => {
    it('should return love - love when starting', () => {
        let tennis = new Tennis();
        expect(tennis.gameScore()).toEqual("love - love");
    });
	it('should allow player 1 to win a point', () => {
		let tennis = new Tennis();
		tennis.firstPlayerWinPoint();
		expect(tennis.gameScore()).toEqual("fifteen - love");
	});
	
	it('should allow player 2 to win a point', () => {
		let tennis = new Tennis();
		tennis.secondPlayerWinPoint();
		expect(tennis.gameScore()).toEqual("love - fifteen");
	});
	it('should allow player 1 to win two point', () => {
		let tennis = new Tennis();
		tennis.firstPlayerWinPoint();
		tennis.firstPlayerWinPoint();
		expect(tennis.gameScore()).toEqual("thirty - love");
	});
	
	it('should have deuce', () => {
		let tennis = new Tennis();
		tennis.firstPlayerWinPoint();
		tennis.firstPlayerWinPoint();
		tennis.firstPlayerWinPoint();
		tennis.secondPlayerWinPoint();
		tennis.secondPlayerWinPoint();
		tennis.secondPlayerWinPoint();
		expect(tennis.gameScore()).toEqual("deuce");
	});

	it('player 1 should win the match', () => {
		let tennis = new Tennis();
		tennis.firstPlayerWinPoint();
		tennis.firstPlayerWinPoint();
		tennis.firstPlayerWinPoint();
		tennis.secondPlayerWinPoint();
		tennis.secondPlayerWinPoint();
		tennis.secondPlayerWinPoint(); //deus ex machina
		tennis.firstPlayerWinPoint(); // advantage
		tennis.firstPlayerWinPoint(); // won
		expect(tennis.gameScore()).toEqual("Player 1 Win");
	});

});
