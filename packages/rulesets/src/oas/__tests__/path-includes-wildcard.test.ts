import testRule from '../../__tests__/__helpers__/tester';

testRule('path-includes-wildcard', [
  {
    name: 'wildcard in middle of a path',
    document: {
      swagger: '2.0',
      paths: { '/path/*/': {} },
    },
    errors: [],
  },
  {
    name: 'wildcard at the end of a path',
    document: {
      swagger: '2.0',
      paths: { '/path/*': {} },
    },
    errors: [],
  },
  {
    name: 'wildcard at the start of a path',
    document: {
      swagger: '2.0',
      paths: { '/*/path': {} },
    },
    errors: [],
  },
]);
