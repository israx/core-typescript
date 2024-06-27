/**
 * Assertion functions allow to check that a value meets given conditions before executing addional code;
 */

// Example
{
  interface UserPoolConfig {
    userPoolId: string;
    clientId: string;
  }

  interface IdentityPoolConfig {
    identityPoolId: string;
  }

  type AuthConfig = Partial<UserPoolConfig & IdentityPoolConfig>


  function handleUserPoolOperations() {
    const cognitoConfig = {} as AuthConfig;
    assertUserPoolConfig(cognitoConfig);
    // make user pool operations
    cognitoConfig
  }

  function assertUserPoolConfig(value: AuthConfig): asserts value is UserPoolConfig {
    const userPoolConfig = value as UserPoolConfig;
    if (!(userPoolConfig.clientId && userPoolConfig.userPoolId)) {
      throw new Error('No userpool config');
    }
  }
}
