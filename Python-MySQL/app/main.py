from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return "<h1>Hello World!</h1>"


@app.route("/cli")
def index_cli():
    return "<h1>CLI!</h1>"


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0',)
