import { NativeBaseProvider, extendTheme } from 'native-base';

const theme = extendTheme({
  // Your theme customization
});

export function withNativeBase<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  return function WithNativeBaseComponent(props: T) {
    return (
      <NativeBaseProvider theme={theme}>
        <WrappedComponent {...props} />
      </NativeBaseProvider>
    );
  };
}