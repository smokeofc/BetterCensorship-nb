# BetterCensorship

BetterCensorship provides a way to censor an image in such a way that the original picture is still hidden inside the resulting file. Everything runs in your browser so the image data never leaves your machine. Use `censor.html` to embed the payload and `decensor.html` to recover it.

## Running locally

The pages expect to be served over HTTP. From the repository root start a quick local server:

```bash
python3 -m http.server
```

Then open `http://localhost:8000/index.html` (or `censor.html`/`decensor.html`) in your browser. A local server is required because browsers block certain features when opening files directly.

## Translations

UI text is stored inside `languages/`. The `config.json` file lists each available language:

```json
[
  {
    "name": "English",
    "country-code": "GB",
    "filename": "english.json"
  },
  {
    "name": "Test template",
    "country-code": "US",
    "filename": "test.json"
  }
]
```

Each translation file is an array describing text for the different pages. `languages/test.json` serves as a template:

```json
{
  "page_affected": "index",
  "lineset": [
    "project_title",
    "do_censor",
    "do_decensor",
    "text1",
    "text2",
    "text3"
  ]
}
```

To contribute a new language:
1. Copy `languages/test.json` to a new file (for example `spanish.json`).
2. Replace the placeholder strings with your translations for every page.
3. Add an entry in `languages/config.json` pointing to the new file.
4. Send a pull request.

Existing translations follow this structure, for example `languages/norwegian.json` starts with:

```json
{
  "page_affected": "index",
  "lineset": [
    "BetterCensorship",
    "Sensurer Bilde",
    "Avsensurer Bilde"
  ]
}
```

## License

This project is released under the GPL-3.0 license.
