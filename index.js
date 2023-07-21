import lodash from "lodash";

export function helloNpm(arg) {
    const upperName = lodash.upperCase(arg)
    console.log(`Welcome to this NPM package ${upperName}`)
}

helloNpm('fjfjfj')