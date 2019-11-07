
# Kurs NuxtJS - sklep internetowy

## Iteracja 1
Wstęp do NuxtJS i ExpressJS. Prosta strona z danymi dodanymi do asyncData

### Koncept
- Działanie aplikacji uniwersalnych
- Działanie serwera NodeJS w połączeniu z NuxtJS
    - [Basic explanation](https://zendev.com/2018/09/17/frontend-architecture-lessons-from-nuxt-js.html)
    - [Advanced explanation](https://medium.com/free-code-camp/universal-application-code-structure-in-nuxt-js-4cd014cc0baa)
- Generowanie projektu NuxtJS
- Elementy kluczowe aplikacji
- Działanie asyncData i fetch
- Działanie lifecycle hooks w apce NuxtJS

### Zadania
- Wygeneruj projekt
- Dodaj funkcje zwracajaca promise z danymi
- Dodaj stronę główną z listingiem produktów
- Dodaj pustą stronę produktu


## Iteracja 2
Użycie stora

### Koncept
- Działanie nuxtServerInit
- Działanie modułów - modul axios
- Strzały do API i zapisywanie danych w store
- Modyfikacja zmiennej w expresie poprzez zapytania do API

### Zadania
- Dodaj moduł axios do aplikacji
- Dodaj serverMiddleware oparty o expressJS
- Dodaj strukture danych zapisana w expressJS
- Zadanie extra: Dodaj dane w firebase lub wykonaj `npm i --g http-server`

## Iteracja 3
Autoryzacja

### Koncept
- Dodanie autoryzacji z nuxt auth module

### Zadania
- zintegruj nuxt auth module z aplikacja (uzyj auth0, github, google lub innej usługi)
- Dodaj guzik kup produkt, ktory bedzie wysylal dane usera (prośba o kontakt)

## Iteracja 4
Dodawanie produktów do sklepu

### Koncept
- Zewnetrzna baza danych w firebase (lub innej usłudze)
- dodawanie danych do bazy
- markdown edytor do opisu produktu

### Zadania
- Dodaj dane w firebase lub wykonaj `npm i --g http-server`
- Dodaj strone dodawania produktow
- Dodaj plugin vue markdown editor
- Dodaj zapisywanie tytulu, markdownu opisu oraz zdjecia w bazie danych
