import { Bar } from "./Bar";

describe("Bar", () => {
    it("should not be null", () => {
        var bar = new Bar();
        expect(bar).not.toBeNull()
    });
});