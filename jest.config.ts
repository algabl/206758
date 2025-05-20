import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/src/mocks/fileMock.js",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"], // should include "json"
};

export default config;
