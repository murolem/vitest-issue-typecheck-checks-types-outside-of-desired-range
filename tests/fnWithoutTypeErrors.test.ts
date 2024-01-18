import { test } from 'vitest';
import { fnWithoutTypeErrors } from '../src/fnWithoutTypeErrors';

test('something', () => {
    fnWithoutTypeErrors();
})