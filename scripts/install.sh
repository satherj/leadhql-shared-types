#!/bin/bash

# Script to install or link the shared types package to both frontend and backend

# Build the package
echo "Building shared types package..."
npm run build

# Option 1: Use npm link (for development)
if [ "$1" == "link" ]; then
  echo "Creating symlink for shared types package..."
  npm link
  
  echo "Linking to frontend project..."
  cd ../../leadhql-frontend-nextjs
  npm link leadhql-shared-types
  
  echo "Linking to backend project..."
  cd ../leadhql-backend-nestjs
  npm link leadhql-shared-types
  
  echo "Links created successfully!"

# Option 2: Install as local dependency
else
  echo "Installing as local dependency in frontend project..."
  cd ../../leadhql-frontend-nextjs
  npm install ../leadhql-shared-types
  
  echo "Installing as local dependency in backend project..."
  cd ../leadhql-backend-nestjs
  npm install ../leadhql-shared-types
  
  echo "Installation completed successfully!"
fi

echo "Note: For production, consider publishing this package to a private npm registry." 