# LeadHQL Shared Types

This package contains shared TypeScript types between the LeadHQL frontend and backend applications.

## Installation

### For Local Development

From the root of the monorepo:

```bash
# From leadhql-frontend-nextjs or leadhql-backend-nestjs
npm install ../leadhql-shared-types
```

Or you can use a symlink for development:

```bash
# From the shared types package directory
npm link

# From the frontend or backend directory
npm link leadhql-shared-types
```

### For Production

Once published to a registry:

```bash
npm install leadhql-shared-types
```

## Usage

```typescript
import { Lead, LeadStatus, Organization } from 'leadhql-shared-types';

// Use the types in your frontend or backend code
const lead: Lead = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  // ...other required fields
};
```

## Type Definitions

This package includes TypeScript definitions for:

- Lead
- Organization
- LeadGroup
- Plan
- Transaction
- PriceSettings
- LeadGroupSubscription
- MetaToken
- FxRate
- PollTimestamp
- SubscriptionLanguagePreference
- ZapierApiKey

## Contributing

When making changes to entities in the backend, please ensure the corresponding type definitions in this package are updated accordingly. # leadhql-shared-types
