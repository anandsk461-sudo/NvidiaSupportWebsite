from flask import Flask, render_template, abort

app = Flask(__name__)

COMMANDS = [
    {
        "name": "/ticketpanel",
        "category": "Tickets",
        "description": "Send the NVIDIA Support ticket panel to the current channel.",
        "usage": "/ticketpanel",
        "permission": "Administrator",
        "details": "Posts an embed with a Create Ticket button. Members can use the button to open a private support channel."
    }
]

@app.route("/")
def home():
    return render_template("index.html", page="home")

@app.route("/commands")
def commands():
    return render_template("commands.html", page="commands", commands=COMMANDS)

@app.route("/about")
def about():
    return render_template("about.html", page="about")

@app.route("/support")
def support():
    return render_template("support.html", page="support")

@app.route("/privacy")
def privacy():
    return render_template("legal.html", page="privacy")

@app.route("/terms")
def terms():
    return render_template("legal.html", page="terms")

@app.errorhandler(404)
def not_found(error):
    return render_template("404.html", page=""), 404

if __name__ == "__main__":
    # Railway provides PORT. The app does not need your Discord bot token.
    import os
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
