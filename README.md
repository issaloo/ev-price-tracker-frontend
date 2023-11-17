# EV Price Tracker - Frontend

## Overview

This code repository houses the frontend code for a dynamic web application designed to display Electric Vehicle (EV) prices for various EV models and provide insightful visualizations through graphs. The application aims to offer users a user-friendly interface to explore and compare pricing information for different electric vehicles, aiding them in making informed decisions when considering EV purchases.

## Technologies

- Secret Manager (GCP)
  - Store secrets
- Cloud Source Repositories (GCP)
  - Mirror this repository for cloud function
- Django Rest Framework
  - Create Rest API
- NextJS
  - Quick boilerplate for UI

## Contributing

### General Guidelines

Please take a look at the following guids on writing code:

- [TypeScript Style Guide](https://mkosir.github.io/typescript-style-guide/)

### Set Up Development Environment

#### Clone frontend, backend, and cache repository

```Shell
cd ~/GitHub/issaloo
git clone git@github.com:issaloo/ev-price-tracker-backend.git
git clone git@github.com:issaloo/ev-price-tracker-frontend.git
git clone git@github.com:issaloo/ev-price-tracker-cache.git
```

#### Set Up Database

1. Navigate to the cache repository

```Shell
cd ~/GitHub/issaloo/ev-price-tracker-cache
```

2. Follow the [cache environment steps](https://github.com/issaloo/ev-price-tracker-cache) to run the cache locally or in production

#### Set Up Backend

1. Navigate to the backend repository

```Shell
cd ~/GitHub/issaloo/ev-price-tracker-backend
```

2. Follow the [backend environment steps](https://github.com/issaloo/ev-price-tracker-backend) to run the backend locally or in production

#### Set Up Frontend

1. Navigate to the frontend repository

```Shell
cd ~/GitHub/issaloo/ev-price-tracker-backend
```

2. Install packages

```Shell
npm install
```

3.

4. TODO: INSTALL COMMITIZEN

## Running Frontend Local Environment

1. In the root directory of the frontend repository, copy .env.template to .env.local, and fill in the configs

```Shell
cp .env.local.template .env.local
```

3. Run the local environment

```Shell
npm run dev
```

4. Point your browser to [http://localhost:3000](http://localhost:3000)

## Running Frontend Production Environment

1. In the root directory of the frontend repository, copy .env.template to .env, and fill in the configs

```Shell
cp .env.local.template .env
```

2. Build the NextJS production app

```Shell
npm run build
```

3. Run the production environment (local production)

```Shell
npm run start
```

4. Point your browser to [http://localhost:3000](http://localhost:3000)

## Deploying to Production

1. Deploy to GCP

```Shell
npm run deploy
```
