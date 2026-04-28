<template>
 

<body class="bg-[#F8FAF4] text-[#232323]">

  <!-- PAGE 1: HOMEPAGE -->
  <section id="home" class="relative min-h-screen hero-bg overflow-hidden">
    <nav class="absolute top-0 left-0 w-full z-30">
      <div class="relative max-w-7xl mx-auto h-28 px-6 flex items-center justify-between">
        <div class="hidden lg:flex flex-1 justify-end pr-40 gap-12 text-white font-medium">
          <a href="#home" class="hover:text-[#8DC63F] transition">Početna</a>
          <a href="#products" class="hover:text-[#8DC63F] transition">Naši proizvodi</a>
        </div>

        <div class="absolute left-1/2 -translate-x-1/2 top-8">
          <img src="/images/logo_poljorad.png" alt="Poljorad logo" class="w-64 object-contain">
        </div>

        <div class="hidden lg:flex flex-1 justify-start pl-40 gap-12 text-white font-medium">
          <a href="#about" class="hover:text-[#8DC63F] transition">O nama</a>
          <a href="#contact" class="hover:text-[#8DC63F] transition">Kontakt</a>
        </div>

        <button class="lg:hidden text-white text-3xl">☰</button>
      </div>
    </nav>

    <div class="relative z-10 max-w-7xl mx-auto min-h-screen px-6 flex items-center pt-28">
      <div class="max-w-2xl text-white">
        <p class="uppercase tracking-[.35em] text-sm text-[#CBE9A2] mb-5">Poljorad Turbe</p>
        <h1 class="serif text-6xl lg:text-8xl leading-[.95] font-bold mb-8">
          Okus tradicije<br>iz srca Vlašića
        </h1>
        <p class="text-xl text-white/85 max-w-xl mb-10">
          Prirodni proizvodi iz Turbeta: mliječni proizvodi i proizvodi od kupusa nastali spojem tradicije i savremene proizvodnje.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#products" class="bg-[#8DC63F] text-[#0F4D2E] px-8 py-4 font-bold text-center hover:bg-white transition">Pogledaj asortiman</a>
          <a href="#about" class="border border-white/70 text-white px-8 py-4 font-semibold text-center hover:bg-white hover:text-[#0F4D2E] transition">Saznaj više</a>
        </div>
      </div>
    </div>
  </section>

  <!-- TRUST NUMBERS -->
  <section class="bg-white py-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div class="p-8 border border-[#E4EAD8]">
        <h3 class="serif text-5xl text-[#0F4D2E] font-bold">30+</h3>
        <p class="mt-2 text-gray-600">godina tradicije</p>
      </div>
      <div class="p-8 border border-[#E4EAD8]">
        <h3 class="serif text-5xl text-[#0F4D2E] font-bold">1200</h3>
        <p class="mt-2 text-gray-600">domaćih kooperanata</p>
      </div>
      <div class="p-8 border border-[#E4EAD8]">
        <h3 class="serif text-5xl text-[#0F4D2E] font-bold">Vlašić</h3>
        <p class="mt-2 text-gray-600">priroda, mlijeko i kvalitet</p>
      </div>
    </div>
  </section>

  <!-- PRODUCTS PAGE / SECTION -->
  <section id="products" class="py-24 bg-[#F8FAF4]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
        <div>
          <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-3">Asortiman</p>
          <h2 class="serif text-5xl lg:text-6xl text-[#0F4D2E] font-bold">Naši proizvodi</h2>
        </div>
        <p class="max-w-xl text-gray-600 text-lg">
          Poljorad asortiman podijeljen je u dvije glavne kategorije: proizvodi od mlijeka i proizvodi od kupusa.
        </p>
      </div>

      <!-- CATEGORY CARDS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        <article class="relative min-h-[420px] overflow-hidden group bg-[#0F4D2E]">
          <img src="/images/mlijecni-proizvodi.jpg" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700" alt="Proizvodi od mlijeka">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F4D2E] via-[#0F4D2E]/45 to-transparent"></div>
          <div class="relative z-10 h-full p-10 flex flex-col justify-end text-white">
            <p class="uppercase tracking-[.3em] text-xs text-[#CBE9A2] font-bold mb-4">Kategorija 01</p>
            <h3 class="serif text-5xl font-bold mb-4">Proizvodi od mlijeka</h3>
            <p class="text-white/80 text-lg max-w-md mb-6">Sir, kajmak i drugi mliječni proizvodi nastali iz domaćeg mlijeka i tradicije Vlašića.</p>
            <a href="#milk-products" class="inline-block w-fit bg-[#8DC63F] text-[#0F4D2E] px-7 py-3 font-bold">Pogledaj proizvode</a>
          </div>
        </article>

        <article class="relative min-h-[420px] overflow-hidden group bg-[#0F4D2E]">
          <img src="/images/kupus-proizvodi.jpg" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700" alt="Proizvodi od kupusa">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F4D2E] via-[#0F4D2E]/45 to-transparent"></div>
          <div class="relative z-10 h-full p-10 flex flex-col justify-end text-white">
            <p class="uppercase tracking-[.3em] text-xs text-[#CBE9A2] font-bold mb-4">Kategorija 02</p>
            <h3 class="serif text-5xl font-bold mb-4">Proizvodi od kupusa</h3>
            <p class="text-white/80 text-lg max-w-md mb-6">Tradicionalni proizvodi od kupusa pripremljeni za domaću kuhinju i porodičnu trpezu.</p>
            <a href="#cabbage-products" class="inline-block w-fit bg-white text-[#0F4D2E] px-7 py-3 font-bold">Pogledaj proizvode</a>
          </div>
        </article>
      </div>

      <!-- MILK PRODUCTS -->
      <div id="milk-products" class="mb-16">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-px bg-[#8DC63F] flex-1"></div>
          <h3 class="serif text-4xl text-[#0F4D2E] font-bold">Proizvodi od mlijeka</h3>
          <div class="h-px bg-[#8DC63F] flex-1"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/sir.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Travnički sir">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Travnički sir</h4>
              <p class="text-gray-600 mb-5">Bijeli sir prepoznatljive teksture i tradicionalnog okusa.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/kajmak.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Kajmak">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Domaći kajmak</h4>
              <p class="text-gray-600 mb-5">Kremast, bogat i punog okusa, za tradicionalnu trpezu.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/mlijeko.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Mlijeko">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Mlijeko</h4>
              <p class="text-gray-600 mb-5">Svježina domaćeg mlijeka s obronaka Vlašića.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/mlijecni-namaz.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Mliječni namaz">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Mliječni proizvodi</h4>
              <p class="text-gray-600 mb-5">Pažljivo odabrani proizvodi za svakodnevnu upotrebu.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>
        </div>
      </div>

      <!-- CABBAGE PRODUCTS -->
      <div id="cabbage-products">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-px bg-[#8DC63F] flex-1"></div>
          <h3 class="serif text-4xl text-[#0F4D2E] font-bold">Proizvodi od kupusa</h3>
          <div class="h-px bg-[#8DC63F] flex-1"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/kiseli-kupus.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Kiseli kupus">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Kiseli kupus</h4>
              <p class="text-gray-600 mb-5">Tradicionalni proizvod za pripremu domaćih jela.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/ribani-kupus.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Ribani kupus">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Ribani kupus</h4>
              <p class="text-gray-600 mb-5">Praktično pakovanje za brzu pripremu tradicionalnih jela.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/list-kupusa.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="List kupusa">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">List kupusa</h4>
              <p class="text-gray-600 mb-5">Spreman za pripremu sarme i domaćih specijaliteta.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT PAGE / SECTION -->
  <section id="about" class="py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <div class="absolute -left-6 -top-6 w-32 h-32 bg-[#8DC63F]/20"></div>
        <img src="/images/farma.jpg" class="relative w-full h-[560px] object-cover shadow-xl" alt="Farma">
      </div>

      <div>
        <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-4">O nama</p>
        <h2 class="serif text-5xl lg:text-6xl text-[#0F4D2E] leading-tight font-bold mb-8">
          Tradicija, priroda i odgovorna proizvodnja.
        </h2>
        <p class="text-lg text-gray-600 mb-5">
          Poljorad je kompanija iz Turbeta koja njeguje tradiciju proizvodnje mliječnih proizvoda i povjerenje domaćih proizvođača mlijeka.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Naši proizvodi nastaju iz pažljivo odabranog mlijeka, uz spoj tradicionalnih receptura i savremene kontrole kvaliteta.
        </p>
        <a href="#contact" class="inline-block bg-[#0F4D2E] text-white px-8 py-4 font-semibold hover:bg-[#8DC63F] transition">Kontaktirajte nas</a>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="py-24 bg-[#0F4D2E] text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-4">Proces</p>
        <h2 class="serif text-5xl font-bold mb-5">Od domaćeg mlijeka do proizvoda</h2>
        <p class="text-white/75 text-lg">Tri jednostavna koraka čuvaju ono najvažnije: kvalitet, svježinu i prepoznatljiv okus.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-8 border border-white/20">
          <span class="text-[#8DC63F] font-bold text-5xl">01</span>
          <h3 class="serif text-3xl mt-6 mb-3">Otkup mlijeka</h3>
          <p class="text-white/70">Saradnja s lokalnim proizvođačima i pažljiv odabir sirovine.</p>
        </div>
        <div class="p-8 border border-white/20">
          <span class="text-[#8DC63F] font-bold text-5xl">02</span>
          <h3 class="serif text-3xl mt-6 mb-3">Proizvodnja</h3>
          <p class="text-white/70">Tradicionalni pristup uz savremene tehnološke standarde.</p>
        </div>
        <div class="p-8 border border-white/20">
          <span class="text-[#8DC63F] font-bold text-5xl">03</span>
          <h3 class="serif text-3xl mt-6 mb-3">Kontrola kvaliteta</h3>
          <p class="text-white/70">Kvalitet koji se prati od ulaza sirovine do gotovog proizvoda.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA / VLASIC -->
  <section class="soft-vlasic py-28">
    <div class="max-w-7xl mx-auto px-6 text-white">
      <div class="max-w-2xl">
        <h2 class="serif text-5xl lg:text-6xl font-bold mb-6">Priroda se osjeti u svakom zalogaju.</h2>
        <p class="text-xl text-white/85 mb-8">Inspirisani Vlašićem, stvaramo proizvode koji spajaju domaću recepturu i savremeni kvalitet.</p>
        <a href="#products" class="inline-block bg-white text-[#0F4D2E] px-8 py-4 font-bold">Istraži proizvode</a>
      </div>
    </div>
  </section>

  <!-- CONTACT PAGE / SECTION -->
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
      <div>
        <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-4">Kontakt</p>
        <h2 class="serif text-5xl lg:text-6xl text-[#0F4D2E] font-bold mb-8">Kontaktirajte nas</h2>
        <p class="text-lg text-gray-600 mb-8">
          Za informacije o proizvodima, saradnji i otkupu mlijeka, pošaljite upit ili nas kontaktirajte direktno.
        </p>

        <div class="space-y-5 text-gray-700">
          <div>
            <p class="font-bold text-[#0F4D2E]">Lokacija</p>
            <p>Turbe, Travnik, Bosna i Hercegovina</p>
          </div>
          <div>
            <p class="font-bold text-[#0F4D2E]">Telefon</p>
            <p>+387 XX XXX XXX</p>
          </div>
          <div>
            <p class="font-bold text-[#0F4D2E]">E-mail</p>
            <p>info@poljorad.ba</p>
          </div>
        </div>
      </div>

      <form class="bg-[#F8FAF4] p-8 shadow-sm">
        <div class="grid grid-cols-1 gap-5">
          <input class="p-4 bg-white border border-[#E4EAD8]" placeholder="Ime i prezime">
          <input class="p-4 bg-white border border-[#E4EAD8]" placeholder="E-mail">
          <input class="p-4 bg-white border border-[#E4EAD8]" placeholder="Naslov poruke">
          <textarea class="p-4 bg-white border border-[#E4EAD8] h-36" placeholder="Poruka"></textarea>
          <button class="bg-[#0F4D2E] text-white p-4 font-bold hover:bg-[#8DC63F] transition">Pošalji poruku</button>
        </div>
      </form>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-[#0F4D2E] text-white py-10">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <img src="/images/logo_poljorad.png" class="w-40" alt="Poljorad">
      <p class="text-white/70">© 2026 Poljorad. Sva prava zadržana.</p>
      <div class="flex gap-6 text-white/80">
        <a href="#home">Početna</a>
        <a href="#products">Proizvodi</a>
        <a href="#about">O nama</a>
        <a href="#contact">Kontakt</a>
      </div>
    </div>
  </footer>

</body>
    </template>

     <style>
    body { font-family: 'Inter', sans-serif; }
    .serif { font-family: 'Playfair Display', serif; }
    .hero-bg {
      background:
        linear-gradient(90deg, rgba(15,77,46,.82) 0%, rgba(15,77,46,.42) 42%, rgba(15,77,46,.08) 100%),
        linear-gradient(0deg, rgba(35,35,35,.82) 0%, rgba(35,35,35,0) 33%),
        url('/images/poljorad_hero.png');
      background-size: cover;
      background-position: center;
    }
    .soft-vlasic {
      background:
        linear-gradient(rgba(15,77,46,.55), rgba(15,77,46,.55)),
        url('/images/vlasic.jpg');
      background-size: cover;
      background-position: center;
    }
  </style>