<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @viteReactRefresh
   @vite(['resources/css/app.css', 'resources/css/ui.css', 'resources/js/app.jsx'])
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html>