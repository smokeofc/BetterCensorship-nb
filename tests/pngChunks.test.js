// Usage: node tests/pngChunks.test.js
const assert = require('assert');

const PNG_SIG = String.fromCharCode(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a);

function itos(v, size) {
  const a = new Array(size);
  for (let t = size - 1; t >= 0; t--) {
    a[t] = String.fromCharCode(v & 0xFF);
    v >>= 8;
  }
  return a.join('');
}

function stoi(s) {
  let v = 0;
  for (let i = 0; i < s.length; i++) {
    v = (v << 8) | (s.charCodeAt(i) & 0xFF);
  }
  return v;
}

function isPNG(s) {
  return s.substr(0, 8) === PNG_SIG;
}

function splitChunk(s) {
  let sig = s.substr(0, 8);
  if (!isPNG(sig)) return false;
  s = s.substr(8);
  const chunklist = [];
  while (s.length >= 12) {
    const size = stoi(s.substr(0, 4));
    const buf = s.substr(0, size + 12);
    s = s.substr(size + 12);
    chunklist.push({
      size,
      type: buf.substr(4, 4),
      data: buf.substr(8, size),
      crc: stoi(buf.substr(8 + size, 4))
    });
  }
  return chunklist;
}

function joinChunk(list) {
  let pf = PNG_SIG;
  for (const chunk of list) {
    pf += itos(chunk.size, 4) + chunk.type + chunk.data + itos(chunk.crc, 4);
  }
  return pf;
}

const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAwAB/t1rdzsAAAAASUVORK5CYII=';
const original = Buffer.from(base64, 'base64').toString('binary');
const chunks = splitChunk(original);
const result = joinChunk(chunks);

assert.strictEqual(result, original);
console.log('png chunk split/join test passed');
