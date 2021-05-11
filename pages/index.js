import Head from 'next/head';

import { Button, Code, Text, Flex } from '@chakra-ui/react';
import { useAuth } from '@/lib/auth';
import Logo from '@/components/Logo';

export default function Home() {
  const auth = useAuth();

  console.log(auth);

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Sorosoke</title>
      </Head>

      <Logo boxSize={20} />
      <Text>
        <Code>Speak Up</Code> Now!
      </Text>

      {auth.user ? (
        <>
          <Button mt={4} as="a" href="/dashboard">
            View Dashboard
          </Button>
          <Button variant="ghost" mr={2} onClick={() => auth.signout()}>
            Log Out
          </Button>
        </>
      ) : (
        <Button mt={4} onClick={(e) => auth.signinWithGitHub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
}
