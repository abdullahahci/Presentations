## Sample demo for React with docker
Builds the `React` code in a `Node` stage then copies the files that is built to `Nginx` image

Can be accessed via [http://localhost](http://localhost)

###Usage
#### docker build -t reactdemo .
#### docker run -d -p 80:80 reactdemo