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
});