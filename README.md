This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The following additional steps were taken after creating a default typescript nextjs project

- `yarn add @airstack/frames`
- in src/apps/page.tsx add:

```
import { init } from "@airstack/frames";

init(process.env.AIRSTACK_API_KEY as string);
```

- create a .env.local
- add a AIRSTACK_API_KEY=... env var with a valid key

then run:

```
yarn build
```

you may need to run `yarn build 2>output.txt` to capture all of the error output
