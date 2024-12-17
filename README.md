# Celcomdigi SDK

A comprehensive SDK for Mini App developers to integrate with the Celcomdigi Super App platform, providing a seamless and consistent user experience.

## Features

- **UI Components**: Pre-built React Native components following Celcomdigi's design system
- **Authentication**: Built-in authentication handling with `MiniAppAuthorisation`
- **Payment Integration**: Easy-to-use payment API integration
- **User Management**: Access to user data and permissions
- **Navigation**: Integration with React Navigation
- **Internationalization**: Built-in i18n support
- **Icons and Assets**: Access to Celcomdigi's icon library

## Installation

```bash
npm install @celcomdigi/sdk
# or
yarn add @celcomdigi/sdk
```

## Requirements

- React >= 18.2.0
- React Native >= 0.72.7
- TypeScript >= 5.3.0

## Quick Start

```typescript
import { MiniApp, HostAppProvider } from "@celcomdigi/sdk";

function YourMiniApp() {
  return (
    <HostAppProvider>
      <MiniApp>{/* Your app content */}</MiniApp>
    </HostAppProvider>
  );
}
```

## Available APIs

The SDK provides several APIs for different functionalities:

### Payments

- Payment processing
- Transaction history
- Bill payments

### User Management

- User authentication
- Profile management
- Permissions handling

### UI Components

- MiniApp container
- Authorization flows
- Common UI components

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build the SDK
yarn build

# Watch mode during development
yarn build:watch
```

## License

MIT License

## Support

For any issues or questions, please contact the Celcomdigi development team.
