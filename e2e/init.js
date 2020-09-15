/* eslint-disable import/no-extraneous-dependencies */
import detox from "detox";
import adapter from "detox/runners/jest/adapter";
import specReporter from "detox/runners/jest/specReporter";

/* eslint-enable import/no-extraneous-dependencies */
import json from "../package.json";

const { detox: config } = json;
// Set the default timeout
jest.setTimeout(120000);

/* eslint-disable jest/no-jasmine-globals */
/* eslint-disable no-undef */
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.

jasmine.getEnv().addReporter(specReporter);
/* eslint-enable jest/no-jasmine-globals */
/* eslint-enable no-undef */

beforeAll(async () => {
  await detox.init(config);
}, 300000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
