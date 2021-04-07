import Tennis from "../tennis";

describe('tennis', () => {
    it('should return love - love when starting', () => {
        let tennis = new Tennis();
        expect(tennis.gameScore()).toEqual("love - love");
    });
});