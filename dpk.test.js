const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return trivial partition key when event is not defined", () => {
    const result = deterministicPartitionKey();
    expect(result).toEqual("0");
  });

  it("should return event partition key when it is defined", () => {
    const event = { partitionKey: "123" };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual("123");
  });

  it("should return hashed event when partition key is not defined", () => {
    const event = { foo: "bar" };
    const result = deterministicPartitionKey(event);
    expect(result).toEqual(expect.any(String));
  });

  it("should return hashed candidate when candidate length is greater than max partition key length", () => {
    const event = { foo: "bar" };
    const result = deterministicPartitionKey({ ...event, partitionKey: "a".repeat(300) });
    expect(result).toEqual(expect.any(String));
  });
});
