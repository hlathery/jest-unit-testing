import { expect, test } from "@jest/globals";
import mut from "./module.js";

test("Testing sum -- success", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});


test("Testing div -- success", () => {
  const got = mut.div(0, 0);
  expect(got).toBeNaN();
});

test("Testing div -- success", () => {
  const got = mut.div(1, 0);
  expect(got).toBe(Infinity);
});

test("Testing div -- success", () => {
  const got = mut.div(Infinity, 0);
  expect(got).toBe(Infinity);
});

test("Testing div -- success", () => {
  const got = mut.div(Infinity, -0);
  expect(got).toBe(-Infinity);
});

test("Testing div -- success", () => {
  const got = mut.div(Infinity, Infinity);
  expect(got).toBeNaN();
});

test("Testing div -- success", () => {
  const got = mut.div(-Infinity, Infinity);
  expect(got).toBeNaN();
});


test("Testing containsNumbers -- success", () => {
  // err: false if not string
  const got = mut.containsNumbers(12345);
  expect(got).toBe(false);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("12345");
  expect(got).toBe(true);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("");
  expect(got).toBe(false);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("0000");
  expect(got).toBe(true);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("3a459mvnasd9149afv");
  expect(got).toBe(true);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("hello");
  expect(got).toBe(false);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("!@#$%");
  expect(got).toBe(false);
})

test("Testing containsNumbers -- success", () => {
  const got = mut.containsNumbers("    52  ")
  expect(got).toBe(true);
})