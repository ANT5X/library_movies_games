# PIXELVERSE

Django recreation of the [PIXELVERSE design](https://soft-blancmange-46f74a.netlify.app/) — a Ukrainian gaming and cinema news portal.

## Quick start

```bash
cd C:\Users\Admin\Projects\pixelverse
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

## Features

- Dark neon UI with Orbitron + Inter typography
- Single-page layout with section navigation (Home, Games, Movies, Originals)
- News grid, poster carousel, and catalog cards
- Registration modal and community chat widget (client-side demo)

## Project structure

```
pixelverse/
├── config/          # Django project settings
├── portal/          # Main app
│   ├── static/      # CSS & JS
│   └── templates/   # HTML templates
└── manage.py
```
