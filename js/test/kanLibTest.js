/**
 * Created by changxin on 2016/1/30.
 */
describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
        //expect("Conan").toEqual(reverse("nano"));
    });
});