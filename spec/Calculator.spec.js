
describe("Evaluation",function(){
    it("Evaluating the expressions", function(){
        expect(eval("2+3")).toEqual(5);
        expect(eval("2-3")).toEqual(-1);
        expect(eval("2/3")).toEqual(0.66);
        expect(eval("2*3")).toEqual(6);
    })
})


