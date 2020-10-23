# EasyHTTP

### A library for making HTTP requests more easily.

There are a few versions of it.  
I'd advise to use the file called **easyhttpV3.js** since it's the latest one.

How to use it you ask?  
You essentially instantiate a new "http" object, like this:

```javascript
  const http = new EasyHTTP;
```

After that, you'll have access to four methods (which, they all return a **promise**) :  
* **get()**
* **post()**
* **put()**
* **delete()**

Both **get()** and **delete()** just take in a **URL**  

```javascript
  const http = new EasyHTTP;

  http.get("https://jsonplaceholder.typicode.com/users/");

  http.delete("https://jsonplaceholder.typicode.com/users/5");
```

...while **post()** and **put()** take in both a **URL** and **data** to be sent

```javascript
  const http = new EasyHTTP,
        DIO = {
          名前: "ディオ・ブランドー",
          スタンド: "ザ・ワールド",
        },
        Kakyoin = {
          名前: "花京院典明",
          スタンド: "ハイエロファントグリーン",
        };

  http.post("https://jsonplaceholder.typicode.com/users/", DIO);

  http.put("https://jsonplaceholder.typicode.com/users/5", Kakyoin);
```

Now, of course, remember to append **.then()** and **.catch()** at the end of your "http.*()" requests since, again, they return a promise.

```javascript
  http.get("https://jsonplaceholder.typicode.com/users/")
  .then(res => console.log(res)) // Do whatever you want with your data
  .catch(err => console.error(err)) // Handle an error
```

MIT License, btw.