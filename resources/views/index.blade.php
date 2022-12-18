<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'LUCID') }}</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
<body>

    <noscript>You need to enable JavaScript to run this application.</noscript>

    <div id="app"></div>

</body>
</html>