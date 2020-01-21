# truffle_external_compiler_sample

## Requirements

- node
  - v12.12.0

## Run Local

### Install modules

```
npm install
```

### Run Compile

```
npx truffle compile
```

### Run Tests

```
npx truffle test
```

## Run On Docker

### Create Container

```
docker-compose up
```

### Run Compile

```
docker-compose exec ext-compiler npx truffle compile
```

### Run Tests

```
docker-compose exec ext-compiler npx truffle compile
```

### Stop Container

```
docker-compose down
```


