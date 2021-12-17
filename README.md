# Infuse Tech Interview

This project is a technical interview for Infuse.us. It's an application that contains 2 endpoints:
- `/data`: Accepts a POST request containing some data as a string. The response
should contain the string reversed.
- `/app`: Serves one page of static HTML. It displays a text input, a submit button, and a
div. When a user presses the submit button, a POST request is sent to the /data
endpoint containing the content of the text input. The response from the POST request
should then be displayed in the div.

The technologies used on this project:

- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jade](https://jade-lang.com/)
- [Jest](https://jestjs.io/)


#### Development

To run the application on port 3333 you can simply run the following code, and then access http://localhost:3333/[http://localhost:3333/]:

```sh
$ npm run dev
```

#### Testing

To test the API entry points run:

```sh
$ npm run test
```