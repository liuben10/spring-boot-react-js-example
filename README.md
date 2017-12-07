# Spring Boot with ReactJS using WebPack and Yarn. #

### Summary ###

This a simple skeleton project that I've found useful that just
creates a simple spring-boot application that has a react front end as well.

### Running ###

To run the front end, cd into ./example-frontend and run

```yarn start```

By default, this will start the front end at http://localhost:3000. If you want to
change the default port, modify package.json and change the start script section to

``` start: export PORT=3006 && react-scripts start```

To run the back end, from the project root directory, run

```mvn spring-boot:run```

By default, this will start the backend server at http://localhost:8080.

To change the port, modify src/main/resources/application.properties to include server.port=xxxx where xxxx is your desired port number.

### Installation ###

In the source directory, run

```mvn install -DskipTests```

In the example-frontend directory run

``` yarn install```

You might have to install the appropriate versions of npm or mvn.

As of writing this tutorial, I am using npm 4.6.1 and I am using maven 3.3.9 with JDK version 1.8.0_92 for building
ReactJS and Java code respectively.

