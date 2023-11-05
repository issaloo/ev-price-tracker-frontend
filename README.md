# EV Price Tracker - Frontend

## Overview

This repo contains code to ...

## Technologies

- Secret Manager (GCP)
  - Store secrets
- Cloud Source Repositories (GCP)
  - Mirror this repository for cloud function
- Django Rest Framework
  - Create Rest API
- NextJS
  - Quick boilerplate for UI

## Running Local Environment

### Database

1. In a terminal, proxy redis

```Shell
fly proxy 6379 -a evpricetrackercache
```

2. In another terminal, connect to redis-cli

```Shell
redis-cli
```

Auth into redis data base

```Shell
AUTH <PASSWORD>
```

### Backend

1. In a terminal, clone [ev-price-tracker-backend](https://github.com/issaloo/ev-price-tracker-backend)
2. Navigate to src directory

```Shell
cd src
```

2. Run Django Server

```Shell
   python manage.py runserver --settings=main.settings.local
```

### Frontend

1. In a terminal, clone [ev-price-tracker-frontend](https://github.com/issaloo/ev-price-tracker-frontend)
2. Navigate to the root directory

```Shell
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser

## Contributing

### General Guidelines

FILL IN HERE
