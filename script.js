import Clerk from '@clerk/clerk-js';

const clerkFrontendApi = pk_test_cXVpZXQtYmx1ZWJpcmQtMzcuY2xlcmsuYWNjb3VudHMuZGV2JA;
const clerk = new Clerk(clerkFrontendApi);
await clerk.load({
  console.log('hello')
});
