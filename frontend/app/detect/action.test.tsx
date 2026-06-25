/**
 * @jest-environment node
 */

import { detect } from "./actions";

describe("detect function", () => {
  test("should return an error if title or content is missing", async () => {
    const formData = new FormData();

    formData.append("title", "Test Title");
    formData.append("content", "");
    formData.append("reasoning", "on");

    const result = await detect(null, formData);

    expect(result).toEqual({
      ok: false,
      error: "Title and content are required",
    });
  });

  test("Should return an error if title is missing", async () => {
    const formData = new FormData();
    formData.append("title", "");
    formData.append("content", "Test Content");
    formData.append("reasoning", "on");

    const result = await detect(null, formData);

    expect(result).toEqual({
      ok: false,
      error: "Title and content are required",
    });
  });

  test("Api test", async () => {
    const formData = new FormData();
    formData.append("title", "Test Title");
    formData.append("content", "Test Content ".repeat(100) + "Test Content");
    formData.append("reasoning", "on");

    // Mock the post function to throw an error
    const result = await detect(null, formData);
    expect(result?.ok).toBe(true);

    expect(result).toEqual({
      ok: true,
      data: {
        prediction: {
          label: expect.any(Boolean),
          probability: expect.any(Number),
        },
      },
    });
  });

  test("should return an error if content is less than or equal to 1000 characters", async () => {
    const formData = new FormData();

    formData.append("title", "Test Title");
    formData.append("content", "this is a very short content");
    formData.append("reasoning", "on");

    const result = await detect(null, formData);

    expect(result).toEqual({
      ok: false,
      error: "Content must be more than 1000 characters",
    });
  });
});
