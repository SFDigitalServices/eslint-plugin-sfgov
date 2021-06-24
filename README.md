# eslint-plugin-sfgov

This is the shared [eslint] configuration for the [SF Digital Services team].

## Usage

0. Upgrade to npm 7:

    ```sh
    npm i -g npm@7
    ```
    
    This is unfortunately necessary until we can resolve issues with shared
    eslint rule dependencies. This isn't necessary if you're running Node
    version ≥15, which comes with npm 7.

1. Install `eslint` and `eslint-plugin-sfgov` as dev dependencies:

    ```sh
    npm install --save-dev eslint eslint-plugin-sfgov
    ```

2. Set up your eslint configuration, either in a standalone config file, e.g.
   `.eslintrc.json`:

    ```json
    {
      "plugins": [
        "sfgov"
      ],
      "extends": [
        "plugin:sfgov/recommended"
      ]
    }
    ```

    or paste the above JSON into the `eslintConfig` key of your `package.json`.

3. Configure additional eslint [overrides] or [environments] in your project,
   if necessary. See the list of [available
   configurations](#available-configurations) for more info.

4. Test it! Run `npx eslint` to lint all of the known JS files in your project,
   or pass specific file paths a la `npx eslint src/**/*.js`.
   
    ℹ️ If the issues that your new eslint config surfaces are overwhelming, you
    can use [eslint-nibble](https://github.com/IanVS/eslint-nibble) to get an
    overview and focus on specific rules.

    Assuming your JavaScript is committed to git, and depending on the nature
    of your rule violations, it may also be possible to fix many (or even
    most) of them by running eslint with the `--fix` flag.

5. Add a `lint` or `lint-js` entry in the `scripts` field of your
   `package.json` that runs `eslint` on all of the relevant files in your
   project.

6. Call `npm run lint` in your CI workflow to fail builds with malformed code.

### Available configurations

Each of the configurations below can be included in the `extends` array of your
eslint configuration.

#### `plugin:sfgov/recommended`

This is the "base" configuration that [includes](configs/recommended.js):

- [standard] formatting rules
- An override for the [`semi` rule][semi rule] that rejects semicolons _except_ when
  they're necessary to avoid pitfalls with [automatic semicolon insertion]
- [eslint:recommended] rules
- [Import] support and the [plugin:import/recommended] configuration
- [Promise] support and the [plugin:promise/recommended] configuration

These rules should work in any [environment][environments].

#### `plugin:sfgov/node`

This configuration is intended for JavaScript that runs directly in Node, and
[includes](configs/node.js):

- [Node] support and the [plugin:node/recommended] configuration
- Disabling of the [node/no-unpublished-require] rule

#### `plugin:sfgov/jest`

This configuration includes:

- [Jest] support and the its
  [`plugin:jest/recommended`](https://github.com/jest-community/eslint-plugin-jest#recommended)
  configuration
- An override that disables [promise/always-return] to account for testing
  scenarios in which promises don't need to return anything, e.g. when using
  [supertest]

## Why a plugin?
You may have noticed that this package is published as an eslint _plugin_
rather than a "config" (i.e. `eslint-config-sfgov`). One challenge with
[shareable configs](https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config)
is that they can't reference their own plugins, which means that you (a
consumer of this configuration) have to install all of them in your project.
Popular configurations like [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1)
suggest `npx` and/or shell one-liners to install all of their peer dependencies
in your own `package.json`, which stinks. This configuration comes with the
batteries included, and adds a single dev dependency to your `package.json`.

[eslint]: http://eslint.org/
[sf digital services team]: https://sfdigitalservices.github.io/
[overrides]: https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
[environments]: https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
[standard]: https://www.npmjs.com/package/eslint-config-standard
[semi rule]: https://eslint.org/docs/rules/semi
[automatic semicolon insertion]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion
[eslint:recommended]: https://github.com/eslint/eslint/blob/e2bed2ead22b575d55ccaeed94eecd3a979dd871/conf/eslint-recommended.js
[import]: https://www.npmjs.com/package/eslint-plugin-import
[plugin:import/recommended]: https://github.com/benmosher/eslint-plugin-import/blob/40794824e5d6a3c952a23c22feff43e6e4436255/config/recommended.js
[promise]: https://www.npmjs.com/package/eslint-plugin-promise
[plugin:promise/recommended]: https://github.com/xjamundx/eslint-plugin-promise/blob/485509660ccc1901fd30040cf4e75c88922c6255/index.js#L28-L44
[node]: https://www.npmjs.com/package/eslint-plugin-node
[plugin:node/recommended]: https://github.com/mysticatea/eslint-plugin-node/blob/f45c6149be7235c0f7422d1179c25726afeecd83/lib/configs/recommended.js
[node/no-unpublished-require]: https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md#readme
[jest]: https://jestjs.io/
[promise/always-return]: https://github.com/xjamundx/eslint-plugin-promise/blob/485509660ccc1901fd30040cf4e75c88922c6255/docs/rules/always-return.md#readme
[supertest]: https://www.npmjs.com/package/supertest
