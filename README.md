# @gnucki/firestore-emulator-hello-world
This package is just a POC of how to use firestore local emulator in Node.js.

## Use
First, build firestore emulator image:
```sh
$ docker build . -f Dockerfile.firestore -t firestore:1.4.0
```

Then, run the related container:
```sh
$ docker run -ti --rm -p 8080:8080 -d --name firestore firestore:1.4.0
```

Finally, execute the sample code:
```sh
$ node index.js
```
