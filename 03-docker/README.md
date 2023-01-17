# Paircoding Docker

## Bulding the docker image

**Building the image**
```
docker build .
```

**Naming the image**
```
docker build -t my-image .
```

## Starting the cointainer
```
docker run my-image
```

**Naming the container**
```
docker run --name my-container my-image
```

**Exposing port 5000**
```
docker run --name my-container -p 5000:5000 my-image
```

**Creating mount**
```
docker run --name my-container -p 5000:5000 -v my-mount:/app/public my-image
```

**Running the container detached**
```
docker run -d --name my-container -p 5000:5000 -v my-mount:/app/public my-image
```