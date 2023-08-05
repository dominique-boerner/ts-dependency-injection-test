# About this repository

## Overview

The `ts-dependency-injection-test` repository is a project primarily designed to explore and demonstrate the use of
dependency injection in TypeScript applications. This repository includes a simple example to help
developers understand the concept of dependency injection and how to implement it in TypeScript.

## Features

1. **Dependency Injection in TypeScript:** The repository explores the concept of dependency injection, a software
   design pattern that deals with how components get their dependencies.

2. **Comprehensive Example:** This repository provides an example demonstrating the different use cases and scenarios
   where dependency injection can be used.

## What is dependency injection?

Dependency Injection (DI) is a design pattern used in programming and software engineering to reduce the hard-coded
dependencies among objects, making a system more modular, flexible, and efficient. It's often used as a technique for
achieving Inversion of Control (IoC) between classes and their dependencies.

The fundamental idea behind Dependency Injection is that a class should not configure its dependencies statically, but
should be configured from the outside. In simpler terms, a class should not create the objects it requires to function.
Instead, these objects (dependencies) should be provided to the class (injected) by a controlling "container" or "
injector" component.

## Getting Started

### Prerequisites

- Node.js
- npm
- TypeScript

### Installation

1. Clone the repository to your local machine:

```sh
$ git clone https://github.com/dominique-boerner/ts-dependency-injection-test.git
```

2. Install NPM packages:

```sh
$ cd ts-dependency-injection-test
$ npm install
```

3. Run the application

```sh
$ npm run dev
```

You can look into the console of the application, where it should say _"Connected to Postgres!"_.

