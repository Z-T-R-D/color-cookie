# Color Cookies

[![Netlify Status](https://api.netlify.com/api/v1/badges/00f9fc65-78ed-471b-96d8-27efffc17d85/deploy-status)](https://app.netlify.com/sites/color-cookie-app/deploys)
Welcome to the **Color Cookies** project! This monorepo houses two versions of the Color Cookies application:

- **v1:** The legacy version of the app, built using **Yarn**.
- **v2:** The current and active version of the app, built using **pnpm**.

You can view the live deployment here: [https://color-cookie-app.netlify.app/](https://color-cookie-app.netlify.app/)

## Getting Started

### Prerequisites

Make sure you have the following installed:
- [Yarn](https://yarnpkg.com/) (for v1)
- [pnpm](https://pnpm.io/) (for v2)

### Installing Dependencies

You can install the dependencies for both versions at once by using the Makefile:

cd v1
yarn install
yarn build

cd v2
pnpm install
pnpm build

