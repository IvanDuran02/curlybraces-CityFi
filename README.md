This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
# Our stack

- We decided to go with NextJS so we could have our backend coupled with our front-end to be easily deployed to Vercel on the edge. Our original plan for database was to host a postgres database on planetscale but due to some issues with connectivity we have used sqlite, although the infastructure to migrate to planetscale is just a minute away thanks to Prisma. On that point we went with Prisma to talk to our database and make querying a bit easier.

Finally we use Google Maps Platform to show users current location and to setup markers at set postions, issues or hazards etc...
We didn't exactly manage to get our Authentication for user sign in setup in time although the endpoints are already done shown below.

## Endpoints:
- GET: api/report/[id] 
- GET: api/user/[id]
- POST: api/report/create-report
- POST: api/user/create-user
- DELETE: api/report/[id]
- DELETE: api/user/[id]
- GET: api/user/users
- GET: api/report/reports 
