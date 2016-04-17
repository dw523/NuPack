# NuPack

## Installation

npm install

## Testing

npm test

## Notes

Despite the request in the instructions to limit the dependencies to
just Jasmine I found it necessary to also include the BigNumber.js 
dependency to properly handle floating point arithmetic since 
javascripts binary floating point arithmetic would not suffice for the 
financial calculations involved in this exercise.