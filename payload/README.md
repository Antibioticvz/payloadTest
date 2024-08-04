# Payload Blank Template

A blank template for [Payload](https://github.com/payloadcms/payload) to help you get up and running quickly. This repo may have been created by running `npx create-payload-app@latest` and selecting the "blank" template or by cloning this template on [Payload Cloud](https://payloadcms.com/new/clone/blank).

See the official [Examples Directory](https://github.com/payloadcms/payload/tree/main/examples) for details on how to use Payload in a variety of different ways.

## Production

To run Payload in production, you need to build and serve the Admin panel. To do so, follow these steps:

1. First invoke the `payload build` script by running `yarn build` or `npm run build` in your project root. This creates a `./build` directory with a production-ready admin bundle.
1. Then run `yarn serve` or `npm run serve` to run Node in production and serve Payload from the `./build` directory.

### Deployment

The easiest way to deploy your project is to use [Payload Cloud](https://payloadcms.com/new/import), a one-click hosting solution to deploy production-ready instances of your Payload apps directly from your GitHub repo. You can also deploy your app manually, check out the [deployment documentation](https://payloadcms.com/docs/production/deployment) for full details.
