import { sum } from "../sum"

test('Testing the SUm function', () => { 

    let res=sum(3,5);

    expect(res).toBe(8)
 })