import { StringReversalPipe } from './string-reversal.pipe';

describe('StringReversalPipe', () => {
  it('create an instance', () => {
    const pipe = new StringReversalPipe();
    expect(pipe).toBeTruthy();
  });
});
