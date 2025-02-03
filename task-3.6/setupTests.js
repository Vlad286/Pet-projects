import { TextEncoder, TextDecoder } from 'util';

// Это нужно, чтобы Jest не выбрасывал ошибку о том, что TextEncoder не определен
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
