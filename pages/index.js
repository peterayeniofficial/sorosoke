import { Heading, Button, Code, Text } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  console.log(auth);

  return (
    <div>
      <main>
        <Heading>Sorosoke</Heading>
        <Text>
          Get started by editing <Code>Speak Up</Code>
        </Text>

        {auth.user ? (
          <div>
            <p>Email: {auth.user.email}</p>
            <Button onClick={(e) => auth.signout()}>Sign Out</Button>
          </div>
        ) : (
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
