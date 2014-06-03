describe('Hello', function() {
    it('calls the fire() function', function() {
    	var fakeFrog = new Frog();
        expect(fakeFrog.fire()).toEqual(50);
    });
});
