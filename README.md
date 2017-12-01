<!-- This is a static file -->
<!-- served from your routes in server.js -->


<!DOCTYPE html>
<html>
  <head>
    <title>Timestamp Microservice</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <header>
      <h1>
        Timestamp Microservice API
      </h1>
    </header>

    <main>
      <h3 class="bold">Example usage:</h3>
      <p>
        https://dour-handsaw.glitch.me/December%2015,%202015
      </p>
      <p>
        https://dour-handsaw.glitch.me/1450137600
      </p>
      <h3 class="bold">Example Output:</h3>
      <p>
        {"unix": 1450137600, "natural": "December 15, 2015"}
      </p>
    </main>

    <!-- Your web-app is https, so your scripts need to be too -->
    <script src="https://code.jquery.com/jquery-2.2.1.min.js"
            integrity="sha256-gvQgAFzTH6trSrAWoH1iPo9Xc96QxSZ3feW6kem+O00="
            crossorigin="anonymous"></script>
    <script src="/client.js"></script>

  </body>
</html>
