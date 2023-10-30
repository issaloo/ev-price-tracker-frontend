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

### Backend

1. Clone [ev-price-tracker-backend](https://github.com/issaloo/ev-price-tracker-backend)
2. Navigate to src directory

```Shell
cd src
```

2. Run Django Server

```Shell
   python manage.py runserver --settings=main.settings.local
```

### Frontend

In a separate terminal...

1. Clone [ev-price-tracker-frontend](https://github.com/issaloo/ev-price-tracker-frontend)
2. Navigate to the root directory

```Shell
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser

## Contributing

### General Guidelines

FILL IN HERE

### Set Up Development Environment

FILL IN HERE
