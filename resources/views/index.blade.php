<!DOCTYPE html>
<html lang="{{ env('APP_LOCALE', 'bs') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Poljorad d.o.o. Turbe-Travnik | Mliječni proizvodi i kupus asortiman</title>

    <meta name="description" content="Poljorad d.o.o. Turbe-Travnik je domaći proizvođač mliječnih proizvoda i proizvoda od kupusa. Tradicija, priroda i savremena proizvodnja iz srca Vlašića.">
    <meta name="keywords" content="Poljorad, Poljorad Turbe, Poljorad Travnik, mliječni proizvodi, travnički sir, vlašićki sir, kajmak, kupus asortiman, kiseli kupus, domaći proizvodi, Turbe, Travnik, Vlašić">
    <meta name="author" content="Poljorad">
    <meta name="robots" content="index, follow">

    <link rel="canonical" href="{{ env('APP_URL') }}">

    <meta property="og:type" content="website">
    <meta property="og:title" content="Poljorad d.o.o. Turbe-Travnik | Okus tradicije iz srca Vlašića">
    <meta property="og:description" content="Mliječni proizvodi i proizvodi od kupusa nastali spojem tradicije, domaće recepture i savremene kontrole kvaliteta.">
    <meta property="og:url" content="{{ env('APP_URL') }}">
    <meta property="og:image" content="{{ url('/images/og-poljorad.jpg') }}">
    <meta property="og:site_name" content="Poljorad">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Poljorad d.o.o. Turbe-Travnik">
    <meta name="twitter:description" content="Domaći mliječni proizvodi i kupus asortiman iz Turbeta kod Travnika.">
    <meta name="twitter:image" content="{{ url('/images/og-poljorad.jpg') }}">
    <link rel="icon" href="{{ asset('favicon_set/favicon.ico') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon_set/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon_set/favicon-16x16.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('favicon_set/apple-touch-icon.png') }}">
    @vite(['resources/styles/main.css', 'resources/app/main.js'])

    <script>
        window.AppConfig = {
            name: '{{ env('APP_NAME') }}',
            logo: '{{ url('/assets/images/logo.png') }}',
            url: '{{ env('APP_URL') }}',
            csrf: '{{ csrf_token() }}',
            defaultLocale: '{{ env('APP_LOCALE', 'en') }}',
            defaultTimezone: '{{ env('APP_TIMEZONE', 'UTC') }}',
            locales: {
                en: {!! json_encode(\Illuminate\Support\Facades\Lang::get('frontend', [], 'en')) !!},
                bs: {!! json_encode(\Illuminate\Support\Facades\Lang::get('frontend', [], 'bs')) !!}
            }
        };
    </script>

    <script type="application/ld+json">
    {
        "@@context": "https://schema.org",
        "@@type": "FoodEstablishment",
        "name": "Poljorad d.o.o. Turbe-Travnik",
        "alternateName": "Poljorad",
        "description": "Poljorad d.o.o. Turbe-Travnik je proizvođač mliječnih proizvoda i proizvoda od kupusa iz Turbeta kod Travnika.",
        "url": "{{ env('APP_URL') }}",
        "logo": "{{ url('/images/logo_poljorad.png') }}",
        "image": "{{ url('/images/og-poljorad.jpg') }}",
        "address": {
            "@@type": "PostalAddress",
            "streetAddress": "Bosanska bb",
            "addressLocality": "Turbe",
            "addressRegion": "Travnik",
            "postalCode": "72283",
            "addressCountry": "BA"
        },
        "foundingDate": "1990"
    }
    </script>
</head>

<body>
<noscript>
    <strong>We're sorry but this application doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>

<div id="app"></div>

</body>
</html>