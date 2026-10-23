# NVIDIA Support Website

A public support/documentation website inspired by modern Discord bot sites, using an original black and crimson-red visual identity.

## Pages
- `/` — Home
- `/commands` — Command reference with search/filter
- `/about` — About the bot
- `/support` — Support guidance and Discord links
- `/privacy` — Privacy information template
- `/terms` — Terms template

## Current command accuracy
The uploaded `bot.py` registers one slash command: `/ticketpanel` (Administrator only).
- `Create Ticket` and `Close Ticket` are Discord buttons, not slash commands.
- Do not list moderation commands until they are implemented in the bot.

## Run locally
```bash
python -m pip install -r requirements.txt
python app.py
```
Open `http://127.0.0.1:8080`.

## Deploy as a separate Railway service
1. Upload this folder to a new GitHub repository.
2. In Railway, create a new project/service from that repository.
3. Railway should use `Procfile` and install `requirements.txt`.
4. Add a custom domain in Railway if desired.
5. Keep this website service separate from your Discord bot worker.

This public website does not require your Discord bot token and does not include a dashboard or login.

## Before publishing
Replace the placeholder Discord invite/support URLs in `templates/base.html` with your real invite and support-server links. Review the privacy and terms templates before using them as legal policies.
