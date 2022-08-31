# My TV Blan

**Run the development server:**

```
pnpm install
pnpm run dev
```

**For Graphql, you need to run:**
```
pnpm run generate
```

## Basic Features implemented
- The whole project is a single page application implemented using NextJs framework with typescript, SCSS and CSS modules
- Replicated layout for pages of schedules and show, a selector for country is added.
- Responsiveness are built on the pages.
- REST APIs for schedules, show and casts are implemented.

## Extra features
- Responsive Image on Show Page
- Performance optimised using the caching with Server Side Rendering provided by NextJs.
- A brief GraphQL wrapper was created for the REST API, but unfortunately it's not yet completed comprehensively.  Progressive results could be found in [http://localhost:3000/gql-demo](http://localhost:3000/gql_demo).

## Further Works to be done
- The results REST APIs should be validated.  The plan was using the schema created for graphql to validate the data but not enough time for it.
