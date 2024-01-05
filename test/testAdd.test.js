import {myAdd} from "../myFunc";
import {expect, test} from "@jest/globals";

test('1 + 2 should equals 3', () => {
    expect(myAdd(1, 2)).toBe(3);
})