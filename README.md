## Getting Started

**meter.io** is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To run locally you need:

```bash
# This will use the repository .nvmrc file to select the correct node version (18.12.1)
# If you don't have `nvm` on you machine, you can skip this step and use 
# your version of npm, just make sure it's up-to-date
nvm use

# Install the dependencies
npm install

# Start local server
npm run dev
```

## Connecting with the API

To avoid exposure of API keys, I'm using a `.env.local` file to store the API_KEY. All you need to do is create your file and set the value. This file should be located in the root of the repository:

```bash
# /meter-io
# |->api
# |->public
# |->src
# |-.env.local <--- Here
# |...
# |-package.json
# |-package-lock.json

NEXT_PUBLIC_API_KEY=YOUR-KEY-HERE
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
